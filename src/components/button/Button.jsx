import React from "react";

import { images } from "../images";
import { useLocalSessionStore, useMessage } from "../Store";

export const FollowButton = () => {
    return (
        <div>
            <button className="flex items-center justify-center space-x-3 py-1 px-3.5 border-2 border-black rounded-2xl">
                <img className="size-3" src={images.plus} alt="this is plus" />
                <p>Follow</p>
            </button>
        </div>
    );
};

export const FollowingButton = () => {
    return (
        <div>
            <button className="flex items-center justify-center space-x-3 py-1 px-3.5 border-2 border-black rounded-2xl">
                <img className="size-3" src={images.plus} alt="this is plus" />
                <p>Following</p>
            </button>
        </div>
    );
};

export const MessageButton = ({ userID }) => {
    const { userData } = useLocalSessionStore();
    const { apiCall } = useMessage();

    const postData = {
        chatId: userID + userData.data.id,
        senderId: userData.data.id,
        recipientId: userID,
        content: "This is content",
    };

    const clickHandler = async () => {
        await apiCall(postData);
    };

    return (
        <div>
            <button
                className="flex items-center justify-center space-x-3 py-2 px-5 bg-primary text-white rounded-2xl"
                onClick={clickHandler}
            >
                <p>Message</p>
            </button>
        </div>
    );
};

export const ProfileFollowButton = () => {
    return (
        <div>
            <button className="flex items-center justify-center space-x-3 py-2 px-5 bg-primary text-white rounded-2xl">
                <p>Follow</p>
            </button>
        </div>
    );
};
