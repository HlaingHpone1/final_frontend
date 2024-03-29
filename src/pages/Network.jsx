import React, { useState, useEffect } from "react";

import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import ManageNw from "../components/network/ManageNw";
import UserCard from "../components/userCard/UserCard";
import Group from "../components/group/Group";

import { useGetAllUsers } from "../components/Store";
import { NetworkLoading } from "../components/loading/Loading";

const Network = () => {
    const {
        isLoading,
        error,
        errorMessage,
        errorCode,
        success,
        allUsersData,
        apiCall,
    } = useGetAllUsers();

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const addPageHandler = () => {
        if (page < totalPages - 1) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const controller = new AbortController();

        const fetchUsers = async () => {
            setLoading(true);
            const result = await apiCall(page, controller.signal);
            setData((prev) => [...prev, ...result.content]);
            setTotalPages(result.totalPages);
            setLoading(false);
        };

        fetchUsers();

        return () => controller.abort();
    }, [page]);

    return (
        <main className="bg-background">
            <div className="max-w-1240px mx-auto">
                <div className="grid-cols-1 md:grid-cols-4 grid pt-6 gap-6 px-5 xl:px-0">
                    <section className="col-span-1 md:col-span-2 lg:col-span-1 bg-white shadow-custom rounded-lg text-black h-fit">
                        <ManageNw />
                        <div className=" pt-28 pb-7 hidden md:block">
                            <Ads />
                            <Footer />
                        </div>
                    </section>
                    <section className="col-span-1 md:col-span-2 lg:col-span-3 shadow-custom bg-white rounded-lg">
                        <div className=" p-5">
                            <div className="mb-14">
                                <div className="flex justify-between mb-3">
                                    <p className=" text-2xl font-Roboto-Slab">
                                        People You May Know
                                    </p>
                                    {page < totalPages - 1 && (
                                        <button
                                            onClick={addPageHandler}
                                            className=" text-xl"
                                        >
                                            See all
                                        </button>
                                    )}
                                </div>
                                <div className=" grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-5 z-10">
                                    {data &&
                                        data.map((item, index) => (
                                            <UserCard key={index} data={item} />
                                        ))}
                                    {loading && (
                                        <NetworkLoading isLoading={loading} />
                                    )}
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
                                    <Group />
                                    <Group />
                                    <Group />
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
