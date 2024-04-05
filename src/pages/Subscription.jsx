import React from "react";
import SubscriptionPlan from "../components/subscriptionPlan/SubscriptionPlan";
import { SubscriptionPlans } from "../components/demo";

const Subscription = () => {
    return (
        <main className="inner xs2:mx-5 sm:mx-9 lg:mx-28 xl:mx-36 my-7 ">
            <div className="bg-white shadow-custom rounded-md p-5 ">
                <div className=" text-center my-4">
                    <h1 className="xs2:text-xl md:text-2xl  font-bold font-Roboto-Slab pb-1">
                        Subscription Plan
                    </h1>
                    <p className="xs2:text-sm text-base text-gray-500">
                        Choose the best plan for you
                    </p>
                </div>
                <div className="sm:flex sm:flex-wrap sm:space-x-2 md:justify-around xs2:space-y-3 xs2:mx-4">
                    {SubscriptionPlans.map((plan, index) => (
                        <SubscriptionPlan key={index} data={plan} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Subscription;
