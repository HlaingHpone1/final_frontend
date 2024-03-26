import React from "react";

import ProfileSkillContent from "../profileSkillContent/ProfileSkillContent";

const ProfileSkill = () => {
    return (
        <section className="py-2">
            <div className="inner max-w-1240px mx-auto px-10 xl:p-0">
                <div className="bg-white shadow-custom rounded-lg overflow-hidden pt-4 ">
                    <div className="border-b border-black px-9">
                        <div className="title text-xl font-semibold font-Roboto-Slab mb-3">
                            Skills
                        </div>
                        <div className="">
                            <ProfileSkillContent />
                            <ProfileSkillContent />
                        </div>
                    </div>
                    <button className="block w-full text-xl py-4 bg-white transition-colors duration-200 ease-linear  hover:bg-slate-400 font-semibold text-center">
                        See All Skills
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfileSkill;
