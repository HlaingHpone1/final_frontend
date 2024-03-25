import React from "react";
import { images } from "../images.js";
import { Link } from "react-router-dom";
import { useLocalSessionStore } from "../Store.js";

const UserProfile = () => {
    const { userData } = useLocalSessionStore();

    return (
        <section className="bg-white rounded-2xl shadow-custom">
            {/* userProfile */}
            <div className="">
                <div className="banner-img">
                    <img
                        src={userData.data.bannerImg}
                        className="block w-full h-14 rounded-t-2xl"
                    />
                </div>
                <div className="inner-card ">
                    <div className="info px-3">
                        <div className="profile-img -mt-9">
                            <img
                                src={userData.data.profileImg}
                                className="rounded-full aspect-square object-cover size-20 mx-auto border-black"
                            />
                        </div>
                        <p className=" mt-3 text-center text-2xl font-Roboto-Slab font-bold text-primary capitalize">
                            {userData.data.userName}
                        </p>
                        <p className="text-center text-xs py-3">
                            {userData.data.bio}
                        </p>
                    </div>
                    {/* Connection */}
                    <Link to="/network" className="block w-full">
                        <div className="border-y border-[#858484] px-3">
                            <div className="inner flex justify-between py-3">
                                <div className="">
                                    <p className="text-xs text-start text-slate-500">
                                        Connections
                                    </p>
                                    <p className="text-sm">
                                        Grow Your Connections
                                    </p>
                                </div>
                                <img
                                    src={images.network1}
                                    className="size-5 mt-1"
                                />
                            </div>
                        </div>
                    </Link>

                    {/* follower&following */}
                    <div className="px-3">
                        <div className="inner flex text-xs py-3 justify-between">
                            <div className="flex">
                                <img src={images.user} className="size-6" />
                                <p className="my-auto">5K Followers</p>
                            </div>
                            <div className="flex">
                                <img src={images.user} className="size-6" />
                                <p className="my-auto">100 Following</p>
                            </div>
                        </div>
                    </div>

                    <div className="inner border-t border-[#858484] flex  py-3 px-3">
                        <img
                            src={images.group}
                            className="size-6 my-auto mr-1"
                        />
                        <p className="my-1 text-[14px]">Group</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
