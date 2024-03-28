import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmailResetForm = () => {
    const [data, setData] = useState({
        email: "",
    });

    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value.trim(),
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const email in data) {
            if (data[email] == "") {
                newErrors[email] = `${email} is required`;
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        }
    };

    return (
        <section>
            <form className=" min-w-[350px]" action="" onSubmit={submitHandler}>
                <div className="input-box mb-5 ">
                    <input
                        className={` bg-transparent border-b-2 focus:outline-none  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 rounded-sm mt-2 `}
                        type="email"
                        name="email"
                        // id="email"

                        value={data.email}
                        placeholder="Enter your email"
                        onChange={inputHandler}
                        autoComplete="off"
                    />
                    {errors.email && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.email}
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

export default EmailResetForm;