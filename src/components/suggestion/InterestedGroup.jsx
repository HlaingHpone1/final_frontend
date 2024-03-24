import React from "react";
import images from "../image/Image";
import Btn from "../btn/Btn";

const InterestedGroup = () => {
    return (
        <div className="bg-[#D4F1F4] rounded-lg drop-shadow overflow-hidden">
            <img src={images.userBg} className=" h-16 w-full" />
            <div></div>
            <div className="-mt-10">
                <img
                    src={images.userProfile}
                    className="block mx-auto size-20 border border-[#858484]"
                />
            </div>
            <div className=" text-center p-2">
                <p className=" text-xl pb-3 font-Roboto-Slab">Group</p>
                <p className=" text-sm">{} members</p>
                <Btn text="Join" />
            </div>
        </div>
    );
};

export default InterestedGroup;
