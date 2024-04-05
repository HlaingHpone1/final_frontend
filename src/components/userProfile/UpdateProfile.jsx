import React, { useState, useEffect, useContext } from "react";
import { ShortAds } from "../ads/Ads";
import Footer from "../footer/Footer";

import { useGetUser, useLocalSessionStore } from "../Store";
import { useParams, useNavigate } from "react-router-dom";
import { RoleContext } from "../RoleContext";
import axios from "axios";
import { Loading } from "../loading/Loading";

const UpdateProfile = () => {
    const { isRECRUITER, isJOBSEEKER } = useContext(RoleContext);

    const { apiCall: userInfoAPI } = useGetUser();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { userData: localUser } = useLocalSessionStore();

    const { id } = useParams();
    const isOwnProfile = id === localUser.data.id;

    const [allData, setAllData] = useState({});
    const [userData, setUserData] = useState([]);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        phoneNumber: "",
        gender: "",
        dob: "",
        address: "",
        bio: "",
    });

    let keys = [
        "firstName",
        "lastName",
        "mail",
        "phoneNumber",
        "gender",
        "dob",
        "address",
        "bio",
    ];

    const controller = new AbortController();

    const fetchUser = async () => {
        const result = await userInfoAPI(id, controller.signal);

        keys.forEach((key) => {
            data[key] = result.data[key] == null ? "" : result.data[key];
        });

        setData({
            ...data,
        });

        // setAllData(result);

        sessionStorage.setItem("userData", JSON.stringify(result));
    };

    useEffect(() => {
        fetchUser();

        return () => controller.abort();
    }, []);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        axios.put(`http://localhost:8080/users/${id}`, {
            firstName: data.firstName,
            lastName: data.lastName,
            mail: data.mail,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            dob: data.dob,
            address: data.address,
            bio: data.bio,
        });

        setLoading(false);

        fetchUser();

        window.location.href = `/profile/${id}`;
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
                            <div className="flex justify-center space-x-5">
                                <div className="input-box mb-3 w-full">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 `}
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={inputHandler}
                                        placeholder="First Name"
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="input-box mb-3 w-full">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full  mx-auto block text-lg px-2 py-2.5 `}
                                        type="text"
                                        name="lastName"
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
                                    name="mail"
                                    value={data.mail}
                                    onChange={inputHandler}
                                    placeholder="Enter your Email"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="flex justify-center space-x-5">
                                <div className="input-box w-full mb-3">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear  mx-auto block w-full text-lg px-2 py-2.5 `}
                                        type="text"
                                        name="phoneNumber"
                                        value={data.phoneNumber}
                                        onChange={inputHandler}
                                        placeholder="Enter your Phone Number"
                                    />
                                </div>
                                <div className="input-box w-full mb-3">
                                    <input
                                        className={`focus:outline-none bg-transparent border-b-2 focus:border-slate-700 transition-colors duration-200 w-full ease-linear  mx-auto block text-lg px-2 py-2.5 `}
                                        type="date"
                                        name="dob"
                                        value={data.dob}
                                        onChange={inputHandler}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="input-box w-full mb-3">
                                    <div className="mt-2 flex">
                                        <select
                                            id="gender"
                                            name="gender"
                                            value={data.gender}
                                            onChange={inputHandler}
                                            className="focus:outline-none bg-transparent border-b-2 focus:border-slate-600 transition-colors duration-200 w-full ease-linear  mx-auto block text-lg px-2 py-2.5"
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
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
                            {!(isJOBSEEKER || isRECRUITER) && <ShortAds />}
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
