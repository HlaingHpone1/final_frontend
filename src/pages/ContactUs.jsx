import React from "react";

import ContactUsForm from "../components/contactUsForm/ContactUsForm";

const ContactUs = () => {
    return (
        <main>
            <div className="contactus__section">
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white shadow-2xl  px-5 py-14 rounded-lg">
                        <div className="title mb-8 text-3xl font-bold text-center">
                            Contact us
                        </div>
                        <ContactUsForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
