import { React, useState, useEffect, useContext } from "react";

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
import { LongAds } from "../components/ads/Ads";
import Footer from "../components/footer/Footer";

import Recruiter from "../components/job/Recruiter";

import { RoleContext } from "../components/RoleContext";

import { Loading } from "../components/loading/Loading";

const Profile = () => {
    const { isRECRUITER, isJOBSEEKER } = useContext(RoleContext);

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
    const [followStatuses, setFollowStatuses] = useState([]);

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

    // sessionStorage.setItem("userData", JSON.stringify(userData));

    return (
        <>
            <Loading isLoading={isLoading} />
            <div className="bg-background">
                <div className="inner max-w-1240px mx-auto px-5 xl:p-0">
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 py-5">
                        <div className="col-span-3">
                            <ProfileInfo
                                isOwnProfile={isOwnProfile}
                                edu={educationData[0]}
                                data={userData}
                            />
                            <ProfilePosts
                                isOwnProfile={isOwnProfile}
                                data={postData}
                            />
                            <div className="block lg:hidden">
                                {isOwnProfile && isRECRUITER && <Recruiter />}
                            </div>
                            <ProfileEducation
                                isOwnProfile={isOwnProfile}
                                data={educationData}
                            />
                            <ProfileExperience
                                isOwnProfile={isOwnProfile}
                                data={experienceData}
                            />
                            <ProfileSkill
                                isOwnProfile={isOwnProfile}
                                data={skillData}
                            />
                        </div>
                        <div className="lg:col-span-1 lg:block hidden">
                            {!(isJOBSEEKER || isRECRUITER) && <LongAds />}
                            {isOwnProfile && isRECRUITER && <Recruiter />}

                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
