import React from "react";
import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import ManageNw from "../components/network/ManageNw";
import PeopleMayKnow from "../components/suggestion/PeopleMayKnow";
import InterestedGroup from "../components/suggestion/InterestedGroup";

const Network = () => {
    return (
        <main className="bg-background">
            <div className="max-w-1240px mx-auto">
                <div className="grid-cols-1 md:grid-cols-4 grid pt-6 gap-6 drop-shadow-lg px-10 xl:px-0">
                    <section className="col-span-1 md:col-span-2 lg:col-span-1 bg-white rounded-lg text-black h-fit">
                        <ManageNw />
                        <div className=" pt-28 pb-7">
                            <Ads />
                            <Footer />
                        </div>
                    </section>
                    <section className="col-span-1 md:col-span-2 lg:col-span-3  bg-white rounded-lg">
                        <div className=" p-5">
                            <div className="mb-14">
                                <div className="flex justify-between mb-3">
                                    <p className=" text-2xl font-Roboto-Slab">
                                        People You May Know
                                    </p>
                                    <a href="" className=" text-xl">
                                        See all
                                    </a>
                                </div>
                                <div className=" grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-5 ">
                                    <PeopleMayKnow />
                                    <PeopleMayKnow />
                                    <PeopleMayKnow />
                                    <PeopleMayKnow />
                                    <PeopleMayKnow />
                                    <PeopleMayKnow />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-3">
                                    <p className=" text-2xl font-Roboto-Slab">
                                        Groups you might be interested in
                                    </p>
                                    <a href="" className=" text-xl">
                                        See all
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-5 ">
                                    <InterestedGroup />
                                    <InterestedGroup />
                                    <InterestedGroup />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Network;
