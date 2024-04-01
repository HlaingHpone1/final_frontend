import { React } from "react";

import { MessageButton, ProfileFollowButton } from "../button/Button";

const ProfileInfo = ({ data, edu, isOwnProfile }) => {
    return (
        <section className="pb-2">
            <div className="">
                <div className="bg-white shadow-custom rounded-lg overflow-hidden ">
                    <div className="banner-img">
                        <img
                            className="block w-full h-52 bg-slate-500"
                            src={data.bannerImg}
                            alt="This is Banner Img"
                        />
                    </div>
                    <div className="user-info px-9 pb-10 -mt-24 grid grid-cols-4 items-center">
                        <div className="info col-span-4 md:col-span-3">
                            <div className="profile-img">
                                <img
                                    className="rounded-full bg-slate-500 aspect-square object-cover mx-auto md:m-0 size-36 xs:size-52"
                                    src={data.profileImg}
                                    alt="This is Profile Img"
                                />
                            </div>
                            <p className="text-2xl text-center md:text-start font-Roboto-Slab font-bold text-primary capitalize mb-3">
                                {data.userName}
                            </p>
                            <p className="text-base mb-1 text-center md:text-start">
                                {data.bio}
                            </p>
                            <p className="text-sm text-slate-600 text-center md:text-start">
                                {data.address}
                            </p>
                            <div className="follower-following flex space-x-5 justify-center md:justify-start">
                                <p className="text-sm text-slate-600">
                                    {data && data.followers
                                        ? data.followers.toLocaleString()
                                        : "0"}{" "}
                                    Followers
                                </p>
                                <p className="text-sm text-slate-600">
                                    {data && data.followings
                                        ? data.followings.toLocaleString()
                                        : "0"}{" "}
                                    Following
                                </p>
                            </div>
                            <div className="button-gp mt-5">
                                {!isOwnProfile ? (
                                    <div className="flex items-center space-x-4">
                                        <ProfileFollowButton />
                                        <MessageButton userID={data.id} />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="education hidden md:flex space-x-2 col-span-1  items-center">
                            <img
                                className="block size-12 p-1 bg-slate-300 object-cover rounded-xl aspect-square"
                                src="https://cdn-icons-png.freepik.com/512/6570/6570884.png"
                                alt="this is icon"
                            />
                            <p className=" text-xl lg:text-2xl font-bold font-Roboto-Slab">
                                {edu ? edu.schoolName : ""}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;
<div className="inner max-w-1240px"></div>;
