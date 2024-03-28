import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetUser } from "../Store";

const Header = () => {
    const { id } = useParams();

    const { apiCall: userInfoAPI } = useGetUser();

    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUser = async () => {
            const result = await userInfoAPI(id, controller.signal);
            setData(result.data);
        };

        fetchUser();

        return () => controller.abort();
    }, []);

    return (
        <div className=" bg-tertiary">
            <div className="inner max-w-1240px mx-auto mb-6 px-5 xl:px-0">
                <div className="flex xs2:py-2 xs:py-3">
                    <div className="profile-img">
                        <img
                            src={data.profileImg}
                            className="rounded-full xs2:size-10 xs:size-12 mx-auto border-black"
                        />
                    </div>
                    <div className="pl-3 pb-2">
                        <p className="xs2:text-lg sm:text-xl font-Roboto-Slab font-semibold text-black capitalize">
                            {data.userName}
                        </p>
                        <p className=" xs2:text-[10px] xs:text-sm">
                            {data.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
