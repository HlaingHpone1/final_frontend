import React from "react";
import { Link } from "react-router-dom";

import LogInForm from "../components/logInForm/LogInForm";

const LogIn = () => {
    return (
        <main className="login__section ">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-2xl  px-10 py-14 rounded-lg">
                    <div className="title mb-8 text-3xl font-bold text-center">
                        Log in
                    </div>
                    <LogInForm />
                    <div className="mt-3 flex justify-between">
                        <Link className="text-lg font-semibold" to="/register">
                            Create Acc ?
                        </Link>
                        <div className=" text-right">
<<<<<<< HEAD
                            <Link className=" font-medium" to="/reset">Forgot Password?</Link>
                            <div>
                                <Link className="font-medium" to="/reset">Reset password with OTP</Link>
                            </div>
=======
                            <Link className=" font-medium" to="/reset">
                                Forgot Password?
                            </Link>
>>>>>>> 2fe06b3018e33656eb22b515b71cb70a714295f9
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LogIn;
