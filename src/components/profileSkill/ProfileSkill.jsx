import React from "react";
import { Link } from "react-router-dom";

import ProfileSkillContent from "../profileSkillContent/ProfileSkillContent";
import { images } from "../images";

const ProfileSkill = ({ data, isOwnProfile }) => {
    return (
        <section className="py-2">
            <div className="inner max-w-1240px mx-auto px-10 xl:p-0">
                <div className="bg-white shadow-custom rounded-lg overflow-hidden pt-4 ">
                    <div className="border-b border-black px-9">
                        <div className="flex justify-between">
                            <p className="title text-xl font-semibold font-Roboto-Slab mb-3">
                                Skills
                            </p>
                            {isOwnProfile && (
                                <div>
                                    <button>
                                        <img
                                            src={images.plus}
                                            alt=""
                                            className="xs2:size-5 xs:size-6 md:size-7"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="">
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <ProfileSkillContent
                                        key={index}
                                        data={item}
                                        noBorder={index === data.length - 1}
                                    />
                                ))
                            ) : (
                                <p className="text-lg py-4">
                                    No skills available yet.
                                </p>
                            )}
                        </div>
                    </div>
                    <Link
                        to="skill"
                        className="block w-full text-xl py-4 bg-white transition-colors duration-200 ease-linear  hover:bg-slate-400 font-semibold text-center"
                    >
                        See All Skills
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProfileSkill;
