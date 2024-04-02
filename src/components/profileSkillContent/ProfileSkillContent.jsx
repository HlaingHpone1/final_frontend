import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { images } from "../images";
import { useDeleteSkill, useGetSkillById } from "../Store";

import CreateSkillModel from "../createSkillModel/CreateSkillModel";

const ProfileSkillContent = ({ data, noBorder, isOwnProfile }) => {
    const { skillID } = useParams();

    const { apiCall: deleteSkill } = useDeleteSkill();
    const { apiCall: getSkillById } = useGetSkillById();

    const [skillData, setSkillData] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (!skillID) return;

        const controller = new AbortController();

        const fetchEducation = async () => {
            const result = await getSkillById(skillID, controller.signal);
            setSkillData(result.data);
        };

        fetchEducation();

        return () => controller.abort();
    }, [skillID]);

    const deleteHandler = async (skillID) => {
        await deleteSkill(skillID);
        window.location.reload();
    };

    return (
        <div
            className="flex justify-between items-start border-b border-black py-5"
            style={{ border: noBorder ? "none" : "" }}
        >
            <div className="flex space-x-4">
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
            {isOwnProfile && (
                <div className="flex space-x-3">
                    <Link
                        to={`/profile/${data.userId}/skill/${data.id}/edit`}
                        className="block"
                        onClick={() => setModalIsOpen(true)}
                    >
                        <img
                            className="block size-6"
                            src={images.edit}
                            alt="this is icon"
                        />
                    </Link>
                    <CreateSkillModel
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                        data={skillData}
                    />
                    <Link
                        className="block"
                        onClick={() => deleteHandler(data.id)}
                    >
                        <img
                            className="block size-6"
                            src={images.delete1}
                            alt="this is icon"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProfileSkillContent;
