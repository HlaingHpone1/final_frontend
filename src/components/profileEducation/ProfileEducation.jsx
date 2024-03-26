import React from "react";

import ProfileEducationContent from "../profileEducationContent/ProfileEducationContent";

const ProfileEducation = () => {
    return (
        <section className="py-2">
            <div className="inner max-w-1240px mx-auto px-10 xl:p-0">
                <div className="bg-white shadow-custom rounded-lg overflow-hidden pt-4 ">
                    <div className="border-b border-black px-9">
                        <div className="title text-xl font-semibold font-Roboto-Slab mb-3">
                            Education
                        </div>
                        <div className="">
                            <ProfileEducationContent />
                            <ProfileEducationContent />
                        </div>
                    </div>
                    <button className="block w-full text-xl py-4 bg-white hover:bg-slate-400 font-semibold text-center">
                        See All Education
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfileEducation;
