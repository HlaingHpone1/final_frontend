import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";

import ProfilePostContent from "../profilePostContent/ProfilePostContent";
import CreatePostModal from "../../components/createPostModel/CreatePostModel";

const ProfilePosts = ({ data, isOwnProfile }) => {
    const { id } = useParams();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <section className="py-2">
                <div className="">
                    <div className="bg-white shadow-custom rounded-lg overflow-hidden pt-4 ">
                        <div className="border-b border-black px-9">
                            <div className="flex mb-5 items-center justify-between">
                                <div className="title text-xl font-semibold font-Roboto-Slab ">
                                    Activity
                                </div>
                                {isOwnProfile && (
                                    <div className="create-post">
                                        <button
                                            className="bg-primary text-white px-5 py-2.5 rounded-xl"
                                            onClick={() => setModalIsOpen(true)}
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
                            <div>
                                {data.length > 0 ? (
                                    data
                                        .slice(0, 2)
                                        .map((item, index) => (
                                            <ProfilePostContent
                                                key={index}
                                                data={item}
                                                noBorder={
                                                    index === data.length - 1
                                                }
                                            />
                                        ))
                                ) : (
                                    <p className="text-lg py-4">
                                        No posts available yet.
                                    </p>
                                )}
                            </div>
                        </div>
                        <Link
                            to={`posts`}
                            className="block w-full text-xl py-4 bg-white transition-colors duration-200 ease-linear  hover:bg-slate-400 font-semibold text-center"
                        >
                            See All Activity
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfilePosts;
