import React from "react";
import EmailResetForm from "../components/emailResetForm/EmailResetForm";

const PswReset = () => {
    return (
        <main className="container">
            <div className="flex justify-center items-center h-screen">
                <div className="shadow-2xl  px-5 py-14 rounded-lg">
                    <div className="title mb-9 text-3xl font-bold text-center">
                        Reset Password
                    </div>
                    <EmailResetForm />
                </div>
            </div>
        </main>
    );
};

export default PswReset;
