import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import UserProfile from "../userProfile/UserProfile";
import Post from "../post/Post";
import { useGetPostByUser } from "../Store";
import { images } from "../images";
import { useLocalSessionStore } from "../Store";
import CreatePostModal from "../createPostModel/CreatePostModel";

const UserPosts = () => {
    const { isLoading: postLoad, apiCall: postAPI } = useGetPostByUser();
    const { userData: localUser } = useLocalSessionStore();

    const [postData, setPostData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { id } = useParams();

    const isOwnProfile = id === localUser.data.id;

    useEffect(() => {
        const controller = new AbortController();

        const fetchPost = async () => {
            const result = await postAPI(id, controller.signal);
            setPostData(result);
        };

        fetchPost();

        return () => controller.abort();
    }, []);

    return (
        <section className="">
            <div className="inner max-w-1240px mx-auto">
                <div className="grid grid-cols-4 px-5 xl:px-0 pt-5  gap-5">
                    <div className="col-span-1">
                        <UserProfile show={false} />
                    </div>
                    <div className="col-span-3">
                        <div className="bg-white p-5 shadow-custom rounded-2xl overflow-hidden">
                            <div className="flex items-center mb-5 space-x-3">
                                <Link to={`/profile/${id}`}>
                                    <img
                                        src={images.backArrow}
                                        alt=""
                                        className="xs2:size-6 xs:size-7 md:size-8"
                                    />
                                </Link>
                                <div className="flex w-full items-center justify-between">
                                    <p className="title text-xl font-Roboto-Slab font-medium ">
                                        All Posts
                                    </p>
                                    {isOwnProfile && (
                                        <div className="create-post">
                                            <button
                                                className="bg-primary text-white px-5 py-2.5 rounded-xl"
                                                onClick={() =>
                                                    setModalIsOpen(true)
                                                }
                                            >
                                                create post
                                            </button>
                                            <CreatePostModal
                                                modalIsOpen={modalIsOpen}
                                                setModalIsOpen={setModalIsOpen}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="post">
                                {postData.length > 0 ? (
                                    <div className="">
                                        {postData.map((item, index) => (
                                            <Post
                                                key={index}
                                                isOwner={isOwnProfile}
                                                data={item}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <p>No posts available yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserPosts;
