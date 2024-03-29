import React from "react";

const ChatContent = () => {
    return (
        <div className="chat-content text-sm  ">
            <div className="flex space-x-3 mb-2">
                <p className="chat-username  font-semibold">Hlaing</p>
                <p className="chat-time">10:00 AM</p>
            </div>
            <div className="chat">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default ChatContent;
