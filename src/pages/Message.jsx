import { React, useContext, useEffect, useState } from "react";

import { ShortAds } from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
import UserChat from "../components/message/UserChat";
import Chat from "../components/message/Chat";

import { images } from "../components/images";

import { useGetAllUsers, useLocalSessionStore } from "../components/Store";
import { RoleContext } from "../components/RoleContext";

import {
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    serverTimestamp,
    query,
    limit,
    orderBy,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
// import { Loading } from "../loading/Loading";
import { v4 } from "uuid";

const Message = () => {
    const { isRECRUITER, isJOBSEEKER } = useContext(RoleContext);
    const { userData } = useLocalSessionStore();
    const [message, setMessage] = useState("");
    const [chatData, setChatData] = useState([]);
    const [users, setUsers] = useState([]);
    // const [ personData, setPersonData ] = useState(
    //     {
    //         userName: "",
    //         profileImg: ""
    //     }
    // );
    const [recipientData, setRecipientData] = useState({
        id: "",
        userName: "",
        profileImg: "",
        email: "",
    });
    const [messageRoute, setMessageRoute] = useState(
        userData.data.id + "AND" + recipientData.id
    );

    const newMessage = {
        id: v4(),
        recipientId: recipientData.id,
        senderId: userData.data.id,
        content: message,
        timeStamp: serverTimestamp(),
    };

    const chatCollection = collection(db, messageRoute);

    async function checkCollectionExists(collectionId) {
        const collectionRef = collection(db, collectionId);
        const firstDoc = query(collectionRef, limit(1));
        const snapshot = await getDocs(firstDoc);

        return !snapshot.empty;
    }

    useEffect(() => {
        const checkAndSetMessageRoute = async () => {
            if (recipientData.id) {
                const id1 = userData.data.id + "AND" + recipientData.id;
                const id2 = recipientData.id + "AND" + userData.data.id;

                const exists1 = await checkCollectionExists(id1);
                if (exists1) {
                    setMessageRoute(id1);
                } else {
                    const exists2 = await checkCollectionExists(id2);
                    if (exists2) {
                        setMessageRoute(id2);
                    } else {
                        setMessageRoute(id1);
                    }
                }
            }
        };

        checkAndSetMessageRoute();
    }, [recipientData.id, userData.data.id]);

    async function addMessageToCollection(messageInput) {
        const docRef = await addDoc(chatCollection, newMessage);
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(() => {
        async function getCollectionData() {
            const q = query(chatCollection, orderBy("timeStamp"));
            const querySnapshot = await getDocs(q);
            setChatData(querySnapshot.docs.map((doc) => doc.data()));
        }
        getCollectionData();
    }, [chatCollection, recipientData.id]); // Run getCollectionData whenever chatCollection changes

    const userCollection = collection(db, "users");

    async function getUsersCollectionData() {
        const querySnapshot = await getDocs(userCollection);
        const users = querySnapshot.docs.map((doc) => doc.data());
        setUsers(users);
    }

    useEffect(() => {
        getUsersCollectionData();
        console.log(messageRoute);
    }, []);

    const messageHandler = (e) => {
        if (e.key === "Enter") {
            addMessageToCollection(newMessage);
            console.log("Message sent to" + messageRoute);
            e.target.value = "";
        }
    };

    return (
        <div className="">
            <div className="inner max-w-1240px mx-auto px-5 xl:px-0 pt-8">
                <div className="grid grid-cols-2 bg-[#222831] text-white  shadow-custom rounded-lg overflow-hidden">
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 h-[80vh]">
                            <div className="col-span-1 border-r border-gray overflow-y-scroll scroll-smooth">
                                <div className="title px-4 py-2 text-2xl font-bold font-Roboto-Slab"></div>
                                {users.map((user, index) => (
                                    <UserChat
                                        onUserClick={setRecipientData}
                                        key={index}
                                        data={user}
                                    />
                                ))}
                            </div>
                            <div className="col-span-2 flex justify-between flex-col relative overflow-y-scroll scroll-smooth hide-scrollbar">
                                <div className="">
                                    <div className="name p-4 text-xl font-bold font-Roboto-Slab border-b border-gray mb-5">
                                        {recipientData.userName}
                                    </div>

                                    <div className="chat-history px-4 h-full">
                                        {chatData.map((document, index) => (
                                            <div
                                                key={index}
                                                className={
                                                    userData.data.id ===
                                                    document.senderId
                                                        ? "chat-right"
                                                        : "chat-left"
                                                }
                                            >
                                                <Chat
                                                    key={index}
                                                    data={document}
                                                    personData={recipientData}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="message-box flex items-center px-4 bottom-0 bg-[#222831] sticky py-5">
                                    <input
                                        type="text"
                                        name="comment"
                                        onKeyDown={messageHandler}
                                        onInput={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        // value={input.comment}
                                        className="rounded-full border-none px-4 py-3 text-black bg-gray-300 focus:outline-none w-full "
                                        placeholder="Write a comment..."
                                    />
                                    <button
                                        type="submit"
                                        className="ml-2 rounded-3xl p-3 bg-white"
                                    >
                                        <img
                                            src={images.sent1}
                                            className="size-6"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-span-1 ">
                        {!(isJOBSEEKER || isRECRUITER) && <ShortAds />}

                        <Footer />
                    </div> */}
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
