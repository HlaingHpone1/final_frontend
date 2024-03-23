import React from "react";
import { images } from "../images";

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