import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PswChgForm = () => {
    const [data, setData] = useState({
        newPassword: "",
        confirmNewPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        newPassword: "",
        confirmNewPassword: "",
    });

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

    const submitHandler =(e)=>{
        e.preventDefault();
        
    }


  return (
    <section>
            <form
                className=" min-w-[350px]"
                action=""
            // onSubmit={submitHandler}
            >
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear  focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={showPassword.password ? "text" : "password"}
                            name="newPassword"
                            value={data.newPassword}
                            onChange={inputHandler}
                            placeholder="New Password"
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
                </div>


                {/* confirm new password */}
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear  focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={showPassword.password ? "text" : "password"}
                            name="confirmNewPassword"
                            value={data.confirmNewPassword}
                            onChange={inputHandler}
                            placeholder="Confirm Password"
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
                </div>

                <button
                    className="bg-slate-500 text-white px-5 py-2 rounded-md text-lg"
                    type="submit">
                    Submit onSubmit={submitHandler}
                </button>
            </form>
    </section>
  )
}

export default PswChgForm