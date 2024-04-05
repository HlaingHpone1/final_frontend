import React from "react";

import { img } from "../img";
import { Link } from "react-router-dom";

export const ShortAds = () => {
    return (
        <div>
            <img
                src={img.ads}
                className="object-cover rounded-2xl w-80 h-64 mb-4"
            />
        </div>
    );
};

export const SubscriptionAds = () => {
    return (
        <div className=" w-80 bg-gray-600 rounded-xl">
            <div className="p-4 text-white">
                <p className="font-medium text-lg">
                    Grow Your Network with Premium
                </p>
                <p className="text-sm py-2">
                    Premium InMail is 4.6x more effective in hearing back than
                    cold email.
                </p>

                <div className="flex pb-4">
                    <img
                        src={img.users}
                        className="object-cover  size-10 mr-2"
                    />
                    <p className=" text-sm my-auto text-gray-300">
                        Millions of members use Premium
                    </p>
                </div>

                <Link
                    to={"/subscription"}
                    className="py-2 px-5 bg-yellow-200 text-black font-semibold rounded-3xl "
                >
                    Try Premium for free
                </Link>

                <p className="text-sm text-gray-300 pt-4">
                    1-month free trial. We'll send you a reminder 7 days before
                    your trial ends.
                </p>
            </div>
        </div>
    );
};

export const LongAds = () => {
    return (
        <div className="">
            <img
                src={img.longads2}
                className="object-cover  rounded-2xl mb-5 h-[500px]"
            />
        </div>
    );
};

export const MediumAds = () => {
    return (
        <div className="">
            <img
                src={img.mediumads}
                className="object-cover  rounded-2xl mb-5 h-[400px]"
            />
        </div>
    );
};

export const SubscriptionShortAds = () => {
    return (
        <div className=" w-full bg-white shadow-custom rounded-xl">
            <div className="flex p-3 pb-4 space-x-1">
                <div>
                    <img src={img.rounduser} className=" w-16 h-11" />
                </div>
                <div className=" text-black">
                    <p className="font-medium text-base">
                        See the full list of jobs where you'd be a top applicant
                    </p>

                    <div className="flex pb-2">
                        <img src={img.users} className=" size-8 mr-1" />
                        <p className=" text-xs my-auto text-gray-700">
                            Millions of members use Premium
                        </p>
                    </div>

                    <Link
                        to={"/subscription"}
                        className="py-2 px-5 bg-amber-300 text-black font-semibold rounded-3xl"
                    >
                        Try Premium for $0
                    </Link>
                </div>
            </div>
        </div>
    );
};
