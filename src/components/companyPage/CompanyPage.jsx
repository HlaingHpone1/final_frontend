import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocalSessionStore } from "../Store";


import { FollowButton, FollowingButton } from "../button/Button";

const CompanyPage = ({ data }) => {
    const [follow, setFollow] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const {userData} = useLocalSessionStore();

    // console.log(data.userName);  
    

    const postData = {
        followingId: userData.data.id,
        followerId: data.id
    }

    const followApiUrl ="http://localhost:8080/follower";
    const followHandler =async (e) => {
        e.preventDefault(e);

        console.warn(postData);
        window.location.reload();

        try {
            const response = await axios.post(followApiUrl, postData);

    

        setFollow(!follow);


            
        } catch (error) {
            console.error("Error on following:", error);

        }
        
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
