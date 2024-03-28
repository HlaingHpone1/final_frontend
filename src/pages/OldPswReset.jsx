import React from "react";
import OldPswForm from "../components/resetWthOldpsw/OldPswForm";

const OldPswReset = () => {
    return (
        <main className="container">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-2xl  px-5 py-14 rounded-lg">
                    <div className="title mb-9 text-3xl font-bold text-center">
                        Reset Your Password
                    </div>
                    <OldPswForm />
                </div>
            </div>
        </main>
    );
};

export default OldPswReset;
