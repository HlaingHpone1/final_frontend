import React, { useState, useEffect } from "react";
import { images } from "../images";
import CompanyPage from "../companyPage/CompanyPage";

import { Link } from "react-router-dom";
import { useGetAllUsers, useLocalSessionStore } from "../Store";
import { PostLoading } from "../loading/Loading";
import axios from "axios";

const Suggestion = () => {
    const {
        isLoading,
        error,
        errorMessage,
        errorCode,
        success,
        allUsersData,
        apiCall,
    } = useGetAllUsers();

    const { userData } = useLocalSessionStore();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [isFollowed, setIsFollowed] = useState(false);
    const [followStatuses, setFollowStatuses] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUsers = async () => {
            const result = await apiCall(page, controller.signal);
            setData(result.content);
        };

        fetchUsers();

        return () => controller.abort();
    }, []);

    function checkFollowStatus(following, follower) {
        return axios
            .get(
                `http://localhost:8080/follower/${following}/hasFollowedBack/${follower}`
            )
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error on check follow status:", error);
            });
    }

    // console.log(userData.data.id)

    useEffect(() => {
        Promise.all(
            data
                .filter((item) => item.id !== userData.data.id)
                .slice(0, 4)
                .map((item) => checkFollowStatus(userData.data.id, item.id))
        )
            .then((statuses) => setFollowStatuses(statuses))
            .catch((error) => {
                console.error(error);
                setFollowStatuses(data.slice(0, 4).map(() => false));
            });
    }, [data, userData]);

    // console.log(followStatuses)
    return (
        <div className="mb-5 bg-white shadow-custom rounded-2xl">
            <div className="inner-card px-3 py-4">
                <div className="title flex justify-between items-center mb-4">
                    <p className="text-base font-bold">Suggestion</p>
                    <img
                        className="block size-5"
                        src={images.notice}
                        alt="this is Suggestion icon"
                    />
                </div>
                <div className="suggestion">
                    {isLoading && <PostLoading isLoading={isLoading} />}
                    {data &&
                        data
                            .filter((item) => item.id !== userData.data.id)
                            .slice(0, 4)
                            .map((item, index) => (
                                <CompanyPage
                                    key={index}
                                    data={item}
                                    followStatus={followStatuses[index]}
                                />
                            ))}
                </div>
                <div className="view-all">
                    <Link to="/network" className="text-sm font-semibold">
                        View All Recommendation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
