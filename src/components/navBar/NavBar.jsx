import React from "react";
import { Link, useLocation } from "react-router-dom";

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
            {text}
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className="l-header bg-slate-700 w-full py-5">
            <div className="l-wrap-inner max-w-[1440px] mx-auto">
                <nav className="l-header__list">
                    <div className="logo flex justify-between items-center">
                        <Link
                            to="/"
                            className="text-white text-3xl font-bold block"
                        >
                            Lorem
                        </Link>
                        <div className="l-header__menu">
                            <ul className=" flex justify-center items-center space-x-3">
                                <li>
                                    <MyLink to="/" text="Home" />
                                </li>
                                <li>
                                    <MyLink to="/login" text="Product" />
                                </li>
                                <li>
                                    <MyLink to="/register" text="About us" />
                                </li>
                                <li>
                                    <MyLink to="/d" text="Contact us" />
                                </li>
                                <li>
                                    <MyLink to="/dd" text="FAQs" />
                                </li>
                            </ul>
                        </div>
                        <div className="l-header__btnGroup flex justify-center space-x-5">
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
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
