import React from "react";
import { img } from "../img";

const SubscriptionPlan = ({
    planLogo,
    plan,
    info1,
    info2,
    info3,
    info4,
    price,
}) => {
    return (
        <div className="xs2:w-56 xs:w-72 bg-sky-50 hover:ring ring-sky-200 rounded-md h-fit">
            <div className="xs2:p-2 xs:p-4">
                <div className="flex justify-center pb-4">
                    <img src={planLogo} className=" size-7" />
                    <p className="font-bold font-Roboto-Slab xs2:text-lg xs:text-xl">
                        {plan}
                    </p>
                </div>
                <div className=" space-y-2 text-base">
                    <div className="flex">
                        <img src={img.check} className=" size-6" />
                        <p>{info1}</p>
                    </div>
                    <div className="flex">
                        <img src={img.check} className=" size-6" />
                        <p>{info2}</p>
                    </div>
                    <div className="flex">
                        <img src={img.check} className=" size-6" />
                        <p>{info3}</p>
                    </div>
                    <div className="flex">
                        <img src={img.check} className=" size-6" />
                        <p>{info4}</p>
                    </div>
                </div>

                <p className="text-center font-semibold text-xl py-3">
                    {price}
                </p>
                <button className=" space-x-3 py-2 w-full bg-sky-200 text-black rounded-xl hover:bg-sky-300 transition-all font-medium">
                    <p>Purchase</p>
                </button>
            </div>
        </div>
    );
};

export default SubscriptionPlan;
