import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useUserStorage } from "../Store";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

const RegisterForm = () => {
    const navigate = useNavigate();

    const abortController = new AbortController();
    const signal = abortController.signal;
    const expirationTime = 10 * 1000;

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        password: "",
        confirmPassword: "",
    });

    const postData = {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.firstName + " " + data.lastName,
        mail: data.email,
        password: data.password,
    };

    const {
        isLoading,
        error,
        errorMessage,
        errorCode,
        userData,
        success,
        apiCall,
    } = useUserStorage();

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

    const submitHandler = async (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in data) {
            if (data[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        if (data.password != data.confirmPassword) {
            newErrors.notSamePassword = "Password aren't same";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            await apiCall(postData);
        }
    };

    if (success) {
        navigate("/login");
    }

    return (
        <section>
            <Loading isLoading={isLoading} />
            {error && errorMessage && (
                <p className="text-red-500 text-xl font-semibold text-center">
                    {errorMessage}
                </p>
            )}
            <form
                className="min-w-[350px]"
                action=""
                method="POST"
                onSubmit={submitHandler}
            >
                {errors.notSamePassword && (
                    <p className="text-red-700 rounded-lg mt-2">
                        {errors.notSamePassword}
                    </p>
                )}
                <div className="flex space-x-4">
                    <div className="input-box mb-3">
                        <input
                            className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${
                                errors.firstName
                                    ? "border-red-400"
                                    : "border-slate-300"
                            }`}
                            type="text"
                            name="firstName"
                            // id="firstName"
                            value={data.firstName}
                            onChange={inputHandler}
                            placeholder="Enter Your First Name"
                            autoComplete="off"
                        />
                        {errors.firstName && (
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.firstName}
                            </p>
                        )}
                    </div>
                    <div className="input-box mb-3">
                        <input
                            className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${
                                errors.lastName
                                    ? "border-red-400"
                                    : "border-slate-300"
                            }`}
                            type="text"
                            name="lastName"
                            // id="lastName"
                            value={data.lastName}
                            onChange={inputHandler}
                            placeholder="Enter Your Last Name"
                            autoComplete="off"
                        />
                        {errors.lastName && (
                            <p className="text-red-700 rounded-lg mt-2">
                                {errors.lastName}
                            </p>
                        )}
                    </div>
                </div>
                <div className="input-box mb-3">
                    <input
                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${
                            errors.email ? "border-red-400" : "border-slate-300"
                        }`}
                        type="email"
                        name="email"
                        // id="email"
                        value={data.email}
                        onChange={inputHandler}
                        placeholder="Enter your Email"
                        autoComplete="off"
                    />
                    {errors.email && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear ${
                            errors.password
                                ? "border-red-400"
                                : "border-slate-300"
                        } focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={showPassword.password ? "text" : "password"}
                            name="password"
                            // id="password"
                            value={data.password}
                            onChange={inputHandler}
                            placeholder="Enter your Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() => showPasswordVisibility("password")}
                        >
                            {showPassword.password ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.password}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 focus:border-slate-700 transition-colors duration-200 ease-linear ${
                            errors.confirmPassword
                                ? "border-red-400"
                                : "border-slate-300"
                        }`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={
                                showPassword.confirmPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            // id="confirmPassword"
                            value={data.confirmPassword}
                            onChange={inputHandler}
                            placeholder="Enter your Password Again"
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

export default RegisterForm;
