import { React, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useUserStoreLogIn, useUserStorage } from "../Store";
import { Loading } from "../loading/Loading";

const LogInForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const postData = {
        firstName: data.firstName,
        lastName: data.lastName,
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
    } = useUserStoreLogIn();

    const { success: successMessage } = useUserStorage();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
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

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            await apiCall(postData);
        }
    };

    if (success) {
        window.location.href = "/";
    }

    return (
        <section>
            <Loading isLoading={isLoading} />
            {successMessage && (
                <p className="text-sky-500 text-lg font-bold text-center mb-5">
                    Your Acc is created Successful! Plz Log in again
                </p>
            )}
            {error && errorMessage && (
                <p className="text-red-500 text-xl font-semibold text-center">
                    {errorMessage}
                </p>
            )}
            <form
                className="min-w-[350px]"
                action="POST"
                onSubmit={submitHandler}
            >
                {errors.wrongPassword && (
                    <p className="text-red-700 rounded-lg mb-3">
                        {errors.wrongPassword}
                    </p>
                )}
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
                            type={showPassword ? "text" : "password"}
                            name="password"
                            // id="password"
                            value={data.password}
                            onChange={inputHandler}
                            placeholder="Enter your Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
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

export default LogInForm;
