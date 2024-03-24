import React, { useState, useEffect } from "react";
import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import Profile from "../components/profile/Profile";
import Post from "../components/post/Post";
import CreatePost from "../components/createPost/CreatePost";
import FilterPost from "../components/filterPost/FilterPost";
import Suggestion from "../components/suggestion/Suggestion";
// import { posts } from "../components/demo";
import { useGetPostPagination } from "../components/Store";
import Loading from "../components/loading/Loading";

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const {
        isLoading,
        error,
        errorMessage,
        errorCode,
        postsAllData,
        success,
        apiCall,
    } = useGetPostPagination();

    useEffect(() => {
        const fetchPosts = async () => {
            const result = await apiCall(page);
            // setData((prev) => {
            //     const newData = [...result.content];
            //     return [...new Set(newData.map(JSON.stringify))].map(
            //         JSON.parse
            //     );
            // });

            console.warn(result.content);

            setData((prev) => [...prev, ...result.content]);
            setTotalPages(result.totalPages);
        };

        fetchPosts();
    }, [page]);

    console.log(data);

    const scrollHandler = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setPage((prev) => {
                if (prev <= totalPages) {
                    return prev + 1;
                } else {
                    return prev;
                }
            });
        }
    };

    console.log(page);
    console.log(totalPages);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
    }, []);

    return (
        <>
            <Loading isLoading={isLoading} />
            {error && errorMessage && (
                <p className="text-red-500 text-xl font-semibold text-center">
                    {errorMessage}
                </p>
            )}
            <main className="bg-secondary ">
                <div className=" max-w-1240px  mx-auto font-Roboto">
                    <div className="grid grid-cols-home1 md:grid-cols-home2 lg:grid-cols-home3 justify-between  pt-6 gap-x-6 px-10 xl:px-0">
                        <section className="col-span-2 md:col-span-1 mb-5 md:m-0">
                            <Profile />
                        </section>
                        <section className="col-span-2 ">
                            <CreatePost />
                            <FilterPost />
                            <div>
                                {success && data && (
                                    <div className="">
                                        {data.map((item, index) => (
                                            <Post key={index} data={item} />
                                        ))}
                                    </div>
                                )}
                            </div>
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
