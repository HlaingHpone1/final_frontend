import { React, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { db } from "../../firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Loading } from "../loading/Loading";

export const CommentContent = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [comment, setComment] = useState(data.comment);
    const [update, setUpdate] = useState(false);

    // console.log(data);

    const updateHandler = async (id) => {
        console.log(id);

        setIsLoading(true);

        const updateRef = doc(db, "comments", id);

        try {
            await updateDoc(updateRef, {
                comment: comment,
            });
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }

        // const dbRef = doc(db, "comments", id);
        // await updateDoc(dbRef, {
        //     comment: comment,
        // });
        // setIsLoading(false);
    };

    const inputUpdateHandler = (e) => {
        setComment(e.target.value);
    };

    const deleteHandler = async (id) => {
        setIsLoading(true);
        const dbRef = doc(db, "comments", id);
        await deleteDoc(dbRef);
        setIsLoading(false);
    };

    // console.log(data);

    return (
        <div className="flex space-x-2 px-5">
            <Loading isLoading={isLoading} />
            <img
                src={data.profileImg}
                alt="this is profile image"
                className="profile-img size-10 rounded-full"
            />
            <div className="w-full mb-3">
                <div className="bg-slate-300  rounded-md  p-2">
                    <div className="flex items-center space-x-3 mb-2">
                        <p className="capitalize font-bold text-sm">
                            {data.userName}
                        </p>
                        <p className="text-xs text-slate-500 ">
                            {moment(data.commentTime).fromNow()}
                        </p>
                    </div>
                    <div className="input">
                        <input
                            className={`bg-transparent break-all focus:outline-none w-full ${
                                update
                                    ? "border border-black font-black"
                                    : "border-none"
                            }`}
                            type="text"
                            disabled={!update}
                            value={comment}
                            onChange={inputUpdateHandler}
                        />
                    </div>
                </div>
                <div className="flex justify-end me-5 space-x-5">
                    <Link
                        className="block text-xs"
                        onClick={() => {
                            if (update) {
                                updateHandler(data.id);
                            }
                            setUpdate(!update);
                        }}
                    >
                        {update ? "Save" : "Edit"}
                    </Link>
                    <Link
                        className="block text-xs"
                        onClick={() => deleteHandler(data.id)}
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    );
};
