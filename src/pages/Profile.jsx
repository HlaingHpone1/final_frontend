import { React, useState, useEffect } from "react";

import {
    useGetUser,
    useGetPostByUser,
    useGetEducationByUser,
    useGetWorkExpByUser,
    useGetSkillByUser,
    useLocalSessionStore,
} from "../components/Store";
import { useParams } from "react-router-dom";

import ProfileInfo from "../components/profileInfo/ProfileInfo";
import ProfilePosts from "../components/profilePosts/ProfilePosts";
import ProfileEducation from "../components/profileEducation/ProfileEducation";
import ProfileExperience from "../components/profileExperience/ProfileExperience";
import ProfileSkill from "../components/profileSkill/ProfileSkill";

import { Loading } from "../components/loading/Loading";

const Profile = () => {
    const { isLoading, apiCall: userInfoAPI } = useGetUser();

    const { apiCall: postAPI } = useGetPostByUser();

    const { apiCall: educationAPI } = useGetEducationByUser();

    const { userData: localUser } = useLocalSessionStore();

    const { apiCall: workExpAPI } = useGetWorkExpByUser();

    const { apiCall: skillAPI } = useGetSkillByUser();

    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [skillData, setSkillData] = useState([]);

    const { id } = useParams();

    const isOwnProfile = id === localUser.data.id;

    useEffect(() => {
        const controller = new AbortController();

        const fetchUser = async () => {
            const result = await userInfoAPI(id, controller.signal);
            setUserData(result.data);
        };

        const fetchPost = async () => {
            const result = await postAPI(id, controller.signal);
            setPostData(result);
        };

        const fetchEducation = async () => {
            const result = await educationAPI(id, controller.signal);
            setEducationData(result.data);
        };

        const fetchExperience = async () => {
            const result = await workExpAPI(id, controller.signal);
            setExperienceData(result.data);
        };

        const fetchSkill = async () => {
            const result = await skillAPI(id, controller.signal);
            setSkillData(result.data);
        };

        fetchUser();
        fetchPost();
        fetchEducation();
        fetchExperience();
        fetchSkill();

        return () => controller.abort();
    }, [id]);

    return (
        <>
            <Loading isLoading={isLoading} />
            <div className="bg-background">
                <ProfileInfo
                    isOwnProfile={isOwnProfile}
                    edu={educationData[0]}
                    data={userData}
                />
                <ProfilePosts isOwnProfile={isOwnProfile} data={postData} />
                <ProfileEducation
                    isOwnProfile={isOwnProfile}
                    data={educationData}
                />
                <ProfileExperience
                    isOwnProfile={isOwnProfile}
                    data={experienceData}
                />
                <ProfileSkill isOwnProfile={isOwnProfile} data={skillData} />
            </div>
        </>
    );
};

export default Profile;
