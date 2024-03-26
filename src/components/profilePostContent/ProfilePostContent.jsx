import React from "react";

import { images } from "../images";

const ProfilePostContent = () => {
    return (
        <button>
            <div className="pt-5">
                <div className="info flex items-center space-x-4">
                    <p className="text-sm text-slate-600">Hlaing Hpone</p>
                    <p className="text-sm text-slate-600">1 hours</p>
                </div>
                <div className="post flex justify-center space-x-3">
                    <img
                        className="block size-24 object-cover rounded-xl aspect-square"
                        src={images.profile}
                        alt="This is Post image"
                    />
                    <div className="content">
                        <p className="text-justify ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Fugiat corrupti cupiditate rem ab. Fuga
                            distinctio blanditiis sapiente culpa soluta cumque,
                            nulla atque sequi at adipisci eligendi nesciunt
                            reprehenderit voluptatem sunt!
                        </p>
                    </div>
                </div>
                <div className="reaction border-b border-black py-3">
                    <div className="like flex items-center space-x-1 ">
                        <img
                            className="size-4"
                            src={images.likeFull}
                            alt="this is like icon"
                        />
                        <p className="text-sm">125</p>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default ProfilePostContent;
