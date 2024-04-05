import { React } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocalSessionStore } from "../Store";
import {
    FollowButton,
    FollowingButton,
    MessageButton,
    ProfileFollowButton,
} from "../button/Button";

const ProfileInfo = ({ data, edu, isOwnProfile }) => {
    const [follow, setFollow] = useState(false);

    const [loading, setLoading] = useState(true);

    const { followStatus, setFollowStatuses } = useState(false);
    const { userData } = useLocalSessionStore();

    function checkFollowStatus(following, follower) {
        return axios
            .get(
                `http://localhost:8080/follower/${following}/hasFollowedBack/${follower}`
            )
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error on check follow status:", error);
            });
    }

    useEffect(() => {
        if (!Array.isArray(data)) {
            return;
        }

        Promise.all(
            data
                .filter((item) => item.id !== userData.data.id)
                .slice(0, 4)
                .map((item) => checkFollowStatus(userData.data.id, item.id))
        )
            .then((statuses) => {
                const isFollowing = statuses.includes(true);
                setFollowStatuses(statuses);
                setFollow(isFollowing);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setFollowStatuses(data.slice(0, 4).map(() => false));
                setFollow(false);
                setLoading(false);
            });
    }, [data, userData]);

    const unFollowHandler = async () => {
        setFollow(!follow);
        return axios
            .delete(
                `http://localhost:8080/follower/${userData.data.id}/hasUnfollowed/${data.id}`
            )
            .catch((error) => {
                console.error("Error on unfollow:", error);
                // Handle the error
            });
    };

    const followHandler = async () => {
        setFollow(!follow);
        return axios
            .post(`http://localhost:8080/follower`, {
                followingId: userData.data.id,
                followerId: data.id,
            })
            .catch((error) => {
                console.error("Error on unfollow:", error);
                // Handle the error
            });
    };
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
                                        {followStatus || follow ? (
                                            <div onClick={unFollowHandler}>
                                                {" "}
                                                <button className="flex items-center justify-center space-x-3 py-2 px-5 bg-primary text-white rounded-2xl">
                                                    <p>Following</p>
                                                </button>
                                            </div>
                                        ) : (
                                            <div onClick={followHandler}>
                                                {" "}
                                                <button className="flex items-center justify-center space-x-3 py-2 px-5 bg-primary text-white rounded-2xl">
                                                    <p>Follow</p>
                                                </button>
                                            </div>
                                        )}
                                        <MessageButton />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="">
                            {edu && (
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
                            )}
                        </div>
                        {isOwnProfile && (
                            <div className="col-span-4 text-center md:text-left">
                                <Link
                                    className="bg-primary text-white py-3 px-4 rounded-md text-sm font-bold"
                                    to={`/profile/${data.id}/updateprofile`}
                                >
                                    Update Profile
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;
<div className="inner max-w-1240px"></div>;
