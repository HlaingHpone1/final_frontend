import { React, useState, useEffect } from "react";

import { useGetUser } from "../components/Store";
import { useParams } from "react-router-dom";

import ProfileInfo from "../components/profileInfo/ProfileInfo";
import ProfilePosts from "../components/profilePosts/ProfilePosts";
import ProfileEducation from "../components/profileEducation/ProfileEducation";
import ProfileExperience from "../components/profileExperience/ProfileExperience";
import ProfileSkill from "../components/profileSkill/ProfileSkill";

const Profile = () => {
    const { isLoading, error, errorMessage, errorCode, success, apiCall } =
        useGetUser();
    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);

    const [postPage, setPostPage] = useState(0);
    const [postTotalPages, setPostTotalPages] = useState(0);
    const [postLoading, setPostLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();

        const fetchUser = async () => {
            const result = await apiCall(id, controller.signal);

            setUserData(result.data);
        };

        fetchUser();

        return () => controller.abort();
    }, []);

    return (
        <div className="bg-background">
            <ProfileInfo data={userData} />
            <ProfilePosts id={id} />
            <ProfileEducation />
            <ProfileExperience />
            <ProfileSkill />
        </div>
    );
};

export default Profile;
