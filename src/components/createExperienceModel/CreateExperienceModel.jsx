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

                    <input
                        type="date"
                        name="startDate"
                        value={experience.startDate}
                        onChange={inputHandler}
                    />
                    {errors.startDate && <p>{errors.startDate}</p>}

                    <input
                        type="date"
                        name="endDate"
                        value={experience.endDate}
                        onChange={inputHandler}
                    />
                    {errors.endDate && <p>{errors.endDate}</p>}

                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default CreateExperienceModel;
