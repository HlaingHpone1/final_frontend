import React from "react";

const FilterPost = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="border border-[#D1D1D1] w-3/4 my-5"></div>
                <div className="flex items-center space-x-2">
                    <label
                        className="text-[#929292] text-xs my-auto"
                        htmlFor="postFilter"
                    >
                        Sort By:
                    </label>
                    <select
                        className="bg-transparent focus:outline-none px-2.5"
                        name="postFilter"
                        id="postFilter"
                    >
                        <option value="Recent">Recent</option>
                        <option value="News">News</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterPost;
