import React, { useState } from "react";

import { FollowButton, FollowingButton } from "../button/Button";

const CompanyPage = ({ data }) => {
    const [follow, setFollow] = useState(false);
    const followHandler = () => {
        setFollow(!follow);
    };
    return (
        <div className="flex items-start space-x-3 mb-3">
            <div className="img ">
                <img
                    className="size-12 rounded-full"
                    src={data.profileImg}
                    alt="This is Logo"
                />
            </div>
            <div className="text-bloc space-y-1">
                <div className="name">{data.userName}</div>
                {/* <div className="flex justify-center items-center space-x-2">
                    <div className="type">{data.type}</div>
                    <div className="company-category">{data.category}</div>
                </div> */}
                <div className="" onClick={followHandler}>
                    {follow ? <FollowingButton /> : <FollowButton />}
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
