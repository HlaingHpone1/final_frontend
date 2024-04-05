import React, { useState } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

import { images } from "../images";
import { CommentContent } from "../comment/CommentContent";
import { useDeletePost, usePostMessage, useLocalSessionStore } from "../Store";

import CreatePostModel from "../createPostModel/CreatePostModel";

import {
    collection,
    doc,
    setDoc,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Loading } from "../loading/Loading";
import { v4 } from "uuid";

const Post = ({ data, isOwner }) => {
    const { id } = useParams();

    const [showFullDes, setShowFullDes] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [input, setInput] = useState({ comment: "" });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataComments, setDataComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    const { apiCall: deletePost } = useDeletePost();
    const { apiCall: postMessage } = usePostMessage();
    const { userData } = useLocalSessionStore();

    const toggleDesc = () => {
        setShowFullDes(!showFullDes);
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };
    const dbRef = collection(db, "comments");
    const dbRefLike = collection(db, "likes");

    const postId = v4();

    const likeHandler = async (id) => {
        setIsLiked(!isLiked);

        const likeDataPost = {
            id: id,
            postId: data.id,
            userId: userData.data.id,
            likeTime: serverTimestamp(),
        };

        // console.log(data);
        // console.log(likeData);

        if (isLiked) {
            const dbRef1 = doc(db, "likes", filteredData[0].id);
            await deleteDoc(dbRef1);

            // console.log("Unliked");
        } else {
            // console.log(id);
            // console.log("Liked");

            const likeDocRef = doc(dbRefLike, id);

            await setDoc(likeDocRef, likeDataPost);
        }

        // console.log(filteredData);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const commentId = v4();

        const commentData = {
            id: commentId,
            postId: data.id,
            userId: userData.data.id,
            userName: userData.data.userName,
            comment: input.comment,
            profileImg: userData.data.profileImg,
            commentTime: new Date().toISOString(),
        };

        // const commentRef = doc(dbRef, `${data.id}_${data.userId}`);
        // await setDoc(commentRef, commentData);

        try {
            const commentDocRef = doc(dbRef, commentId);

            await setDoc(commentDocRef, commentData);
            setIsLoading(false);

            const res = await postMessage(data.userId, data.id, {
                text: input.comment,
            });
            setInput({ comment: "" });
        } catch (error) {
            console.error("Error adding comment: ", error);
            setIsLoading(false);
        }
    };

    const [likeData, setLikeData] = useState([]);

    const likeOnSnapshot = onSnapshot(dbRefLike, (data) => {
        const newData = data.docs.map((doc) => doc.data());
        setLikeData(newData);
    });

    const filteredLikes = likeData.filter((like) => like.postId === data.id);

    const onShap = onSnapshot(dbRef, (data) => {
        const newData = data.docs.map((doc) => doc.data());
        setDataComments(newData);
    });

    const [numCommentsDisplayed, setNumCommentsDisplayed] = useState(1);

    const handleSeeMore = () => {
        setNumCommentsDisplayed(dataComments.length);
    };

    const words = data.caption.split(" ");
    const shortDesc =
        words.slice(0, 50).join(" ") + (words.length > 50 ? "..." : "");
    const fullDesc = data.caption;
    const followers = data.followers.toLocaleString();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDelete = async (postID) => {
        await deletePost(userData.data.id, postID);
        window.location.reload();
    };

    const handleEdit = (postID) => {
        setPost(data);
    };

    // console.log("====================================");
    // console.log(post);
    // console.log("====================================");

    const filteredComments = dataComments.filter(
        (comment) => comment.postId === data.id
    );

    const filteredData = likeData.filter(
        (d) => d.userId === data.userId && d.postId === data.id
    );

    return (
        <>
            {/* {isLoading && <Loading isLoading={isLoading} />} */}

            <section className="bg-white text-black  rounded-2xl shadow-custom mb-5 overflow-hidden">
                <div className="">
                    {/* 1st row */}
                    <div className="flex mx-4 justify-between py-3">
                        <div className="flex gap-2">
                            <div>
                                <img
                                    src={data.profileImg}
                                    className="rounded-full size-12 aspect-square object-cover border-2 border-black"
                                />
                            </div>
                            <div>
                                <h2 className="text-base font-bold font-Roboto-Slab">
                                    <Link to={`/profile/${data.userId}`}>
                                        {data.accountName}
                                    </Link>
                                </h2>
                                <p className="text-xs text-[#818181]">
                                    {followers} Followers
                                </p>
                                <p className="text-xs text-[#818181]">
                                    {moment(data.uploadTime).fromNow()}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <button onClick={toggleDropdown}>
                                <img src={images.dot} className="size-5 mr-2" />
                            </button>
                            {isDropdownOpen && isOwner && (
                                <div className="dropdown-menu absolute top-5 right-0 z-auto shadow-md bg-white rounded-md py-2">
                                    <button
                                        className="block px-4 py-2 w-full text-base text-gray-700 hover:bg-gray-100"
                                        onClick={() => {
                                            handleEdit(data.id);
                                            setModalIsOpen(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <CreatePostModel
                                        modalIsOpen={modalIsOpen}
                                        setModalIsOpen={setModalIsOpen}
                                        data={post}
                                    />
                                    <button
                                        className="block px-4 py-2 w-full text-base text-gray-700 hover:bg-gray-100"
                                        onClick={() => handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                            <button>
                                <img src={images.cross} className="size-5" />
                            </button>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="mx-4 text-sm mb-5">
                        <p className="break-all">
                            {showFullDes ? fullDesc : shortDesc}
                            &nbsp; &nbsp;
                            {!showFullDes && words.length > 50 && (
                                <button className="" onClick={toggleDesc}>
                                    See more
                                </button>
                            )}
                        </p>
                    </div>

                    {/* 3rd row */}
                    <div>
                        {data.uploadPhoto && (
                            <img
                                className="block object-cover w-full aspect-auto"
                                src={data.uploadPhoto}
                                alt="this is post images"
                            />
                        )}
                    </div>

                    {/* 4th row */}
                    <div className="flex justify-between text-xs  mx-4 my-2 border-b">
                        <div className="flex gap-1">
                            <img
                                src={images.likeFull}
                                className="size-6 mb-2"
                            />
                            <p className="my-auto">{filteredLikes.length}</p>
                        </div>
                        <div className="flex my-auto gap-4">
                            <p>{filteredComments.length} Comment</p>
                            <p>234 Repost</p>
                        </div>
                    </div>

                    {/* 5th row */}
                    <div className="flex flex-wrap">
                        <button
                            className="flex-1 flex justify-center py-3 gap-0 xs:gap-1"
                            onClick={() => likeHandler(postId)}
                        >
                            <img
                                src={`${
                                    filteredData.length > 0
                                        ? images.likeFull
                                        : images.like
                                }`}
                                className="size-4 xs:size-6"
                            />
                            <p className="text-xs xs:text-sm">Like</p>
                        </button>
                        <button
                            className="flex-1 flex justify-center py-3 gap-0 xs:gap-1"
                            onClick={() => setShowCommentBox(!showCommentBox)}
                        >
                            <img
                                src={images.comment}
                                className="size-4 xs:size-6 my-auto"
                            />
                            <p className="text-xs xs:text-sm">Comment</p>
                        </button>

                        <button className="flex-1 flex justify-center py-3 gap-0 xs:gap-1">
                            <img
                                src={images.repost}
                                className="size-4 xs:size-6"
                            />
                            <p className="text-xs xs:text-sm">Repost</p>
                        </button>
                        <button className="flex-1 flex justify-center py-3 gap-0 xs:gap-1 ">
                            <img
                                src={images.send}
                                className="size-4 xs:size-6 "
                            />
                            <p className="text-xs xs:text-sm">Send</p>
                        </button>
                    </div>
                    <div className="">
                        {showCommentBox && (
                            <div className="">
                                <div className="py-2.5">
                                    {dataComments
                                        .filter(
                                            (comment) =>
                                                comment.postId === data.id
                                        )
                                        .slice(0, numCommentsDisplayed)
                                        .map((comment, index) => (
                                            <CommentContent
                                                key={index}
                                                data={comment}
                                                isOwner={isOwner}
                                            />
                                        ))}
                                </div>
                                {numCommentsDisplayed < dataComments.length && (
                                    <div className="px-5">
                                        <button onClick={handleSeeMore}>
                                            View All Comments
                                        </button>
                                    </div>
                                )}

                                <form
                                    className="flex items-center p-2 border-t border-gray-300 bg-gray-200"
                                    onSubmit={submitHandler}
                                >
                                    <img
                                        src={data.profileImg}
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <input
                                        type="text"
                                        name="comment"
                                        onChange={inputHandler}
                                        value={input.comment}
                                        className="flex-grow rounded-full border-none p-2 bg-white"
                                        placeholder="Write a comment..."
                                    />
                                    <button type="submit" className="ml-2">
                                        <img
                                            src={images.sent1}
                                            className="size-6"
                                        />
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Post;
