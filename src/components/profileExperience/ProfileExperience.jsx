import { React, useState } from "react";
import { Link } from "react-router-dom";

import ProfileExperienceContent from "../profileExperienceContent/ProfileExperienceContent";
import CreateExperienceModel from "../createExperienceModel/CreateExperienceModel";
import { images } from "../images";

const ProfileExperience = ({ data, isOwnProfile }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <section className="py-2">
            <div className="">
                <div className="bg-white shadow-custom rounded-lg overflow-hidden pt-4 ">
                    <div className="border-b border-black px-9">
                        <div className="flex justify-between">
                            <p className="title text-xl font-semibold font-Roboto-Slab mb-3">
                                Experience
                            </p>
                            {isOwnProfile && (
                                <div>
                                    <button>
                                        <img
                                            src={images.plus}
                                            alt="This is add icon"
                                            className="xs2:size-5 xs:size-6 md:size-7"
                                            onClick={() => setModalIsOpen(true)}
                                        />
                                    </button>
                                    <CreateExperienceModel
                                        modalIsOpen={modalIsOpen}
                                        setModalIsOpen={setModalIsOpen}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="">
                            {data.length > 0 ? (
                                data
                                    .slice(0, 2)
                                    .map((item, index) => (
                                        <ProfileExperienceContent
                                            key={index}
                                            data={item}
                                            noBorder={index === data.length - 1}
                                        />
                                    ))
                            ) : (
                                <div className="text-lg py-4">
                                    No Experience available yet
                                </div>
                            )}
                        </div>
                    </div>
                    <Link
                        to="experience"
                        className="block w-full text-xl py-4 bg-white transition-colors duration-200 ease-linear hover:bg-slate-400 font-semibold text-center"
                    >
                        See All Experience
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProfileExperience;
