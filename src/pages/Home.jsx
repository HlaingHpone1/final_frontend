import React, { useState, useEffect } from "react";

import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import UserProfile from "../components/userProfile/UserProfile";
import Post from "../components/post/Post";
import CreatePost from "../components/createPost/CreatePost";
import FilterPost from "../components/filterPost/FilterPost";
import Suggestion from "../components/suggestion/Suggestion";

import { useGetPostPagination } from "../components/Store";
import { PostLoading } from "../components/loading/Loading";

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [postLoad, setPostLoad] = useState(true);

<<<<<<< HEAD
    const {userData} = useLocalSessionStore();
=======
    const { id } = useParams();
    const { userData: localUser } = useLocalSessionStore();
>>>>>>> 2fe06b3018e33656eb22b515b71cb70a714295f9

    const { error, errorMessage, errorCode, postsAllData, success, apiCall } =
        useGetPostPagination();

    useEffect(() => {
        const controller = new AbortController();

        const fetchPosts = async () => {
            if (page <= totalPages) {
                const result = await apiCall(page, controller.signal);
                setData((prev) => [...prev, ...result.content]);
                setTotalPages(result.totalPages);
            } else {
                console.log("No more data");
            }

            setPostLoad(false);
        };

        fetchPosts();

        return () => controller.abort();
    }, [page, apiCall]);

    const scrollHandler = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            if (page < totalPages - 1) {
                setPostLoad(true);

                setPage((prev) => prev + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, [page, totalPages]);

    // console.log("Github error",data);
    // console.log(data[0]);

    return (
        <>
            {error && errorMessage && (
                <p className="text-red-500 text-xl font-semibold text-center">
                    {errorMessage}
                </p>
            )}
            <main className="">
                <div className=" max-w-1240px  mx-auto font-Roboto">
                    <div className="grid grid-cols-home1 md:grid-cols-home2 lg:grid-cols-home3 justify-between  pt-6 gap-x-6 px-10 xl:px-0">
                        <section className="col-span-2 md:col-span-1 mb-5 md:m-0">
                            {<UserProfile show={true} data={localUser} />}
                        </section>
                        <section className="col-span-2 ">
                            <CreatePost />
                            <FilterPost />
                            <div>
                                {success && data && (
                                    <div className="">
                                        {data.length > 0 ? (
                                            data.map((item, index) => (
                                                <Post key={index} data={item} />
                                            ))
                                        ) : (
                                            <p>No posts available yet.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                            {/* <PostLoading isLoading={postLoad} /> */}
                            {postLoad && <PostLoading isLoading={postLoad} />}
                        </section>

                        <section className="col-span-1 hidden lg:block">
                            <Suggestion />
                            <Ads />
                            <Footer />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
