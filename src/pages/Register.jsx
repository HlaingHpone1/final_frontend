import React from "react";
import RegisterForm from "../components/registerForm/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <main className="register__section container">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-2xl px-10 py-10 rounded-lg">
                    <div className="title mb-8 text-3xl font-bold text-center">
                        Sign Up
                    </div>
                    <RegisterForm />
                    <div className="mt-3">
                        <Link className="text-lg font-semibold" to="/login">
                            Already Have Acc ?
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
