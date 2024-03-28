import React from "react";
import moment from "moment";

export const CommentContent = ({ data }) => {
    return (
        <div className="flex space-x-2 px-5">
            <img
                src={data.profileImg}
                alt={data.author}
                className="profile-img size-10 rounded-full"
            />
            <div className="bg-slate-300 w-full rounded-md mb-3 p-2">
                <div className="flex items-center space-x-3 mb-2">
                    <p className="capitalize font-bold text-sm">
                        {data.author}
                    </p>
                    <p className="text-xs text-slate-500 ">
                        {moment(data.time).fromNow()}
                    </p>
                </div>
                <p className="break-all">{data.text}</p>
            </div>
        </div>
    );
};
