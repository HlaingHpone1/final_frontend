import React from "react";
import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import Profile from "../components/profile/Profile";
import Post from "../components/post/Post";
import CreatePost from "../components/createPost/CreatePost";
import FilterPost from "../components/filterPost/FilterPost";
import Suggestion from "../components/suggestion/Suggestion";
import { posts } from "../components/demo";

const Home = () => {
    return (
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
                            {posts.map((item, index) => (
                                <Post key={index} data={item} /> // Assuming Post component accepts a prop named 'data'
                            ))}
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
    );
};

export default Home;
