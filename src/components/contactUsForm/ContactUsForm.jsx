import React, { useState } from "react";

const ContactUsForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in data) {
            if (data[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        setErrors(newErrors);
    };

    return (
        <section>
            <form className="min-w-[350px]" action="" onSubmit={submitHandler}>
                <div className="input-box mb-3">
                    <input
                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${
                            errors.email ? "border-red-400" : "border-slate-300"
                        }`}
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={inputHandler}
                        placeholder="Plz Enter your Name"
                    />
                    {errors.name && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <input
                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${
                            errors.email ? "border-red-400" : "border-slate-300"
                        }`}
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={inputHandler}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <textarea
                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 resize-none h-24 ${
                            errors.email ? "border-red-400" : "border-slate-300"
                        }`}
                        name="message"
                        id="message"
                        value={data.message}
                        onChange={inputHandler}
                        placeholder="Comment"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.message}
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

export default ContactUsForm;
