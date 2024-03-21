import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../images";

// Check Active Link

// const useActiveLink = (path) => {
//     const location = useLocation();
//     return location.pathname === path;
// };

const MyLink = ({ text, to }) => {
    // const isActive = useActiveLink(to);
    return (
        <Link to={to}>
            <img
                src={text}
                alt=""
                className={`block size-7 sm:size-8 aspect-square transition-all duration-200 ease-linear`}
            />
        </Link>
    );
};

// For text Active Link class
{
    /* <Link
    className={`block size-7 sm:size-8 aspect-square transition-all duration-200 ease-linear ${
        isActive ? "text-red-400" : "text-slate-700"
    }`}
></Link>; */
}

const NavBar = () => {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const [searchData, setSearchData] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const searchHandler = () => {
        setSearchData(inputRef.current.value);
    };

    const toggleSearch = () => {
        setShow(!show);
        if (!show) {
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchHandler();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setShow(false);
            }

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const logOutHandler = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    return (
        <header className="l-header bg-nav w-full py-3">
            <div className="l-wrap-inner max-w-[1240px] mx-auto">
                <nav className="l-header__list">
                    <div className="logo flex justify-between items-center">
                        <div className="logo flex justify-center items-center space-x-3">
                            <Link to="/" className="block">
                                <img
                                    src={images.logo}
                                    className=" w-40 sm:w-64"
                                />
                            </Link>

                            <div
                                className="flex justify-center items-center"
                                ref={containerRef}
                            >
                                <input
                                    className={`px-3 py-2 w-full rounded-lg focus:outline-none md:block ${
                                        show ? "block" : "hidden"
                                    }`}
                                    type="text"
                                    placeholder="Search"
                                    ref={inputRef}
                                    onKeyDown={handleKeyDown}
                                />
                                {!show && (
                                    <button
                                        className="xs2:max-md:block md:hidden"
                                        onClick={toggleSearch}
                                    >
                                        <img
                                            className="block size-8 xs:size-9 sm:size-10 rounded-lg p-2 sm:p-2.5 bg-slate-600"
                                            src={images.search}
                                            alt="Search"
                                        />
                                    </button>
                                )}
                            </div>
                        </div>
                        {!show && (
                            <div className="flex items-center justify-center space-x-5">
                                <div className="l-header__menu">
                                    <ul className=" flex justify-center items-center space-x-2 sm:space-x-6">
                                        <li>
                                            <MyLink to="/" text={images.home} />
                                        </li>
                                        <li>
                                            <MyLink
                                                to="/login"
                                                text={images.network}
                                            />
                                        </li>
                                        <li>
                                            <MyLink
                                                to="/d"
                                                text={images.message}
                                            />
                                        </li>
                                        <li>
                                            <MyLink
                                                to="/dd"
                                                text={images.noti}
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="profile relative"
                                    ref={dropdownRef}
                                >
                                    <img
                                        className="rounded-full size-9 sm:size-12 object-cover aspect-square"
                                        src={images.profile}
                                        alt=""
                                        onClick={() =>
                                            setDropdownOpen(!dropdownOpen)
                                        }
                                    />
                                    {dropdownOpen && (
                                        <div className="dropdown-list absolute right-0 w-28 text-center bg-white shadow-md mt-2 rounded-md py-2">
                                            {/* Dropdown items */}
                                            <Link
                                                to="/profile"
                                                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                to="/settings"
                                                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                                            >
                                                Settings
                                            </Link>
                                            <Link
                                                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                                                onClick={logOutHandler}
                                            >
                                                Logout
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
