import { React, useState } from "react";
import Modal from "react-modal";

import { images } from "../images";

import { useCreateSkill } from "../Store";
import { useParams } from "react-router-dom";

Modal.setAppElement("#root");

const CreateSkillModel = ({ modalIsOpen, setModalIsOpen }) => {
    const { id } = useParams();
    const { apiCall, success } = useCreateSkill();

    const [skill, setSkill] = useState({
        skillName: "",
    });

    const postData = {
        skillName: skill.skillName,
    };

    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setSkill({
            ...skill,
            [name]: value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in skill) {
            if (skill[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            await apiCall(id, postData);
            console.log("success");
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
                        name="skillName"
                        value={skill.skillName}
                        onChange={inputHandler}
                        placeholder="Skill "
                    />
                    {errors.skillName && <p>{errors.skillName}</p>}

                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default CreateSkillModel;
