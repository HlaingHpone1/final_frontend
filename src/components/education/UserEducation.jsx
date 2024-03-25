import React from "react";
import { images } from "../images";

const UserEducation = ({ school, bachelor, period }) => {
    return (
        <div className=" border-b border-black">
            <div className="flex py-4">
                <div>
                    <img
                        src={images.profile}
                        alt=""
                        className=" size-24 rounded-lg"
                    />
                </div>
                <div className="pl-3">
                    <p className=" xs2:text-base xs:text-lg md:text-xl">
                        {school}
                    </p>
                    <p className="xs2:text-xs xs:text-sm md:text-base">
                        {bachelor}
                    </p>
                    <p className="xs2:text-xs xs:text-sm md:text-base">
                        {period}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserEducation;
