import { React, useState, useEffect } from "react";
import Modal from "react-modal";

import { images } from "../images";

import { useCreateSkill, useUpdateSkill } from "../Store";
import { useParams, useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const CreateSkillModel = ({ modalIsOpen, setModalIsOpen, data }) => {
    const navigate = useNavigate();

    const { id, skillID } = useParams();
    const { apiCall: createSkill, success } = useCreateSkill();
    const { apiCall: updateSkill } = useUpdateSkill();

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
            [name]: value,
        });
    };

    useEffect(() => {
        if (data) {
            setSkill({
                ...data,
            });
        }
    }, [data]);

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
            if (skillID === undefined) {
                await createSkill(id, postData);
            } else {
                await updateSkill(skillID, postData);
                window.location.href = `/profile/${id}/skill`;
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
                            navigate(`/profile/${id}/skill`);
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
                    <div className="input-box mb-8">
                        <input
                            type="text"
                            name="skillName"
                            className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-900 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                            value={skill.skillName}
                            onChange={inputHandler}
                            placeholder="Skill "
                        />
                        {errors.skillName &&
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.skillName}
                            </p>}
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

export default CreateSkillModel;
