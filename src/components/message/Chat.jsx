import React from "react";
import ChatContent from "./ChatContent";

const Chat = () => {
    return (
        <div className="chat flex space-x-3 items-center mb-3">
            <img
                className="block rounded-full size-12"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
            />
            <div className="">
                <ChatContent />
            </div>
        </div>
    );
};

export default Chat;
