import React from "react";

import { img } from "../img";
import { Link } from "react-router-dom";

export const ShortAds = () => {
    return (
        <div>
            <img src={img.ads} className="rounded-2xl w-[335px] h-64 mb-4" />
        </div>
    );
};

export const SubscriptionAds = () => {
    return (
        <div className=" w-80 bg-gray-600 rounded-xl">
            <div className="p-4 text-white">
                <p className="font-medium text-lg">Grow Your Network with Premium</p>
                <p className="text-sm py-4">Premium InMail is 4.6x more effective in hearing back than cold email.</p>

                <Link to={"/subscription"}
                className="py-2 px-5 bg-yellow-200 text-black font-semibold rounded-3xl " >
                    Try Premium for free
                </Link>

                <p className="text-sm text-gray-200 pt-4">
                    1-month free trial. We'll send you a reminder 7 days before your trial ends.</p>
            </div>
        </div>
    )
}


