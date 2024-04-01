import React, { useState } from "react";
import { ShortAds } from "../ads/Ads";
import Footer from "../footer/Footer";

const UpdateProfile = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phNumber: "",
        gender: "",
        dob: "",
        address: "",
        bio: "",
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value.trim(),
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-background">
            <div className="inner max-w-1240px mx-auto px-5 xl:px-0">
                <div className="shadow-custom bg-white rounded-lg overflow-hidden mt-5 p-5">
                    <h1 className="text-center text-3xl font-Roboto-Slab font-bold mb-3">
                        Update Profile
                    </h1>

                    <div className="grid grid-cols-3">
                        <form className="col-span-2" onSubmit={submitHandler}>
                            <div className="flex justify-between">
                                <div className="input-box mb-3">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-96 block text-lg px-2 py-2.5 `}
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={inputHandler}
                                        placeholder="First Name"
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="input-box mb-3">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-96  mx-auto block text-lg px-2 py-2.5 `}
                                        type="text"
                                        name="lastname"
                                        value={data.lastName}
                                        onChange={inputHandler}
                                        placeholder="Last Name"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="input-box mb-4">
                                <input
                                    className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full mx-auto block text-lg px-2 py-2.5 `}
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={inputHandler}
                                    placeholder="Enter your Email"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="flex justify-between">
                                <div className="input-box mb-3">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-96  mx-auto block text-lg px-2 py-2.5 `}
                                        type="text"
                                        name="phNumber"
                                        value={data.phNumber}
                                        onChange={inputHandler}
                                        placeholder="Enter your Phone Number"
                                    />
                                </div>

                                <div className="flex space-x-4">
                                    <div className="input-box mb-3">
                                        <input
                                            className={`focus:outline-none bg-transparent border-b-2 rounded-md  focus:border-slate-700 transition-colors duration-200 ease-linear w-60  mx-auto block text-lg px-2 py-2.5 `}
                                            type="date"
                                            name="dateofbirth"
                                            value={data.dob}
                                            onChange={inputHandler}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="input-box mb-3">
                                        <div className="mt-2 flex">
                                            <select
                                                id="gender"
                                                name="gender"
                                                value={data.gender}
                                                onChange={inputHandler}
                                                className="focus:outline-none bg-transparent border-b-2 rounded-md  focus:border-slate-600 transition-colors duration-200 ease-linear w-32  mx-auto block text-lg px-2 py-2.5"
                                            >
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input-box mb-3">
                                <input
                                    className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full  mx-auto block text-lg px-2 py-2.5 `}
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={inputHandler}
                                    placeholder="Enter your Address"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="input-box mb-3">
                                <input
                                    type="text"
                                    name="bio"
                                    className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full  mx-auto block text-lg px-2 py-2.5`}
                                    placeholder="Enter Bio"
                                    value={data.bio}
                                    onChange={inputHandler}
                                />
                            </div>

                            <button
                                className="bg-primary text-white px-5 py-2 rounded-md text-lg"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>

                        <div className=" col-span-1 mx-auto">
                            <ShortAds />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
