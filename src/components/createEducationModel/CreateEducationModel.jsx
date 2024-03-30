import { React, useState, useEffect } from "react";
import Modal from "react-modal";

import { images } from "../images";

import { useCreateEducation, useUpdateEducation } from "../Store";
import { useParams, useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const CreateEducationModel = ({ modalIsOpen, setModalIsOpen, data }) => {
    const navigate = useNavigate();

    const { id, eduID } = useParams();

    const { apiCall: updateEducation } = useUpdateEducation();
    const { apiCall: createEducation, success } = useCreateEducation();

    const [education, setEducation] = useState({
        schoolName: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (data) {
            setEducation({
                ...data,
            });
        }
    }, [data]);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setEducation({
            ...education,
            [name]: value,
        });
    };

    const postData = {
        schoolName: education.schoolName,
        degree: education.degree,
        fieldOfStudy: education.fieldOfStudy,
        startDate: education.startDate,
        endDate: education.endDate,
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
            if (eduID === undefined) {
                await createEducation(id, postData);
            } else {
                await updateEducation(eduID, postData);
                window.location.href = `/profile/${id}/education`;
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

    // console.log(education);

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
                            if (eduID) {
                                navigate(`/profile/${id}/education`);
                            }
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
                        name="schoolName"
                        id="schoolName"
                        value={education.schoolName}
                        onChange={inputHandler}
                        placeholder="University Name"
                    />
                    {errors.schoolName && <p>{errors.schoolName}</p>}

                    <input
                        type="text"
                        name="degree"
                        id="degree"
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
