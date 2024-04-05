import React from "react";
import { useParams, Link } from "react-router-dom";

const Recruiter = () => {
    const { id } = useParams();

    return (
        <div className="bg-white p-2 rounded-xl shadow-custom overflow-hidden mb-5">
            <h1 className="text-center text-2xl font-bold mb-5">
                Job Recruiter
            </h1>
            <div className="flex flex-col items-start space-y-3">
                <Link to={`/profile/${id}/createjobpost`}>Create Job Post</Link>
                <button>See Job Posts</button>
                <button>See Job Applier</button>
            </div>
        </div>
    );
};

export default Recruiter;
