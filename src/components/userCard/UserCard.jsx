import React from "react";
import { Link } from "react-router-dom";

import Btn from "../btn/Btn";

const UserCard = ({ data }) => {
    const followers = data.followers.toLocaleString();
    return (
        <Link to={`/profile/${data.id}`}>
            <div className="bg-[#D4F1F4] h-full rounded-lg drop-shadow-xl">
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
                            {data.bio}
                        </p>
                        <p className=" text-sm mb-3">{followers} followers</p>
                    </div>
                    <Btn text="Follow" />
                </div>
            </div>
        </Link>
    );
};

export default UserCard;
