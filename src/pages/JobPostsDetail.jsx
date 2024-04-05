import { React, useState, useEffect } from "react";
import moment from "moment";

import { useParams, useNavigate } from "react-router-dom";
import { images } from "../components/images";

import { useGetJobPostById } from "../components/Store";

const JobPostsDetail = () => {
    const navigate = useNavigate();

    const { jobID } = useParams();
    const { apiCall } = useGetJobPostById();

    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchJobPost = async () => {
            const res = await apiCall(jobID, controller.signal);
            setJobData(res.data);
        };

        fetchJobPost();

        return () => controller.abort();
    }, [jobID]);

    return (
        <div className="inner max-w-1240px mx-auto mt-5 px-5 xl:px-0">
            <div className="bg-white shadow-custom rounded-xl p-3 grid grid-cols-2">
                <div className="col-span-1">
                    <div className="job-info mb-5 capitalize">
                        <div className="title text-2xl font-bold font-Roboto-Slab ">
                            {jobData.title}
                        </div>
                        <div className="flex space-x-4 text-sm items-center text-slate-600">
                            <p className="company text-base">
                                {jobData.companyName}
                            </p>
                            <p className="location">{jobData.location}</p>
                            <p className="time">
                                {moment(jobData.uploadTime).fromNow()}
                            </p>
                        </div>
                        <div className="type flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.job1}
                                alt=""
                            />
                            <p>{jobData.type}</p>
                        </div>
                        <div className="category flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.code}
                                alt=""
                            />
                            <p>{jobData.category}</p>
                        </div>
                        <div className="qualification flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.qua}
                                alt=""
                            />
                            <p>{jobData.qualification}</p>
                        </div>
                        <div className="exp flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.exp}
                                alt=""
                            />
                            <p className="exp">{`${jobData.exp} Experience`}</p>
                        </div>
                        <div className="salary flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.salary}
                                alt=""
                            />
                            <p>{`$ ${jobData.salary}`}</p>
                        </div>
                    </div>
                    <div className="flex space-x-3 border-b pb-3 border-slate-400">
                        <button className="bg-primary text-white w-32 py-2.5 text-lg rounded-lg">
                            Apply
                        </button>
                        <button className="bg-primary text-white w-32 py-2.5 text-lg rounded-lg">
                            Save
                        </button>
                    </div>
                    <div className="hiring-team py-3">
                        <div className="hr flex justify-between items-start">
                            <div className="flex space-x-3">
                                <img
                                    className="size-20 rounded-full object-cover aspect-square"
                                    src={jobData.profileImg}
                                    alt="this is"
                                />
                                <div className="hr-info">
                                    <p className="font-bold font-Roboto-Slab text-lg">
                                        {jobData.userName}
                                    </p>
                                </div>
                            </div>
                            <button
                                className="border-2 border-slate-500 px-5 py-2 rounded-3xl"
                                onClick={() => navigate("/message")}
                            >
                                Message
                            </button>
                        </div>
                    </div>
                </div>
                <div className="job-desc col-span-1">
                    <div className="title text-3xl mb-3 font-bold font-Roboto-Slab">
                        Description
                    </div>
                    <p className="desc">{jobData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default JobPostsDetail;
