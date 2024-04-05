import { React, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { images } from "../components/images";

const JobPostsDetail = () => {
    const { jobID } = useParams();

    const [jobData, setJobData] = useState([]);

    useEffect(() => {}, [jobID]);

    return (
        <div className="inner max-w-1240px mx-auto mt-5 px-5 xl:px-0">
            <div className="bg-white shadow-custom rounded-xl p-3 grid grid-cols-2">
                <div className="col-span-1">
                    <div className="job-info mb-5">
                        <div className="title text-2xl font-bold font-Roboto-Slab  ">
                            Developer
                        </div>
                        <div className="flex space-x-4 text-sm items-center text-slate-600">
                            <p className="company text-base">Win Pa Pa</p>
                            <p className="location">Myanmar</p>
                            <p className="time">1 day</p>
                        </div>
                        <div className="type flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.job1}
                                alt=""
                            />
                            <p>Full Time</p>
                        </div>
                        <div className="category flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.code}
                                alt=""
                            />
                            <p>Java</p>
                        </div>
                        <div className="qualification flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.qua}
                                alt=""
                            />
                            <p>CS</p>
                        </div>
                        <div className="exp flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.exp}
                                alt=""
                            />
                            <p className="exp">2 year Experience</p>
                        </div>
                        <div className="salary flex items-center space-x-2">
                            <img
                                className="block size-8"
                                src={images.salary}
                                alt=""
                            />
                            <p>$ 2500</p>
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
                                    src={images.userProfile}
                                    alt="this is"
                                />
                                <div className="hr-info">
                                    <p className="font-bold font-Roboto-Slab text-lg">
                                        lorem
                                    </p>
                                    <p className="text-slate-400">Recruiter</p>
                                </div>
                            </div>
                            <button className="border-2 border-slate-500 px-5 py-2 rounded-3xl">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
                <div className="job-desc col-span-1">
                    <div className="title text-3xl mb-3 font-bold font-Roboto-Slab">
                        Description
                    </div>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc et odio eu nisi tincidunt varius. Donec nec
                        fermentum nisl. Nullam nec elit nec nulla ultricies
                        ultricies. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobPostsDetail;
