import React, { useState } from "react";
import moment from "moment";

import { images } from "../images";
import { CommentContent } from "../comment/CommentContent";
import { useLocalSessionStore } from "../Store";

const Post = ({ data }) => {
    const [showFullDes, setShowFullDes] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [input, setInput] = useState({ comment: "" });

    const { userData } = useLocalSessionStore();

    const toggleDesc = () => {
        setShowFullDes(!showFullDes);
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value.trim(),
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(input);
    };

    const [numCommentsDisplayed, setNumCommentsDisplayed] = useState(1);

    const handleSeeMore = () => {
        setNumCommentsDisplayed(comments.length);
    };

    const words = data.caption.split(" ");
    const shortDesc =
        words.slice(0, 50).join(" ") + (words.length > 50 ? "..." : "");
    const fullDesc = data.caption;
    const followers = data.followers.toLocaleString();

    // DEMO DATA
    const comments = [
        {
            id: 1,
            text: "This is the first comment commentcommentcommentcommentcommentcommentcomment commentcommentcommentcomment comment commentcomment comment",
            author: "User1",
            time: "2022-01-01 10:00:00",
            profileImg:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            text: "This is the second comment",
            author: "User2",
            time: "2022-01-02 11:00:00",
            profileImg:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            text: "This is the third comment",
            author: "User3",
            time: "2022-01-03 12:00:00",
            profileImg:
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    return (
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
                                {data.accountName}
                            </h2>
                            <p className="text-xs text-[#818181]">
                                {followers} Followers
                            </p>
                            <p className="text-xs text-[#818181]">
                                {moment(data.uploadTime).fromNow()}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button>
                            <img src={images.dot} className="size-5 mr-2" />
                        </button>
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
                        <img src={images.likeFull} className="size-6 mb-2" />
                        <p className="my-auto">234</p>
                    </div>
                    <div className="flex my-auto gap-4">
                        <p>234 Comment</p>
                        <p>234 Repost</p>
                    </div>
                </div>

                {/* 5th row */}
                <div className="flex flex-wrap">
                    <button className="flex-1 flex justify-center py-3 gap-0 xs:gap-1">
                        <img src={images.like} className="size-4 xs:size-6" />
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
                        <img src={images.repost} className="size-4 xs:size-6" />
                        <p className="text-xs xs:text-sm">Repost</p>
                    </button>
                    <button className="flex-1 flex justify-center py-3 gap-0 xs:gap-1">
                        <img src={images.send} className="size-4 xs:size-6 " />
                        <p className="text-xs xs:text-sm">Send</p>
                    </button>
                </div>
                <div className="">
                    {showCommentBox && (
                        <div className="">
                            <div className="py-5">
                                {comments
                                    .slice(0, numCommentsDisplayed)
                                    .map((comment, index) => (
                                        <CommentContent
                                            key={index}
                                            data={comment}
                                        />
                                    ))}
                            </div>
                            {numCommentsDisplayed < comments.length && (
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
    );
};

export default Post;
