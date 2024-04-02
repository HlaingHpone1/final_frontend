import { React, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { db } from "../../firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { Loading } from "../loading/Loading";

export const CommentContent = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { comment, setComment } = useState("");

    const updateHandler = (e) => {};

    const deleteHandler = async (id) => {
        setIsLoading(true);
        const dbRef = doc(db, "comments", id);
        await deleteDoc(dbRef);
        setIsLoading(false);
    };

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
                            type="text"
                            value={data.comment}
                            onChange={updateHandler}
                        />
                    </div>
                    {/* <input type="text" className="break-all">
                        {data.comment}
                    </input> */}
                </div>
                <div className="flex justify-end me-5 space-x-5">
                    <Link className="block text-xs">Update</Link>
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
