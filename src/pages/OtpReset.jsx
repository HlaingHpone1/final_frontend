import React from "react";
import ResetOtpForm from "../components/resetWithOtp/ResetOtpForm";

const OtpReset = () => {
    return (
        <main className="container">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-2xl  px-5 py-14 rounded-lg">
                    <p className=" font-semibold text-xl">Enter OTP</p>
                    {/* <p className='text-gray-400 text-base'>OTP is already sent to your email</p> */}
                    <ResetOtpForm />
                </div>
            </div>
        </main>
    );
};

export default OtpReset;
