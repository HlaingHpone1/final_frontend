import { React, useContext } from "react";
import { images } from "../images";

import { Link } from "react-router-dom";
import { RoleContext } from "../RoleContext";

const JobSidebar = () => {
    const { isRESCRUITER } = useContext(RoleContext);
    return (
        <div>
            <div className="bg-white rounded-xl overflow-hidden shadow-custom p-5 space-y-4 mb-5">
                <button className="flex items-center space-x-2">
                    <img
                        className="block size-6"
                        src={images.bookmark}
                        alt="This is Icon"
                    />
                    <p className="text-xl">My Jobs</p>
                </button>
                <button className="flex items-center space-x-2">
                    <img
                        className="block size-6"
                        src={images.list}
                        alt="This is Icon"
                    />
                    <p className="text-xl">Preferences</p>
                </button>
                <button className="flex items-center space-x-2">
                    <img
                        className="block size-6"
                        src={images.cv}
                        alt="This is Icon"
                    />
                    <p className="text-xl">Resume Builder</p>
                </button>
            </div>
            {isRESCRUITER && (
                <Link
                    to={`/jobs/createjobpost`}
                    className="border-primary block text-center border-2 hover:bg-teal-50 transition-colors duration-200 rounded-xl py-2 w-full text-xl capitalize"
                >
                    create Job Post
                </Link>
            )}
        </div>
    );
};

export default JobSidebar;
