import { React, useEffect, useState } from "react";
import { useGetAllUsers, useLocalSessionStore } from "../Store";

import {
    collection,
    doc,
    setDoc,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    serverTimestamp,
    query,
    orderBy
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { v4 } from "uuid";

const UserChat = ({ data, onUserClick }) => {
    const [active, setActive] = useState(false);

    const handleButtonClick = (user) => {
        onUserClick({
            id: data.id,
            userName: data.userName,
            profileImg: data.profileImg,
            email: data.email
        });
        console.log(user.userName)
    };
    
    return (
        <button
            className={`message-users px-4 py-2 flex w-full justify-between hover:bg-[#303030] ${
                active ? "" : ""
            }`}
            onClick={handleButtonClick}
            // onClick={() => setActive(!active)}
        >
            <div className="user-info flex space-x-3">
                <img
                    className="block rounded-full size-16"
                    src={ data.profileImg }
                    alt="This is Photo"
                />
                <div className="content text-start">
                    <div className="name text-xl font-semibold">
                        { data.userName }
                    </div>
                    <div className="message text-sm text-slate-400">
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
            <div className="date">Mar 27</div>
        </button>
    );
};

export default UserChat;
