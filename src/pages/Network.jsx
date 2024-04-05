import React, { useState, useEffect, useContext } from "react";

import { ShortAds } from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import ManageNw from "../components/network/ManageNw";
import UserCard from "../components/userCard/UserCard";
import Group from "../components/group/Group";

import { useGetAllUsers, useLocalSessionStore } from "../components/Store";
import { NetworkLoading } from "../components/loading/Loading";

import { RoleContext } from "../components/RoleContext";
import axios from "axios";

const Network = () => {
    const { isRECRUITER, isJOBSEEKER } = useContext(RoleContext);

    const {
        isLoading,
        error,
        errorMessage,
        errorCode,
        success,
        allUsersData,
        apiCall,
    } = useGetAllUsers();

    const { userData } = useLocalSessionStore();

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [followStatuses, setFollowStatuses] = useState([]);

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

    function checkFollowStatus(following, follower) {
        return axios.get(`http://localhost:8080/follower/${following}/hasFollowedBack/${follower}`)
            .then(response => response.data)
            .catch(error => {
                console.error("Error on check follow status:", error);
            });
    }

    // console.log(userData.data.id)
    


    useEffect(() => {
        Promise.all(
            data
                .filter((item) => item.id !== userData.data.id)
                .slice(0, 4)
                .map((item) => checkFollowStatus(userData.data.id, item.id))
        )
            .then((statuses) => setFollowStatuses(statuses))
            .catch((error) => {
                console.error(error);
                setFollowStatuses(data.slice(0, 4).map(() => false));
            });
    }, [data, userData]);

    return (
        <main className="bg-background">
            <div className="max-w-1240px mx-auto">
                <div className="grid-cols-1 md:grid-cols-4 grid pt-6 gap-6 px-5 xl:px-0">
                    <section className="col-span-1 md:col-span-2 lg:col-span-1 bg-white shadow-custom rounded-lg text-black h-fit">
                        <ManageNw />
                        <div className=" pt-28 pb-7 hidden md:block">
                            {!(isJOBSEEKER || isRECRUITER) && <ShortAds />}

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
                                        data
                                            .filter(
                                                (item) =>
                                                    item.id !== userData.data.id
                                            )
                                            .map((item, index) => (
                                                <UserCard
                                                    key={index}
                                                    data={item} 
                                                    followStatus={followStatuses[index]}
                                                />
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
