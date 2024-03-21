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
            <Profile/>

            <section>
                <SharePost/>
                <div className="flex justify-between">
                <div className="border border-[#D1D1D1] w-[489px] my-5"></div>
                <p className="text-[#929292] text-xs my-auto">Sort by:</p>
                    <div className="flex">
                        <p className="text-white text-xs my-auto">Recent</p>
                        <img src={images.downArw} className="size-3 my-auto" />
                    </div>
                </div>
                
                <Post/>
            </section>
           
            <section>
                <Ads/>
                <Footer/>
            </section>
        </div>
    </main>
    )

};

export default Home;
