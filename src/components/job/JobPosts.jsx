import React from "react";
import { images } from "../images";
import moment from "moment";

const JobPosts = ({ job }) => {
    return (
        <button className="jotpost flex space-x-4 w-full mb-5">
            <img
                className="size-20 rounded-full object-cover aspect-square"
                src={job.profileImg}
                alt="this is image"
            />
            <div className="jobinfo text-sm text-start text-slate-400 ">
                <p className="title text-lg font-bold text-primary">
                    {job.title}
                </p>
                <p className="company text-slate-700">{job.companyName}</p>
                <p className="location">{job.location}</p>
                <p className="time">{moment(job.uploadTime).fromNow()}</p>
            </div>
        </button>
    );
};

export default JobPosts;
