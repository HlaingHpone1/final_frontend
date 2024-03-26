import { React, useState, useEffect } from "react";

import ProfilePostContent from "../profilePostContent/ProfilePostContent";
import { useGetUser } from "../Store";

const ProfilePosts = ({ id }) => {
    // const [data, setData] = useState([]);
    // const [page, setPage] = useState(0);
    // const [totalPages, setTotalPages] = useState(0);
    // // const [postLoad, setPostLoad] = useState(true);

    // const { isLoading, error, errorMessage, errorCode, success, apiCall } =
    //     useGetUser();

    // useEffect(() => {
    //     const controller = new AbortController();

    //     const fetchPosts = async () => {
    //         if (page <= totalPages) {
    //             const result = await apiCall(id, page, controller.signal);
    //             setData((prev) => [...prev, ...result.content]);
    //             setTotalPages(result.totalPages);
    //         } else {
    //             console.log("No more data");
    //         }

    //         // setPostLoad(false);
    //     };

    //     fetchPosts();

    //     return () => controller.abort();
    // }, [page, apiCall]);

    // console.log("====================================");
    // console.log(data);
    // console.log("====================================");

    return (
        <section className="py-2">
            <div className="inner max-w-1240px mx-auto px-10 xl:p-0">
                <div className="bg-white shadow-custom rounded-lg overflow-hidden pt-4 ">
                    <div className="border-b border-black px-9">
                        <div className="title text-xl font-semibold font-Roboto-Slab mb-3">
                            Activity
                        </div>
                        <div className="">
                            <ProfilePostContent />
                            <ProfilePostContent />
                        </div>
                    </div>
                    <button className="block w-full text-xl py-4 bg-white transition-colors duration-200 ease-linear  hover:bg-slate-400 font-semibold text-center">
                        See All Activity
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfilePosts;
