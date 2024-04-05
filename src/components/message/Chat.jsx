import React from "react";
import ChatContent from "./ChatContent";
import { useGetAllUsers, useLocalSessionStore } from "../Store";

const Chat = ({ data, personData }) => {
    const { userData } = useLocalSessionStore();
    return (
        <div className={`${userData.data.id === data.senderId ? 'chat-right flex-row-reverse' : 'chat-left flex-row'} chat flex items-center mb-3`}>
            <div>
                <img
                    className="block rounded-full size-12"
                    // src= "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                    src={userData.data.id === data.senderId ? userData.data.profileImg : (personData && personData.profileImg)}
                    alt=""
                />
            </div>
            <div className="mx-4">
                <ChatContent data={data} personData={personData}/>
            </div>
        </div>
    );
};

export default Chat;
