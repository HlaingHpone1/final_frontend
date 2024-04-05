import React from "react";
import { useLocalSessionStore } from "../Store";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FollowButton, FollowingButton } from "../button/Button";

const UserCard = ({ data ,followStatus}) => {
    const {userData} =useLocalSessionStore();
    const [follow, setFollow] = useState(followStatus);
    
    const unFollowHandler = async () => {
        setFollow(!follow);
        return axios.delete(`http://localhost:8080/follower/${userData.data.id}/hasUnfollowed/${data.id}`)
            .catch(error => {
                console.error("Error on unfollow:", error);
              
            });
        }
    
    

    const followHandler = async () => {
        setFollow(!follow);
        return axios.post(`http://localhost:8080/follower`,
        {
            followingId: userData.data.id,
            followerId: data.id
        })
            .catch(error => {
                console.error("Error on unfollow:", error);
              
            });
        }
    const followers = data.followers.toLocaleString();

    const limitWords = (text, limit) => {
        const words = text.split(" ");
        if (words.length > limit) {
            return words.slice(0, limit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="bg-[#D4F1F4] h-full rounded-lg drop-shadow-xl flex flex-col justify-between">
            <div>
                <Link to={`/profile/${data.id}`}>
                    <img
                        src={data.bannerImg}
                        className="bg-slate-600 h-16 w-full rounded-t-lg"
                    />

                    <div className="ml-2 mt-[-2rem]">
                        <img
                            src={data.profileImg}
                            className="rounded-full size-[55px] bg-slate-800 border border-[#858484]"
                        />
                    </div>
                    <div className="p-2 flex flex-col justify-between">
                        <div>
                            <p className=" text-xl font-Roboto-Slab capitalize">
                                {data.userName}
                            </p>
                            <p className=" text-sm text-slate-600 pb-3 ">
                                {data.bio ? limitWords(data.bio, 5) : ""}
                            </p>
                            <p className=" text-sm mb-3">
                                {followers} followers
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="p-2">
            
            <div className=" text-black py-1 w-full text-lg rounded-2xl">
                    {followStatus || follow ? <div onClick={unFollowHandler}> <FollowingButton/></div>: <div onClick={followHandler}> <FollowButton/></div>}
                </div>
            </div>
        </div>
    );
    }

export default UserCard;
