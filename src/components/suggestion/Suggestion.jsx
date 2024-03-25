import React, { useState, useEffect } from "react";
import { images } from "../images";
import CompanyPage from "../companyPage/CompanyPage";

import { Link } from "react-router-dom";
import { useGetAllUsers } from "../Store";
import { PostLoading } from "../loading/Loading";

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

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUsers = async () => {
            const result = await apiCall(page, controller.signal);
            setData(result.content);
        };

        fetchUsers();

        return () => controller.abort();
    }, []);

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
                            .slice(0, 4)
                            .map((item, index) => (
                                <CompanyPage key={index} data={item} />
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
