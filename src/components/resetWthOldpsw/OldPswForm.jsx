import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OldPswForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const showPasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault(e);

        const newErrors = {};

        for (const fieldName in data) {
            if (data[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.put(
                    `http://localhost:8080/users/${id}/reset-password`,
                    {
                        oldPassword: data.oldPassword,
                        newPassword: data.newPassword,
                    }
                );

                console.log(response);
                navigate("/");
            } catch (error) {
                console.error("Error resetting password:", error);

                alert("Your old password does not match.Try again! ");
            }
        }
    };

    // console.log(errors);

    return (
        <section>
            <form className=" min-w-[350px]" action="" onSubmit={submitHandler}>
                {errors.notSamePassword && (
                    <p className="text-red-700 rounded-lg mt-2">
                        {errors.notSamePassword}
                    </p>
                )}

                {/* oldPassword */}

                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear  focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={
                                showPassword.oldPassword ? "text" : "password"
                            }
                            name="oldPassword"
                            value={data.password}
                            onChange={inputHandler}
                            placeholder="Enter Old Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                showPasswordVisibility("oldPassword")
                            }
                        >
                            {showPassword.oldPassword ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.oldPassword && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.oldPassword}
                        </p>
                    )}
                </div>

                {/* newPassword */}
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear  focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={
                                showPassword.newPassword ? "text" : "password"
                            }
                            name="newPassword"
                            value={data.newPassword}
                            onChange={inputHandler}
                            placeholder="New Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                showPasswordVisibility("newPassword")
                            }
                        >
                            {showPassword.newPassword ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.newPassword && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.newPassword}
                        </p>
                    )}
                </div>

                {/* confirm new password */}
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear  focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={
                                showPassword.confirmNewPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmNewPassword"
                            value={data.confirmNewPassword}
                            onChange={inputHandler}
                            placeholder="Confirm Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                showPasswordVisibility("confirmNewPassword")
                            }
                        >
                            {showPassword.confirmNewPassword ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.confirmNewPassword && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.confirmNewPassword}
                        </p>
                    )}
                </div>

                <button
                    className="bg-slate-500 text-white px-5 py-2 rounded-md text-lg"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default OldPswForm;
