import React, { useState, useRef } from "react";
import { images } from "../images";
import Modal from "react-modal";
import { useCreatePost, useLocalSessionStore } from "../Store";
import Loading from "../loading/Loading";

Modal.setAppElement("#root");

const CreatePost = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(``);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

    const { apiCall, isLoading, error, errorMessage, success } =
        useCreatePost();

    const { userData } = useLocalSessionStore();

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "min(90%, 700px)",
            height: "70%",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
        },
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0]["name"]);
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = (e) => {
                setPreview(e.target.result);
            };
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);
        setFile(null);
        fileInputRef.current.value = null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            caption: inputValue,
            uploadPhoto: fileName,
            userId: userData.data.id,
        };
        await apiCall(postData);
    };

    if (success) {
        window.location.reload();
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            {success && (
                <p className="text-sky-500 text-lg font-bold text-center mb-5">
                    Your Acc is created Successful! Plz Log in again
                </p>
            )}
            {error && errorMessage && (
                <p className="text-red-500 text-xl font-semibold text-center">
                    {errorMessage}
                </p>
            )}
            <div className="bg-white rounded-2xl shadow-custom">
                <div className="inner flex py-5 justify-between items-center space-x-5 px-4">
                    <img
                        src={images.profile}
                        className="rounded-full size-14 aspect-square object-cover border-2 border-black"
                    />
                    <div className="w-full ">
                        <input
                            className="border border-black rounded-3xl w-full my-auto px-5 py-4 text-sm placeholder:text-black font-Roboto-Slab"
                            onClick={() => setModalIsOpen(true)}
                            placeholder="Create a post..."
                            readOnly
                        />
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={customStyles}
                            contentLabel="Create Post Modal"
                        >
                            <div>
                                <button
                                    className="absolute top-5 right-5 bg-slate-300 p-2 rounded-full"
                                    onClick={() => setModalIsOpen(false)}
                                >
                                    <img
                                        className="block size-6"
                                        src={images.cross}
                                        alt="this is close icon"
                                    />
                                </button>
                                <h2 className="text-start md:text-center text-4xl font-bold mb-3 font-Roboto-Slab">
                                    Create Post
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-box mb-5">
                                        <textarea
                                            className="border border-black rounded-xl h-52 block w-full p-3"
                                            type="text"
                                            name="caption"
                                            placeholder="What's on your mind?"
                                            value={inputValue}
                                            onChange={(e) =>
                                                setInputValue(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="input-box-img">
                                        {!preview && (
                                            <abbr title="Click to upload a photo">
                                                <img
                                                    src={images.imageIcon}
                                                    onClick={triggerFileInput}
                                                    className="block size-10 cursor-pointer"
                                                    alt="upload icon"
                                                />
                                            </abbr>
                                        )}

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            style={{ display: "none" }}
                                            required
                                        />

                                        {preview && (
                                            <div className="relative">
                                                <img
                                                    className="absolute size-8 right-5 top-2 bg-slate-300 p-1 rounded-full"
                                                    src={images.cross}
                                                    onClick={handleRemoveImage}
                                                    alt="remove icon"
                                                />
                                                <img
                                                    className="block w-full aspect-auto rounded-lg"
                                                    src={preview}
                                                    alt="preview"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        className="bg-primary text-white py-3 px-5 rounded-lg mt-3"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
