import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ProfileSkillContent from "../components/profileSkillContent/ProfileSkillContent";
import { useGetSkillByUser, useLocalSessionStore } from "../components/Store";

import Header from "../components/header/Header";
import CreateSkillModel from "../components/createSkillModel/CreateSkillModel";

import { images } from "../components/images";

const Skill = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { apiCall: skillAPI } = useGetSkillByUser();
    const { userData: localUser } = useLocalSessionStore();

    const [skillData, setSkillData] = useState([]);

    const { id, skillID } = useParams();

    const isOwnProfile = id === localUser.data.id;

    useEffect(() => {
        const controller = new AbortController();

        const fetchSkill = async () => {
            const result = await skillAPI(id, controller.signal);
            setSkillData(result.data);
        };

        fetchSkill();

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
                                Skills
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
                                <CreateSkillModel
                                    modalIsOpen={modalIsOpen}
                                    setModalIsOpen={setModalIsOpen}
                                />
                            </div>
                        )}
                    </div>
                    {skillData.length > 0 ? (
                        skillData.map((item, index) => (
                            <ProfileSkillContent
                                key={index}
                                data={item}
                                isOwnProfile={isOwnProfile}
                                noBorder={index === skillData.length - 1}
                            />
                        ))
                    ) : (
                        <p className="items-center">
                            No education available yet
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skill;
