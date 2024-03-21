import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../images";

const useActiveLink = (path) => {
    const location = useLocation();
    return location.pathname === path;
};

const MyLink = ({ text, to }) => {
    const isActive = useActiveLink(to);
    return (
        <Link to={to}>
            <img
                src={text}
                alt=""
                className={`block size-8 ${
                    isActive ? "text-white" : "text-slate-400"
                }`}
            />
        </Link>
    );
};

const NavBar = () => {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);

    const searchHandler = () => {
        const searchTerm = inputRef.current.value;
        console.log("Search initiated with term:", searchTerm);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchHandler();
            setShow(!show);
        }
    };

    return (
        <header className="l-header bg-nav w-full py-5">
            <div className="l-wrap-inner max-w-[1240px] mx-auto">
                <nav className="l-header__list">
                    <div className="logo flex justify-between items-center">
                        <div className="logo flex justify-center items-center space-x-3">
                            <Link to="/" className="block">
                                <img src={images.logo} className=" w-64" />
                            </Link>

                            <div className="flex justify-center items-center">
                                {/* <input
                                    className={`px-3 w-full py-2 rounded-lg focus:outline-none transition-all duration-200 ease-linear origin-left ${
                                        show ? "scale-x-100" : "scale-x-0 "
                                    } `}
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Search "
                                    ref={inputRef}
                                    onKeyDown={handleKeyDown}
                                />
                                <button onClick={showHandler}>
                                    <img
                                        className="block size-10 rounded-lg px-2.5 py-2.5 bg-slate-600"
                                        src={images.search}
                                        alt="this is section"
                                    />
                                </button> */}
                                {/* {show ? ( */}
                                <input
                                    className="px-3 py-2 rounded-lg focus:outline-none hidden md:block"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Search "
                                    ref={inputRef}
                                    onKeyDown={handleKeyDown}
                                />
                                {/* ) : ( */}
                                <button
                                    className="hidden xs:max-md:block"
                                    onClick={() => setShow(!show)}
                                >
                                    <img
                                        className="block size-10 rounded-lg px-2.5 py-2.5 bg-slate-600"
                                        src={images.search}
                                        alt="this is section"
                                    />
                                </button>
                                {/* )} */}
                            </div>
                        </div>
                        <div className="l-header__menu">
                            <ul className=" flex justify-center items-center space-x-4">
                                <li>
                                    <MyLink to="/" text={images.home} />
                                </li>
                                <li>
                                    <MyLink to="/login" text={images.network} />
                                </li>
                                <li>
                                    <MyLink to="/d" text={images.message} />
                                </li>
                                <li>
                                    <MyLink to="/dd" text={images.noti} />
                                </li>
                            </ul>
                        </div>
                        <div className="profile">
                            <img
                                className="rounded-full size-16 object-cover aspect-square"
                                src={images.profile}
                                alt=""
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
