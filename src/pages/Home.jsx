import React from "react";
import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import Profile from "../components/profile/Profile";
import Post from "../components/post/Post";
import SharePost from "../components/sharePost/SharePost";
import images from "../components/image/Image";

const Home = () => {
    return (
        <main className="bg-[#171B24] ">
            <div className=" max-w-1240px grid grid-cols-[248px_minmax(608px,_1fr)_335px] mx-auto font-Roboto pt-6 gap-x-6">
                <Profile />

                <section>
                    <SharePost />
                    <Post />
                </section>

                <section>
                    <Ads />
                    <Footer />
                </section>
            </div>
        </main>
    );
};

export default Home;
