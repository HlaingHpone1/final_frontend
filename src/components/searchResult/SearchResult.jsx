import { React, useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import Post from "../post/Post";
import JobPost from "../job/JobPosts";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
    const location = useLocation();
    const data = location.state
        ? location.state.data
        : { users: [], posts: [], jobPosts: [] };

    console.log(data);
    return (
        <div>
            {data.users.length === 0 &&
            data.posts.length === 0 &&
            data.jobPosts.length === 0 ? (
                <p className="text-3xl font-bold font-Roboto-Slab">
                    There is no search result
                </p>
            ) : (
                <>
                    <div className="grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                        {data.users.length > 0 ? (
                            data.users.map((item, index) => (
                                <UserCard key={index} data={item} />
                            ))
                        ) : (
                            <p className="bg-white rounded-lg p-3 col-span-3">
                                No results found in Users.
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 mb-5">
                        {data.posts.length > 0 ? (
                            data.posts.map((item, index) => (
                                <Post key={index} data={item} />
                            ))
                        ) : (
                            <p className="bg-white rounded-lg p-3">
                                No results found in Posts.
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 bg-white rounded-lg p-3">
                        {data.jobPosts.length > 0 ? (
                            data.jobPosts.map((item, index) => (
                                <JobPost key={index} job={item} />
                            ))
                        ) : (
                            <p>No results found in Job Posts.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchResult;
