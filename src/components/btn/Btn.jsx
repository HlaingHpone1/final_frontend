import React from "react";

const Btn = ({ text }) => {
    return (
        <div>
            <button className="bg-[#D9D9D9]  py-1 w-full text-lg rounded-2xl">
                {text}
            </button>
        </div>
    );
};

export default Btn;
