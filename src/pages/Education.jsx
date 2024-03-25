import React from "react";

import UserEducation from "../components/education/UserEducation";
import Header from "../components/header/Header";

import { images } from "../components/images";

const Education = () => {
    return (
        <div>
            <Header />

            <div className="inner max-w-1240px mx-auto shadow-custom">
                <div className="xs2:p-2 xs:p-3 sm:p-4">
                    <div className="flex justify-between xs2:pb-1 md:pb-3">
                        <div className="flex">
                            <button>
                                <img
                                    src={images.backArrow}
                                    alt=""
                                    className="xs2:size-6 xs:size-7 md:size-8"
                                />
                            </button>
                            <p className="pl-3 font-semibold xs2:text-base xs:text-lg md:text-xl md:pt-1">
                                Educations
                            </p>
                        </div>
                        <div>
                            <button>
                                <img
                                    src={images.plus}
                                    alt=""
                                    className="xs2:size-5 xs:size-6 md:size-7"
                                />
                            </button>
                        </div>
                    </div>

                    <UserEducation
                        school={"Strategy First University"}
                        bachelor={"B.Sc"}
                        period={"May 2022 to Feb 2023"}
                    />
                    <UserEducation
                        school={"Strategy First University"}
                        bachelor={"B.Sc"}
                        period={"May 2022 to Feb 2023"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
