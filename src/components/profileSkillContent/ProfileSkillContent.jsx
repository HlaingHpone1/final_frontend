import React from "react";

const ProfileSkillContent = ({ data, noBorder }) => {
    return (
        <div
            className="flex space-x-4 border-b border-black py-5"
            style={{ border: noBorder ? "none" : "" }}
        >
            <img
                className="block size-12 bg-slate-300 object-cover rounded-xl aspect-square"
                src="https://p7.hiclipart.com/preview/339/1014/503/computer-icons-knowledge-skill-recruitment-mind.jpg"
                alt="this is icon"
            />
            <div className="content ">
                <p className="title font-semibold font-Roboto-Slab text-2xl capitalize">
                    {data.skillName}
                </p>
            </div>
        </div>
    );
};

export default ProfileSkillContent;
