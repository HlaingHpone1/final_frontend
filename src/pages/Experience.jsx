import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ProfileExperienceContent from "../components/profileExperienceContent/ProfileExperienceContent";
import CreateExperienceModel from "../components/createExperienceModel/CreateExperienceModel";
import { useLocalSessionStore, useGetWorkExpByUser } from "../components/Store";
import Header from "../components/header/Header";

import { images } from "../components/images";

const Experience = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { apiCall: workExpAPI } = useGetWorkExpByUser();
    const { userData: localUser } = useLocalSessionStore();

    const [experienceData, setExperienceData] = useState([]);

    const { id } = useParams();

    const isOwnProfile = id === localUser.data.id;

    useEffect(() => {
        const controller = new AbortController();

        const fetchExperience = async () => {
            const result = await workExpAPI(id, controller.signal);
            setExperienceData(result.data);
        };

        fetchExperience();

        return () => controller.abort();
    }, []);

    return (
        <div>
            <Header />

            <div className="inner max-w-1240px mx-auto px-5 xl:px-0">
                <div className="xs2:p-2 xs:p-3 sm:p-4 shadow-custom rounded-xl overflow-hidden">
                    <div className="flex justify-between xs2:pb-1 md:pb-3">
                        <div className="flex">
                            <Link to={`/profile/${id}`}>
                                <img
                                    src={images.backArrow}
                                    alt=""
                                    className="xs2:size-6 xs:size-7 md:size-8"
                                />
                            </Link>
                            <p className="pl-3 font-semibold xs2:text-base xs:text-lg md:text-xl md:pt-1">
                                Experiences
                            </p>
                        </div>
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
                    {experienceData.length > 0 ? (
                        experienceData.map((item, index) => (
                            <ProfileExperienceContent
                                key={index}
                                data={item}
                                isOwnProfile={isOwnProfile}
                                noBorder={index === experienceData.length - 1}
                            />
                        ))
                    ) : (
                        <p className="text-lg py-4">
                            No experience available yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
