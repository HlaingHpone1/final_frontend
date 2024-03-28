import React from "react";
import { img } from "../img";
import { images } from "../images";

const ManageNw = () => {
    return (
        <div className="p-3 ">
            <h2 className=" pb-3 text-2xl font-Roboto-Slab">
                Managed my network
            </h2>

            <div className=" space-y-3 text-lg">
                <button className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={images.group1}
                    />
                    <p>Connection</p>
                </button>
                <button className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={images.user}
                    />
                    <p className="text-start">Followers & Followings</p>
                </button>
                <button className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={images.group}
                    />
                    <p>Groups</p>
                </button>
                <button className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={img.page}
                    />
                    <p>Pages</p>
                </button>
            </div>
        </div>
    );
};

export default ManageNw;
