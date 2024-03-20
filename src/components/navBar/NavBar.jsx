import React from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../image/Image";

const useActiveLink = (path) => {
    const location = useLocation();
    return location.pathname === path;
};

const MyLink = ({ text, to }) => {
    const isActive = useActiveLink(to);
    return (
        <Link
            className={`block text-lg  ${
                isActive ? "text-white font-bold" : "text-slate-400"
            }`}
            to={to}
        >
            <img src={text} alt="" className=" w-10"/>
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className="l-header bg-nav w-full py-5">
            <div className="l-wrap-inner max-w-[1240px] mx-auto">
                <nav className="l-header__list">
                    <div className="logo flex justify-between items-center">
                        <Link
                            to="/"
                            className="block"
                        >
                            <img src={images.logo} className=" w-52"/>
                        </Link>
                        <div className="l-header__menu">
                            <ul className=" flex justify-center items-center space-x-4">
                                <li>
                                    <MyLink to="/" text={images.home} />
                                </li>
                                <li>
                                    <MyLink to="/login" text={images.network} />
                                </li>
                                <li>
                                    <MyLink to="/register" text={images.job} />
                                </li>
                                <li>
                                    <MyLink to="/d" text={images.message} />
                                </li>
                                <li>
                                    <MyLink to="/dd" text={images.noti} />
                                </li>
                            </ul>
                        </div>
                        {/* <div className="l-header__btnGroup flex justify-center space-x-5">
                            <Link
                                className="text-white bg-orange-400 px-5 py-2.5 rounded-md text-xl hover:bg-orange-700 transition-colors duration-200 ease-linear font-semibold block"
                                to="/login"
                            >
                                Log In
                            </Link>
                            <Link
                                className="text-white bg-orange-400 px-5 py-2.5 rounded-md text-xl hover:bg-orange-700 transition-colors duration-200 ease-linear font-semibold block"
                                to="/register"
                            >
                                Register
                            </Link>
                        </div> */}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
