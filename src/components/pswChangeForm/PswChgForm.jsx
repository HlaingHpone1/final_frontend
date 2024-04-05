import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocalSessionStore } from "../Store";
import axios from "axios";

import { useParams } from "react-router-dom";

const PswChgForm = () => {
    const [data, setData] = useState({
        newPassword: "",
        Otp: "",
        mail: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const storeEmail = localStorage.getItem("email");

    const [showPassword, setShowPassword] = useState({
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value.trim(),
        });
    };

    const showPasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };

    function validatePassword(password) {
        const lengthCheck = password.length >= 8;
        const specialCharacterCheck = /[!@#$%^&*(),.?":{}|<>]/g.test(password);
        const numberCheck = /\d/g.test(password);
        const uppercaseCheck = /[A-Z]/g.test(password);
        const lowercaseCheck = /[a-z]/g.test(password);
        return (
            lengthCheck &&
            specialCharacterCheck &&
            numberCheck &&
            uppercaseCheck &&
            lowercaseCheck
        );
    }

    const otpHandler = (e) => {
        const otpWriteData = e.target.value;
        setData({ ...data, Otp: otpWriteData });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in data) {
            if (data[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        if (data.newPassword != data.confirmPassword) {
            newErrors.notSamePassword = "Password aren't same";
        }

        const pass = validatePassword(data.newPassword);
        if (!pass) {
            newErrors.passwordStrength =
                "Password must contain at least 8 characters, including uppercase, lowercase, number and special character";
        }

        setErrors(newErrors);
        try {
            setIsLoading(true);

            const email = localStorage.getItem("email");
            //   console.log("Shine Htet wai",email);
            axios
                .put(`http://localhost:8080/users/reset-password-otp`, {
                    mail: storeEmail,
                    otp: data.Otp,
                    newPassword: data.newPassword,
                })
                .then((response) => {
                    if (response.status === 204) {
                        localStorage.removeItem("email");
                        window.location.href = "/login";
                    } else if (response.status === 400) {
                        alert("Invalid OTP");
                    } else {
                        console.log("An error occurred");
                    }
                    console.log(response.status);
                })
                .catch((error) => {
                    console.error(
                        "An error occurred while changing the password",
                        error
                    );
                });
            setIsLoading(false);
        } catch (error) {
            console.error("Erro on changing password", error);
            setIsLoading(false);
        }
    };

    return (
        <section>
            {errors.passwordStrength && (
                <p className="text-red-700 rounded-lg mt-2">
                    {errors.passwordStrength}
                </p>
            )}
            <form className=" min-w-[350px]" action="" onSubmit={submitHandler}>
                {errors.notSamePassword && (
                    <p className="text-red-700 rounded-lg mt-2">
                        {errors.notSamePassword}
                    </p>
                )}
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
                                showPassword.confirmPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={inputHandler}
                            placeholder="Confirm Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                showPasswordVisibility("confirmPassword")
                            }
                        >
                            {showPassword.confirmPassword ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.confirmPassword}
                        </p>
                    )}
                    <div className="mb-5">
                        <input
                            type="text"
                            name="Otp"
                            value={data.Otp}
                            placeholder="Enter OTP"
                            className="bg-transparent border-b-2 focus:outline-none  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 rounded-sm my-3"
                            onChange={otpHandler}
                        />
                        {errors.Otp && (
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.Otp}
                            </p>
                        )}
                        <div className="flex justify-between"></div>
                    </div>
                </div>

                <button
                    className="bg-slate-500 text-white px-5 py-2 rounded-md text-lg"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Submit"}
                </button>
            </form>
        </section>
    );
};

export default PswChgForm;
