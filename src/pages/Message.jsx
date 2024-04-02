import React from "react";

import { ShortAds } from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import UserChat from "../components/message/UserChat";
import Chat from "../components/message/Chat";

import { images } from "../components/images";

const Message = () => {
    return (
        <div className="bg-background h-screen">
            <div className="inner max-w-1240px mx-auto px-5 xl:px-0 pt-8">
                <div className="grid grid-cols-4 bg-white  shadow-custom rounded-lg overflow-hidden">
                    <div className="col-span-3 ">
                        <div className="grid grid-cols-5 h-[80vh] overflow-y-scroll scroll-smooth">
                            <div className="col-span-2 border-r border-black">
                                <div className="title px-4 py-2 text-2xl font-bold font-Roboto-Slab">
                                    Messaging
                                </div>
                                <UserChat />
                            </div>
                            <div className="col-span-3 flex justify-between flex-col relative">
                                <div className="">
                                    <div className="name p-4 text-xl font-bold font-Roboto-Slab border-b border-black mb-5">
                                        Hlaing Hpone
                                    </div>

                                    <div className="chat-history px-4  h-full">
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                        <Chat />
                                    </div>
                                </div>
                                <div className="message-box flex items-center px-4 sticky bottom-0 bg-white py-2">
                                    <input
                                        type="text"
                                        name="comment"
                                        // onChange={inputHandler}
                                        // value={input.comment}
                                        className="rounded-full border-none px-4 py-3 bg-gray-300 focus:outline-none w-full "
                                        placeholder="Write a comment..."
                                    />
                                    <button type="submit" className="ml-2">
                                        <img
                                            src={images.sent1}
                                            className="size-6"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 ">
                        <ShortAds />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;

{
    /* <div className="user-info px-4 py-2 flex space-x-3 ">
                                    <img
                                        className="block rounded-full size-20"
                                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt=""
                                    />
                                    <div className="content">
                                        <div className="title text-xl font-semibold">
                                            Hlaing Hpone
                                        </div>
                                        <div className="text-sm">
                                            Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                </div> */
}
