import React from "react";
import img from "../img";

const ManageNw = () => {
    return (
        <div className=" p-3">
            <h2 className=" pb-3 text-2xl font-Roboto-Slab">
                Managed my network
            </h2>

            <div className=" space-y-3 text-lg">
                <div className="flex">
                    <img
                        className="block size-9 object-cover aspect-square px-1 pr-2"
                        src={img.twopeople}
                    />
                    <a href="">Connection</a>
                </div>
                <div className="flex">
                    <img
                        className="block size-9 object-cover aspect-square px-1 pr-2"
                        src={img.userBlack}
                    />
                    <a href="">Followers & followings</a>
                </div>
                <div className="flex">
                    <img
                        className="block size-9 object-cover aspect-square px-1 pr-2"
                        src={img.groupblack}
                    />
                    <a href="" className="my-auto">
                        Groups
                    </a>
                </div>
                <div className="flex">
                    <img
                        className="block size-9 object-cover aspect-square px-1 pr-2"
                        src={img.page}
                    />
                    <a href="" className="my-auto">
                        Pages
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ManageNw;
