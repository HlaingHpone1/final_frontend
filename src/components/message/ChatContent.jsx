import { React, useState, useEffect } from "react";
import { useGetAllUsers, useLocalSessionStore } from "../Store";

const ChatContent = ({ data, personData }) => {
    const [timeStamp, setTimeStamp] = useState("");
    const { userData } = useLocalSessionStore();

    // if (data && data.timeStamp) {
    //     const date = new Date(data.timestamp.seconds * 1000);
    //     setTimeStamp(date);
    // }

    useEffect(() => {
        if (data && data.timestamp) {
            const date = new Date(data.timestamp.seconds * 1000);
            setTimeStamp(date.toString());
        }
    }, [data]);

    return (
        <div className="chat-content text-sm  ">
            <div className="flex w-full space-x-3 mb-2">
                <p className="chat-username w-[200px] font-semibold">
                    {userData.data.id === data.senderId
                        ? userData.data.userName
                        : personData && personData.userName}
                </p>
                {/* <p className="chat-time">{ data.timeStamp.toDate().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }) + " " + data.timeStamp.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) }</p> */}
            </div>
            <div
                className={`chat w-[200px] break-all p-3 rounded-lg ${
                    userData.data.id === data.senderId
                        ? "bg-primary"
                        : "bg-[#393e46]"
                }`}
            >
                <p>{data && data.content}</p>
            </div>
        </div>
    );
};

export default ChatContent;
{
    /* <div className={`chat w-[200px] break-all p-3 rounded-lg ${userData.data.id === data.senderId ? 'bg-[#654CEB]' : 'bg-[#303030]'}`}>
    <p>{data && data.content}</p>
</div> */
}
