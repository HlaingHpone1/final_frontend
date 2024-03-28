import React from "react";
import PswChgForm from "../components/pswChangeForm/PswChgForm";

const ChangePsw = () => {
    return (
        <main className="container">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-2xl  px-5 py-14 rounded-lg">
                    <div className="title mb-9 text-3xl font-bold text-center">
                        Change Your Password
                    </div>
                    <PswChgForm />
                </div>
            </div>
        </main>
    );
};

export default ChangePsw;
