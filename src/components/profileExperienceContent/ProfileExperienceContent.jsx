import React from "react";

const ProfileExperienceContent = () => {
    return (
        <div className="flex space-x-4 border-b border-black py-5">
            <img
                className="block size-12 bg-slate-300 object-cover rounded-xl aspect-square"
                src="https://cdn-icons-png.freepik.com/512/6570/6570884.png"
                alt="this is icon"
            />
            <div className="content ">
                <p className="title font-semibold font-Roboto-Slab text-lg">
                    NCC Education
                </p>
                <div className="edu flex space-x-3 text-sm">
                    <p className="degree">B.Sc BIT</p>
                    <p className="field">CS</p>
                </div>
                <div className="duration flex space-x-3 text-slate-500 text-sm">
                    <p className="start">Dec 2020</p>
                    <p>-</p>
                    <p className="end">Dec 2023</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileExperienceContent;
