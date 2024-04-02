import React from "react";
import SubscriptionPlan from "../components/subscriptionPlan/SubscriptionPlan";
import { img } from "../components/img";

const Subscription = () => {
    return (
        <main className="inner xs2:mx-5 sm:mx-9 lg:mx-28 xl:mx-36 my-7 ">
            <div className=" shadow-custom rounded-md p-5 ">
                <div className=" text-center my-4">
                    <h1 className="xs2:text-xl md:text-2xl  font-bold font-Roboto-Slab pb-1">
                        Subscription Plan
                    </h1>
                    <p className="xs2:text-sm text-base text-gray-500">
                        Choose the best plan for you
                    </p>
                </div>
                <div className="sm:flex sm:flex-wrap sm:space-x-2 md:justify-around xs2:space-y-3 xs2:mx-4">
                    <SubscriptionPlan
                        planLogo={img.basic}
                        plan={"Normal User"}
                        info1={"Ads will be display in an appropriate section"}
                        info2={"Limited access to the content of the job post"}
                        info3={"Ability to save only 3 job posts"}
                        info4={"Can communicate with other users"}
                        price={"Free"}
                    />

                    <SubscriptionPlan
                        planLogo={img.standard}
                        plan={"Job Seeker"}
                        info1={
                            "Move up to top as a Featured applicant when recruiter search"
                        }
                        info2={
                            "Access to all job posts with detail salary Information"
                        }
                        info3={"Ability to save unlimited job posts"}
                        info4={
                            "Will be notified whenever there is a new job post"
                        }
                        price={"9.99$"}
                    />

                    <SubscriptionPlan
                        planLogo={img.premium}
                        plan={"Recruiter"}
                        info1={"Ability to create job post"}
                        info2={"Ability to view expanded profile"}
                        info3={"Ability to save unlimited candidates"}
                        info4={
                            "Alert for new candidates who meet determined criteria"
                        }
                        price={"29.99 $"}
                    />
                </div>
            </div>
        </main>
    );
};

export default Subscription;
