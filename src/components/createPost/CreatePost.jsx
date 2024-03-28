import React, { useState } from "react";

import CreatePostModal from "../createPostModel/CreatePostModel";
import { useLocalSessionStore } from "../Store";

const CreatePost = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { userData } = useLocalSessionStore();

    return (
        <>
            <div className="bg-white rounded-2xl shadow-custom">
                <div className="inner flex py-5 justify-between items-center space-x-5 px-4">
                    <img
                        src={userData.data.profileImg}
                        className="rounded-full size-14 aspect-square object-cover border-2 border-black"
                    />
                    <div className="w-full ">
                        <input
                            className="border border-black rounded-3xl w-full my-auto px-5 py-4 text-sm placeholder:text-black font-Roboto-Slab"
                            onClick={() => setModalIsOpen(true)}
                            placeholder="Create a post..."
                            readOnly
                        />
                        <CreatePostModal
                            modalIsOpen={modalIsOpen}
                            setModalIsOpen={setModalIsOpen}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
