import { React, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useLocalSessionStore } from "../Store";
import { images } from "../images";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const NavBar = () => {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const [searchData, setSearchData] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const { userData } = useLocalSessionStore();

    // ------------------------------------------------------------------------

    const navigate = useNavigate();

    // http://localhost:8080/feed/search?pageNumber=0&searchKey=kyaw
    const searchHandler = (event) => {
        if (event.key === "Enter") {
            return axios
                .get(
                    `http://localhost:8080/feed/search?pageNumber=0&searchKey=${inputValue}`
                )
                .then((response) => {
                    // console.log(response.data); // Print out the data
                    setSearchData(response.data);
                    navigate("/search", { state: { data: response.data } });
                    return response.data;
                })
                .catch((error) => {
                    console.error("Error on search:", error);
                });
        }
    };

    // const searchHandler = () => {
    //     setSearchData(inputRef.current.value);
    // };

    // const handleKeyDown = (event) => {
    // if (event.key === "Enter") {
    //     searchHandler();
    //     setInputValue("");
    //     navigate(`/search?query=${inputValue}`)
    // }
    // };
    // ------------------------------------------------------------------------

    const toggleSearch = () => {
        setShow(!show);
        if (!show) {
            setTimeout(() => inputRef.current?.focus(), 0);
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

    const searchInputStyle = {
        backgroundImage: inputValue ? "none" : `url(${images.search})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "95%",
        backgroundSize: "25px",
    };

    return (
        <header className="l-header bg-nav w-full py-3 px-5 xl:px-0 sticky top-0 z-50">
            <div className="l-wrap-inner max-w-[1240px] mx-auto">
                <nav className="l-header__list">
                    <div className="logo flex justify-between items-center">
                        <div className="logo flex justify-center items-center space-x-3">
                            <Link to="/" className="block">
                                <img
                                    src={images.logoWhite}
                                    className="w-14 sm:w-16"
                                />
                            </Link>

                            <div
                                className="flex justify-center items-center"
                                ref={containerRef}
                            >
                                <input
                                    className={`px-3 py-2 w-full rounded-lg focus:outline-none md:block border-none shadow transition-all duration-300 ease-in-out bg-slate-800 text-white  ${
                                        show ? "block" : "hidden"
                                    }`}
                                    style={searchInputStyle}
                                    type="text"
                                    placeholder="Search"
                                    value={inputValue}
                                    ref={inputRef}
                                    onKeyDown={searchHandler}
                                    onInput={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                />
                                {!show && (
                                    <button
                                        className="xs2:max-md:block md:hidden block size-9 xs:size-10 sm:size-12 rounded-lg p-2 sm:p-2.5 bg-slate-800"
                                        onClick={toggleSearch}
                                    >
                                        <img
                                            className="block w-full h-full"
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
                                                to="/network"
                                                text={images.network}
                                            />
                                        </li>
                                        <li>
                                            <MyLink
                                                to="/message"
                                                text={images.message}
                                            />
                                        </li>
                                        <li>
                                            <MyLink
                                                to="/jobs"
                                                text={images.job}
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
                                        src={userData.data.profileImg}
                                        alt=""
                                        onClick={() =>
                                            setDropdownOpen(!dropdownOpen)
                                        }
                                    />
                                    {dropdownOpen && (
                                        <div className="dropdown-list absolute right-0  text-center bg-white shadow-md mt-2 rounded-md py-2 z-50">
                                            {/* Dropdown items */}
                                            <Link
                                                to={`/profile/${userData.data.id}`}
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
                                                to="/subscription"
                                                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                                            >
                                                Subscription Plan
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
