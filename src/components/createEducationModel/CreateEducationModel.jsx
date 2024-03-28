import { React, useState } from "react";
import Modal from "react-modal";

import { images } from "../images";

import { useCreateEducation } from "../Store";
import { useParams } from "react-router-dom";

Modal.setAppElement("#root");

const CreateEducationModel = ({ modalIsOpen, setModalIsOpen }) => {
    const { id } = useParams();
    const { apiCall, success } = useCreateEducation();

    const [education, setEducation] = useState({
        universityName: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
    });

    const postData = {
        schoolName: education.universityName,
        degree: education.degree,
        fieldOfStudy: education.fieldOfStudy,
        startDate: education.startDate,
        endDate: education.endDate,
    };

    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setEducation({
            ...education,
            [name]: value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in education) {
            if (education[fieldName] == "") {
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
                        name="universityName"
                        value={education.universityName}
                        onChange={inputHandler}
                        placeholder="University Name"
                    />
                    {errors.universityName && <p>{errors.universityName}</p>}

                    <input
                        type="text"
                        name="degree"
                        value={education.degree}
                        onChange={inputHandler}
                        placeholder="Degree"
                    />
                    {errors.degree && <p>{errors.degree}</p>}

                    <input
                        type="text"
                        name="fieldOfStudy"
                        value={education.fieldOfStudy}
                        onChange={inputHandler}
                        placeholder="Field of Study"
                    />
                    {errors.fieldOfStudy && <p>{errors.fieldOfStudy}</p>}

                    <input
                        type="date"
                        name="startDate"
                        value={education.startDate}
                        onChange={inputHandler}
                    />
                    {errors.startDate && <p>{errors.startDate}</p>}

                    <input
                        type="date"
                        name="endDate"
                        value={education.endDate}
                        onChange={inputHandler}
                    />
                    {errors.endDate && <p>{errors.endDate}</p>}

                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default CreateEducationModel;
