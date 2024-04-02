import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

import { useCreateWorkExp } from "../Store";
import { images } from "../images";

Modal.setAppElement("#root");

const CreateExperienceModel = ({ modalIsOpen, setModalIsOpen }) => {
    const { id } = useParams();
    const { apiCall, success } = useCreateWorkExp();

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
            [name]: value.trim(),
        });
    };

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
            await apiCall(id, postData);
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
                        }}
                    >
                        <img
                            className="block size-6"
                            src={images.cross}
                            alt="this is close icon"
                        />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="companyName"
                        value={experience.companyName}
                        onChange={inputHandler}
                        placeholder="Company Name"
                    />
                    {errors.companyName && <p>{errors.companyName}</p>}

                    <input
                        type="text"
                        name="position"
                        value={experience.position}
                        onChange={inputHandler}
                        placeholder="Position"
                    />
                    {errors.position && <p>{errors.position}</p>}

                    <input
                        type="text"
                        name="type"
                        value={experience.type}
                        onChange={inputHandler}
                        placeholder="Type"
                    />
                    {errors.type && <p>{errors.type}</p>}

                    <div className="flex justify-center space-x-5 mt-3">
                        <div className="input-box mb-3 w-full">
                            <input
                                type="date"
                                name="startDate"
                                className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                                value={experience.startDate}
                                onChange={inputHandler}
                            />
                            {errors.startDate && (
                                <p className="text-red-700 mt-2">
                                    {errors.startDate}
                                </p>
                            )}
                        </div>

                        <div className="input-box mb-8 w-full">
                            <input
                                type="date"
                                name="endDate"
                                className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                                value={experience.endDate}
                                onChange={inputHandler}
                            />
                            {errors.endDate && (
                                <p className="text-red-700 mt-2">
                                    {errors.endDate}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-primary text-white px-5 py-2 rounded-md text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CreateExperienceModel;
