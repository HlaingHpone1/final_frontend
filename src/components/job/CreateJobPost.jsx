import { React, useState } from "react";
import { images } from "../images";
import { Link, useNavigate } from "react-router-dom";
import { useCreateJob, useLocalSessionStore } from "../Store";

const CreateJobPost = () => {
    const { userData } = useLocalSessionStore();
    const navigate = useNavigate();
    const { success, apiCall } = useCreateJob();

    const [jobPost, setJobPost] = useState({
        title: "",
        company: "",
        location: "",
        type: "",
        category: "",
        qualification: "",
        experience: "",
        salary: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobPost({
            ...jobPost,
            [name]: value,
        });
    };

    const validate = (data) => {
        let newErrors = {};

        for (const fieldName in data) {
            if (data[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate(jobPost);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const postData = {
                userId: userData.data.id,
                title: jobPost.title,
                description: jobPost.description,
                location: jobPost.location,
                type: jobPost.type,
                category: jobPost.category,
                qualification: jobPost.qualification,
                exp: jobPost.experience,
                salary: jobPost.salary,
                companyName: jobPost.company,
            };

            await apiCall(postData);
        }

        if (success) {
            navigate(-1);
        }
    };

    return (
        <div>
            <div className="inner max-w-1240px mx-auto px-5 xl:px-0 ">
                <div className="bg-white shadow-custom rounded-xl overflow-hidden mt-5 p-3">
                    <div className="flex">
                        {/* <Link to={`/profile/${userData.data.id}`}> */}
                        <img
                            className="block size-8"
                            src={images.backArrow}
                            alt="this is icon"
                            onClick={() => navigate(-1)}
                        />
                        {/* </Link> */}
                        <h1 className="text-center text-2xl flex-1 font-bold font-Roboto-Slab mb-5">
                            Create Job Post
                        </h1>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="flex justify-center space-x-3">
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="title">Job Title</label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={jobPost.title}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Title"
                                />
                                {errors.title && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.title}
                                    </p>
                                )}
                            </div>

                            <div className="input-box mb-5 w-full">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={jobPost.company}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Salary"
                                />
                                {errors.company && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.company}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center space-x-3">
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="location">Job Location</label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={jobPost.location}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Location"
                                />
                                {errors.location && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.location}
                                    </p>
                                )}
                            </div>
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="type">Job Type</label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="type"
                                    id="type"
                                    value={jobPost.type}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Type"
                                />
                                {errors.type && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.type}
                                    </p>
                                )}
                            </div>
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="category">Job Category</label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="category"
                                    id="category"
                                    value={jobPost.category}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Category"
                                />
                                {errors.category && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.category}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center space-x-3">
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="qualification">
                                    Job Qualification
                                </label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="qualification"
                                    id="qualification"
                                    value={jobPost.qualification}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Qualification"
                                />
                                {errors.qualification && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.qualification}
                                    </p>
                                )}
                            </div>
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="experience">
                                    Job Experience
                                </label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="experience"
                                    id="experience"
                                    value={jobPost.experience}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Experience"
                                />
                                {errors.experience && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.experience}
                                    </p>
                                )}
                            </div>
                            <div className="input-box mb-5 w-full">
                                <label htmlFor="salary">Job Salary</label>
                                <input
                                    className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                                    type="text"
                                    name="salary"
                                    id="salary"
                                    value={jobPost.salary}
                                    onChange={handleChange}
                                    placeholder="Enter your Job Salary"
                                />
                                {errors.salary && (
                                    <p className="text-red-700 rounded-lg mt-2">
                                        {"* " + errors.salary}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="input-box mb-5">
                            <label htmlFor="description">Job Description</label>
                            <textarea
                                className="block w-full border border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm resize-none"
                                name="description"
                                id="description"
                                value={jobPost.description}
                                onChange={handleChange}
                                placeholder="Enter your Job Description"
                            />
                            {errors.description && (
                                <p className="text-red-700 rounded-lg mt-2">
                                    {"* " + errors.description}
                                </p>
                            )}
                        </div>
                        <div className="">
                            <button
                                className="bg-primary text-white py-2 px-4 rounded-md"
                                type="submit"
                            >
                                Create Job Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateJobPost;
