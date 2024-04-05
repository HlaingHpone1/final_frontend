import { React, useState, useRef, useEffect } from "react";

import { useCreatePost, useLocalSessionStore, useUpdatePost } from "../Store";
import { images } from "../images";
import { storage } from "../../firebaseConfig";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Loading } from "../loading/Loading";

import Modal from "react-modal";

Modal.setAppElement("#root");

const CreatePostModel = ({ modalIsOpen, setModalIsOpen, data }) => {
    const { apiCall: updatePost } = useUpdatePost();

    const [inputValue, setInputValue] = useState(``);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();
    const [imgUrl, setImgUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data) {
            setInputValue(data.caption);
            setPreview(data.uploadPhoto);
            setImgUrl(data.uploadPhoto);
        }
    }, [data]);

    const { apiCall, success } = useCreatePost();

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
            // setFile(e.target.files[0]);
            // setFileName(e.target.files[0]["name"]);

            let selected = e.target.files[0];
            setFile(selected);

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

    const uploadImage = () => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            const img = ref(storage, `images/${v4()}`);
            uploadBytes(img, file).then((data) => {
                getDownloadURL(data.ref).then((url) => {
                    setImgUrl(url);
                    setLoading(false);
                    resolve(url);
                });
            });
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = await uploadImage();

        const postData = {
            caption: inputValue,
            userId: userData.data.id,
        };

        if (file) {
            postData.uploadPhoto = imageUrl;
        }

        console.log(data);

        if (data == undefined) {
            await apiCall(postData);
        }
        {
            const updatePostData = {
                postId: data.id,
                caption: inputValue,
            };

            if (file) {
                updatePostData.uploadPhoto = imageUrl;
            }

            await updatePost(updatePostData);
            setModalIsOpen(false);
            window.location.reload();
        }
    };

    if (success) {
        window.location.reload();
    }

    return (
        <>
            {/* <Loading isLoading={loading} /> */}
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={customStyles}
                    contentLabel="Create Post Modal"
                >
                    <div>
                        <button
                            className="absolute top-5 right-5 bg-slate-300 p-2 rounded-full"
                            onClick={() => {
                                setModalIsOpen(false);
                                setInputValue("");
                            }}
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
                                    style={{
                                        display: "none",
                                    }}
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
        </>
    );
};

export default CreatePostModel;
