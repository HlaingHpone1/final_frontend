import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ProfileEducationContent from "../components/profileEducationContent/ProfileEducationContent";
import CreateEducationModel from "../components/createEducationModel/CreateEducationModel";
import Header from "../components/header/Header";

import { images } from "../components/images";
import {
    useGetEducationByUser,
    useLocalSessionStore,
} from "../components/Store";

const Education = () => {
    const [educationData, setEducationData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { userData: localUser } = useLocalSessionStore();

    const { id } = useParams();

    const { isLoading, apiCall: educationAPI } = useGetEducationByUser();

    const isOwnProfile = id === localUser.data.id;

    useEffect(() => {
        const controller = new AbortController();

        const fetchEducation = async () => {
            const result = await educationAPI(id, controller.signal);
            setEducationData(result.data);
        };

        fetchEducation();

        return () => controller.abort();
    }, []);

    return (
        <div>
            <Header />

            <div className="inner max-w-1240px mx-auto  px-5 xl:px-0">
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
                                Educations
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
                                <CreateEducationModel
                                    modalIsOpen={modalIsOpen}
                                    setModalIsOpen={setModalIsOpen}
                                />
                            </div>
                        )}
                    </div>

                    {educationData.length > 0 ? (
                        educationData.map((item, index) => (
                            <ProfileEducationContent
                                key={index}
                                data={item}
                                isOwnProfile={isOwnProfile}
                                noBorder={index === educationData.length - 1}
                            />
                        ))
                    ) : (
                        <p>No education available yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Education;
