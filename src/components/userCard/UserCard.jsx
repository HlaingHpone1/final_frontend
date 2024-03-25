import React from "react";
import images from "../image/Image";
import img from "../img";
import Btn from "../btn/Btn";

const UserCard = ({ data }) => {
    const followers = data.followers.toLocaleString();
    return (
        <div className="bg-[#D4F1F4] rounded-lg drop-shadow">
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
            <div className=" p-2">
                <p className=" text-xl font-Roboto-Slab capitalize">
                    {data.userName}
                </p>
                <p className=" text-base pb-3 ">{data.bio}</p>
                <p className=" text-sm mb-3">{followers} followers</p>
                <Btn text="Follow" />
            </div>
        </div>
    );
};

export default UserCard;
