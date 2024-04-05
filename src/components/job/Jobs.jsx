import { React, useContext, useState, useEffect } from "react";
import JobSidebar from "./JobSidebar";
import { RoleContext } from "../RoleContext";
import { MediumAds } from "../ads/Ads";
import JobPosts from "./JobPosts";

import { useGetJobPosts } from "../Store";
import { Link } from "react-router-dom";

const Jobs = () => {
    const { isUSER, isRECRUITER, isJOBSEEKER } = useContext(RoleContext);

    const { apiCall } = useGetJobPosts();

    const [jobPosts, setJobPosts] = useState([]);
    const [pages, setPages] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const controller = new AbortController();

        const fetchJobPosts = async () => {
            const res = await apiCall(pages, controller.signal);
            setJobPosts([...jobPosts, ...res.content]);
            setTotalPages(res.totalPages);
        };

        fetchJobPosts();

        return () => controller.abort();
    }, [pages]);

    const addPageHandler = () => {
        if (pages < totalPages - 1) {
            setPages(pages + 1);
        }
    };

    return (
        <div>
            <div className="inner max-w-1240px mx-auto px-5 xl:px-0">
                <div className="grid grid-cols-4 gap-5 mt-5">
                    <div className="col-span-1">
                        <JobSidebar />
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white p-3 rounded-xl shadow-custom overflow-hidden">
                            <div className="flex items-center justify-between mb-5">
                                <h1 className="text-2xl font-bold font-Roboto-Slab">
                                    Top job picks for you
                                </h1>
                                {pages < totalPages - 1 && (
                                    <button
                                        onClick={addPageHandler}
                                        className=" text-xl"
                                    >
                                        See all
                                    </button>
                                )}
                            </div>
                            <div className="jobpost-container">
                                {jobPosts.map((job) =>
                                    isUSER ? (
                                        <div key={job.id}>
                                            <JobPosts job={job} />
                                        </div>
                                    ) : (
                                        <Link
                                            to={`/jobs/${job.id}`}
                                            key={job.id}
                                        >
                                            <JobPosts job={job} />
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">{isUSER && <MediumAds />}</div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
