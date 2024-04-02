import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { useLocalSessionStore } from "../components/Store";
const Settings = () => {
    // const {id } = useParams();
    // console.log(id);
    const { userData } = useLocalSessionStore();

    return (
        <main className="inner max-w-1240px mx-auto px-5 xl:p-0">
            <div className=" shadow-custom rounded-lg  p-6 my-10">
                <div className="py-5">
                    <Link to={`/settings/${userData.data.id}/oldpsw`}>
                        <h2 className="xs2:text-sm sm:text-lg md:text-xl font-bold text-center">
                            Reset Password
                        </h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Settings;
