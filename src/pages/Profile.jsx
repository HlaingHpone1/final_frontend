import { React, useState, useEffect } from "react";

import { useLocalSessionStore, useGetUser } from "../components/Store";
import ProfileInfo from "../components/profileInfo/ProfileInfo";
import ProfilePosts from "../components/profilePosts/ProfilePosts";
import ProfileEducation from "../components/profileEducation/ProfileEducation";
import ProfileExperience from "../components/profileExperience/ProfileExperience";

const Profile = () => {
    const { userData } = useLocalSessionStore();
    const { isLoading, error, errorMessage, errorCode, success, apiCall } =
        useGetUser();
    const [data, setData] = useState([]);

    const id = userData.data.id;

    useEffect(() => {
        const controller = new AbortController();

        const fetchUser = async () => {
            const result = await apiCall(id, controller.signal);
            if (result.httpStatusCode == 200) {
                setData(result.data);
            }
        };

        fetchUser();

        return () => controller.abort();
    }, []);
    return (
        <div className="bg-background">
            <ProfileInfo data={data} />
            <ProfilePosts />
            <ProfileEducation />
            <ProfileExperience />
        </div>
    );
};

export default Profile;
