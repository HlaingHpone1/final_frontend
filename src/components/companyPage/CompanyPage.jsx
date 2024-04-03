import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocalSessionStore } from "../Store";
import { FollowButton, FollowingButton } from "../button/Button";

import { Link } from "react-router-dom";

const CompanyPage = ({ data, followStatus }) => {
    const { userData } = useLocalSessionStore();
    const [follow, setFollow] = useState(followStatus);

    // console.log(data);

    // Your routes here
    // console.log(data.id)
    const unFollowHandler = async () => {
        setFollow(!follow);
        return axios
            .delete(
                `http://localhost:8080/follower/${userData.data.id}/hasUnfollowed/${data.id}`
            )
            .catch((error) => {
                console.error("Error on unfollow:", error);
                // Handle the error
            });
    };

    const followHandler = async () => {
        setFollow(!follow);
        return axios
            .post(`http://localhost:8080/follower`, {
                followingId: userData.data.id,
                followerId: data.id,
            })
            .catch((error) => {
                console.error("Error on unfollow:", error);
                // Handle the error
            });
    };

    return (
        <div className="flex items-start space-x-3 mb-3">
            <div className="img ">
                <img
                    className="size-12 rounded-full"
                    src={data.profileImg}
                    alt="This is Logo"
                />
            </div>
            <div className="text-bloc space-y-1">
                <div className="name">
                    {/* {data.userName} */}
                    <Link to={`/profile/${data.id}`}>{data.userName}</Link>
                </div>

                <div className="">
                    {followStatus || follow ? (
                        <div onClick={unFollowHandler}>
                            <FollowingButton />{" "}
                        </div>
                    ) : (
                        <div onClick={followHandler}>
                            <FollowButton />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;

{
    /* <div className="flex justify-center items-center space-x-2">
                    <div className="type">{data.type}</div>
                    <div className="company-category">{data.category}</div>
                </div> */
}
{
    /* <div className="" onClick={followHandler}>
                    {follow || followStatus ? <FollowingButton /> : <FollowButton />}
                </div> */
}

// const [follow, setFollow] = useState(false);
// const [isFollowing, setIsFollowing] = useState(false);
// const { userData } = useLocalSessionStore();
// const postData = {
//     followingId: userData.data.id,
//     followerId: data.id,
// };

// const followApiUrl = "http://localhost:8080/follower";
// const followHandler = async (e) => {
//     e.preventDefault(e);

//     console.warn(postData);
//     window.location.reload();

//     try {
//         const response = await axios.post(followApiUrl, postData);

//         setFollow(!follow);
//     } catch (error) {
//         console.error("Error on following:", error);
//     }
// };

// const followHandler = async (e) => {
//     e.preventDefault(e);

//     try {
//         let response;
//         if (follow) {
//             response = await axios.delete(`${followApiUrl}/${postData.id}`);
//         } else {
//             response = await axios.post(followApiUrl, postData);
//         }

//         if (response.status === 200) {
//             setFollow(!follow);
//         } else {
//             console.error("Error on follow/unfollow:", response.status);
//         }
//     } catch (error) {
//         console.error("Error on follow/unfollow:", error);
//     }
// };

// function unFollowHandler(following, follower) {
//     return axios.delete(`http://localhost:8080/follower/${following}/hasUnfollowed/${follower}`)
//         .catch(error => {
//             console.error("Error on unfollow:", error);
//             // Handle the error
//         });
// }

// console.log("Follow Status" + followStatus)

// -----------------------------------------------------------------------------------------------------------

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase configuration here
// };
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// const followHandler = async (e) => {
//   e.preventDefault(e);

//   try {
//     let response;
//     if (follow) {
//       response = await axios.delete(`${followApiUrl}/${postData.id}`);
//       if (response.status === 200) {
//         // Remove follower from Firestore
//         await db.collection('followers').doc(postData.id).delete();
//       }
//     } else {
//       response = await axios.post(followApiUrl, postData);
//       if (response.status === 200) {
//         // Add follower to Firestore
//         await db.collection('followers').doc(postData.id).set({
//           followerId: postData.id,
//           followingId: userData.data.id,
//         });
//       }
//     }

//     if (response.status === 200) {
//       setFollow(!follow);
//     } else {
//       console.error("Error on follow/unfollow:", response.status);
//     }
//   } catch (error) {
//     console.error("Error on follow/unfollow:", error);
//   }
// };
