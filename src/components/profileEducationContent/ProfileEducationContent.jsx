import { React, useEffect, useState } from "react";
import moment from "moment-timezone";
import { Link, useParams } from "react-router-dom";

import CreateEducationModel from "../createEducationModel/CreateEducationModel";
import {
    useDeleteEducation,
    useGetEducationById,
} from "../../components/Store";
import { images } from "../../components/images";

const ProfileEducationContent = ({ data, noBorder, isOwnProfile }) => {
    const { eduID } = useParams();

    const { apiCall: deleteEducation } = useDeleteEducation();
    const { apiCall: getEducationById } = useGetEducationById();

    const [educationData, setEducationData] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (!eduID) return;

        const controller = new AbortController();

        const fetchEducation = async () => {
            const result = await getEducationById(eduID, controller.signal);
            setEducationData(result.data);
        };

        fetchEducation();

        return () => controller.abort();
    }, [eduID]);

    const deleteHandler = async (educationID) => {
        await deleteEducation(educationID);
        window.location.reload();
    };

    return (
        <div
            className="flex justify-between border-b border-black py-5"
            style={{ border: noBorder ? "none" : "" }}
        >
            <div className="flex space-x-4">
                <img
                    className="block size-12 p-1 bg-slate-300 object-cover rounded-xl aspect-square"
                    src="https://cdn-icons-png.freepik.com/512/6570/6570884.png"
                    alt="this is icon"
                />
                <div className="content ">
                    <p className="title font-semibold font-Roboto-Slab text-lg">
                        {data.schoolName}
                    </p>
                    <div className="edu flex space-x-3 text-sm">
                        <p className="degree">{data.degree}</p>
                        <p className="field">{data.fieldOfStudy}</p>
                    </div>
                    <div className="duration flex space-x-2 text-slate-500 text-sm">
                        <p className="start">
                            {moment(data.startDate)
                                .tz("Asia/Yangon")
                                .format("MMMM YYYY")}
                        </p>
                        <p>-</p>
                        <p className="end">
                            {moment(data.endDate)
                                .tz("Asia/Yangon")
                                .format("MMMM YYYY")}
                        </p>
                    </div>
                </div>
            </div>
            {isOwnProfile && (
                <div className="flex space-x-3">
                    <Link
                        to={`/profile/${data.userId}/education/${data.id}/edit`}
                        className="block"
                        onClick={() => setModalIsOpen(true)}
                    >
                        <img
                            className="block size-6"
                            src={images.edit}
                            alt="this is icon"
                        />
                    </Link>
                    <CreateEducationModel
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                        data={educationData}
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

export default ProfileEducationContent;
