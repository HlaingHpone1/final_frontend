import React from "react";
import img from "../img";
import { images } from "../images";

const ManageNw = () => {
    return (
        <div className=" p-3">
            <h2 className=" pb-3 text-2xl font-Roboto-Slab">
                Managed my network
            </h2>

            <div className=" space-y-3 text-lg">
                <div className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={images.group1}
                    />
                    <button>Connection</button>
                </div>
                <div className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={images.user}
                    />
                    <button>Followers & Followings</button>
                </div>
                <div className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={images.group}
                    />
                    <button>Groups</button>
                </div>
                <div className="flex">
                    <img
                        className="block size-7 object-cover aspect-square me-1"
                        src={img.page}
                    />
                    <button>Pages</button>
                </div>
            </div>
        </div>
    );
};

export default ManageNw;
