import { React, useState } from "react";
import moment from "moment";

import { images } from "../images";

const ProfilePostContent = ({ data, noBorder }) => {
    const [showFullDes, setShowFullDes] = useState(false);

    const toggleDesc = () => {
        setShowFullDes(!showFullDes);
    };

    const words = data.caption.split(" ");
    const shortDesc =
        words.slice(0, 40).join(" ") + (words.length > 40 ? "..." : "");
    const fullDesc = data.caption;
    return (
        <div className="pt-5 w-full block">
            <div className="info flex space-x-4">
                <p className="text-sm text-slate-600 capitalize">
                    {data.accountName}
                </p>
                <p className="text-sm text-slate-600">
                    {moment(data.uploadTime).fromNow()}
                </p>
            </div>
            <div className="post flex space-x-5">
                {data.uploadPhoto && (
                    <img
                        className="block object-cover w-40 rounded-xl aspect-auto"
                        src={data.uploadPhoto}
                        alt="this is post images"
                    />
                )}
                <div className="content">
                    <p className="break-all text-justify text-lg">
                        {showFullDes ? fullDesc : shortDesc}
                        &nbsp; &nbsp;
                        {!showFullDes && words.length > 40 && (
                            <button className="" onClick={toggleDesc}>
                                See more
                            </button>
                        )}
                    </p>
                </div>
            </div>
            <div
                className="reaction border-b border-black py-3"
                style={{ border: noBorder ? "none" : "" }}
            >
                <div className="like flex items-center space-x-1 ">
                    <img
                        className="size-4"
                        src={images.likeFull}
                        alt="this is like icon"
                    />
                    <p className="text-sm">{data.like}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePostContent;
