import React from "react";
import { images } from "../images";
import CompanyPage from "../companyPage/CompanyPage";
import { companies } from "../demo";

const Suggestion = () => {
    return (
        <div className="mb-5 bg-white shadow-custom rounded-2xl">
            <div className="inner-card px-3 py-4">
                <div className="title flex justify-between items-center mb-4">
                    <p className="text-base font-bold">Suggestion</p>
                    <img
                        className="block size-5"
                        src={images.notice}
                        alt="this is Suggestion icon"
                    />
                </div>
                <div className="suggestion">
                    {companies.map((item, index) => (
                        <CompanyPage key={index} data={item} /> // Assuming Post component accepts a prop named 'data'
                    ))}
                </div>
                <div className="view-all">
                    <button className="text-sm font-semibold">
                        View All Recommendation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
