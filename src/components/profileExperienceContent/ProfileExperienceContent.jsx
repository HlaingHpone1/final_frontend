import { React, useState, useEffect } from "react";
import moment from "moment-timezone";

import { Link, useParams } from "react-router-dom";
import { images } from "../images";
import CreateExperienceModel from "../createExperienceModel/CreateExperienceModel";
import { useDeleteWorkExp, useGetWorkExpById } from "../Store";

const ProfileExperienceContent = ({ data, noBorder, isOwnProfile }) => {
    const { expID } = useParams();

    const { apiCall: deleteWorkExp } = useDeleteWorkExp();
    const { apiCall: getWorkExpById } = useGetWorkExpById();
    const [workExpData, setWorkExpData] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const startDate = moment(data.startDate).tz("Asia/Yangon");
    const endDate = moment(data.endDate).tz("Asia/Yangon");

    const durationYears = endDate.diff(startDate, "years");
    const durationMonths = endDate.diff(startDate, "months") % 12;

    useEffect(() => {
        if (!expID) return;

        const controller = new AbortController();

        const fetchEducation = async () => {
            const result = await getWorkExpById(expID, controller.signal);
            setWorkExpData(result.data);
        };

        fetchEducation();

        return () => controller.abort();
    }, [expID]);

    const deleteHandler = async (experienceID) => {
        await deleteWorkExp(experienceID);
        window.location.reload();
    };

    return (
        <div
            className="flex justify-between border-b border-black py-5"
            style={{ border: noBorder ? "none" : "" }}
        >
            <div className="flex space-x-4">
                <img
                    className="block size-12 p-2 bg-slate-300 object-cover rounded-xl aspect-square"
                    src="https://icons.veryicon.com/png/o/miscellaneous/zr_icon/work-experience-2.png"
                    alt="this is icon"
                />
                <div className="content ">
                    <p className="title font-semibold font-Roboto-Slab text-xl">
                        {data.companyName}
                    </p>
                    <div className="edu flex space-x-3 text-base">
                        <p className="degree">{data.position}</p>
                        <p className="field">{data.type}</p>
                    </div>
                    <div className="duration flex space-x-2 text-slate-500 text-base">
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
                        <p>
                            {". "}
                            {durationYears > 0
                                ? `${durationYears} years`
                                : ""}{" "}
                            {durationMonths > 0
                                ? `${durationMonths} months`
                                : ""}
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                {isOwnProfile && (
                    <div className="flex space-x-3">
                        <Link
                            to={`/profile/${data.userId}/experience/${data.id}/edit`}
                            className="block"
                            onClick={() => setModalIsOpen(true)}
                        >
                            <img
                                className="block size-6"
                                src={images.edit}
                                alt="this is icon"
                            />
                        </Link>
                        <CreateExperienceModel
                            modalIsOpen={modalIsOpen}
                            setModalIsOpen={setModalIsOpen}
                            data={workExpData}
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
        </div>
    );
};

export default ProfileExperienceContent;
