import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { useCreateWorkExp, useUpdateWorkExp } from "../Store";
import { images } from "../images";

Modal.setAppElement("#root");

const CreateExperienceModel = ({ modalIsOpen, setModalIsOpen, data }) => {
    const navigate = useNavigate();
    const { id, expID } = useParams();
    const { apiCall: createWork, success } = useCreateWorkExp();
    const { apiCall: updateWork } = useUpdateWorkExp();

    const [experience, setExperience] = useState({
        companyName: "",
        position: "",
        type: "",
        startDate: "",
        endDate: "",
    });

    const postData = {
        companyName: experience.companyName,
        position: experience.position,
        type: experience.type,
        startDate: experience.startDate,
        endDate: experience.endDate,
    };

    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setExperience({
            ...experience,
            [name]: value,
        });
    };

    useEffect(() => {
        if (data) {
            setExperience({
                ...data,
            });
        }
    }, [data]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in experience) {
            if (experience[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            if (expID === undefined) {
                await createWork(id, postData);
                console.log("create");
            } else {
                await updateWork(expID, postData);
                // window.location.href = `/profile/${id}/experience`;
                console.log("update");
            }
        }
    };

    if (success) {
        window.location.reload();
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "min(90%, 700px)",
            height: "70%",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
        },
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Create Post Modal"
            >
                <div className="">
                    <button
                        className="absolute top-5 right-5 bg-slate-300 p-2 rounded-full"
                        onClick={() => {
                            setModalIsOpen(false);
                            navigate(`/profile/${id}/experience`);
                        }}
                    >
                        <img
                            className="block size-6"
                            src={images.cross}
                            alt="this is close icon"
                        />
                    </button>
                </div>
                <form
                    className="mt-8"
                    onSubmit={handleSubmit}>
                    <div className="input-box mb-3">
                        <input
                            type="text"
                            name="companyName"
                            className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                            value={experience.companyName}
                            onChange={inputHandler}
                            placeholder="Company Name"
                        />
                        {errors.companyName &&
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.companyName}
                            </p>}
                    </div>

                    <div className="input-box mb-3">
                        <input
                            type="text"
                            name="position"
                            className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                            value={experience.position}
                            onChange={inputHandler}
                            placeholder="Position"
                        />
                        {errors.position &&
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.position}
                            </p>}
                    </div>

                    <div className="input-box mb-3">
                        <input
                            type="text"
                            name="type"
                            className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                            value={experience.type}
                            onChange={inputHandler}
                            placeholder="Type"
                        />
                        {errors.type &&
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.type}
                            </p>}
                    </div>

                    <div className="flex justify-center space-x-5 mt-3">
                        <div className="input-box mb-3 w-full">
                            <input
                                type="date"
                                name="startDate"
                                className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                                value={experience.startDate}
                                onChange={inputHandler}
                            />
                            {errors.startDate &&
                                <p className="text-red-700 mt-2">
                                    {errors.startDate}
                                </p>}
                        </div>

                        <div className="input-box mb-8 w-full">
                            <input
                                type="date"
                                name="endDate"
                                className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                                value={experience.endDate}
                                onChange={inputHandler}
                            />
                            {errors.endDate &&
                                <p className="text-red-700 mt-2">
                                    {errors.endDate}
                                </p>}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-primary text-white px-5 py-2 rounded-md text-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CreateExperienceModel;
