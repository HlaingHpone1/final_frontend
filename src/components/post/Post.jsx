import React, { useState } from "react";
import moment from "moment";

import { images } from "../images";

const Post = ({ data }) => {
    const [showFullDes, setShowFullDes] = useState(false);

    const toggleDesc = () => {
        setShowFullDes(!showFullDes);
    };

    const words = data.caption.split(" ");
    const shortDesc =
        words.slice(0, 50).join(" ") + (words.length > 50 ? "..." : "");
    const fullDesc = data.caption;
    const followers = data.followers.toLocaleString();

    return (
        <section className="bg-white text-black  rounded-2xl shadow-custom mb-5">
            <div className="">
                {/* 1st row */}
                <div className="flex mx-4 justify-between  py-3">
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
                <div className="flex text-sm">
                    <button className="flex-1 flex justify-center py-3 gap-1">
                        <img src={images.like} className="size-6" />
                        <p>Like</p>
                    </button>
                    <button className="flex-1 flex justify-center py-3 gap-1">
                        <img src={images.comment} className="size-6 my-auto" />
                        <p>Comment</p>
                    </button>
                    <button className="flex-1 flex justify-center py-3 gap-1">
                        <img src={images.repost} className="size-6" />
                        <p>Repost</p>
                    </button>
                    <button className="flex-1 flex justify-center py-3 gap-1">
                        <img src={images.send} className="size-6 " />
                        <p>Send</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Post;
