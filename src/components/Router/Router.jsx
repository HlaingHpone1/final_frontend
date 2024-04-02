import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ContactUs from "../../pages/ContactUs";
import LogIn from "../../pages/LogIn";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import Network from "../../pages/Network";
import Profile from "../../pages/Profile";
import Message from "../../pages/Message";
import Settings from "../../pages/Settings";
import Skill from "../../pages/Skill";
import Education from "../../pages/Education";
import Experience from "../../pages/Experience";
import About from "../../pages/About";
import Faq from "../../pages/Faq";

import PswReset from "../../pages/PswReset";
import OtpReset from "../../pages/OtpReset";
import OldPswReset from "../../pages/OldPswReset";
import ChangePsw from "../../pages/ChangePsw";

import UserPosts from "../userPosts/UserPosts";
import UpdateProfile from "../userProfile/UpdateProfile";
import Subscription from "../../pages/Subscription";
import Search from "../../pages/Search";

const Router = () => {
    const data = sessionStorage.getItem("userData");

    return (
        <div>
            <Routes>
                {data == null && (
                    <>
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        ></Route>
                        <Route path="/login" element={<LogIn />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </>
                )}

                {data != null && (
                    <>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/contact" element={<ContactUs />}></Route>
                        <Route path="/network" element={<Network />}></Route>
                        <Route
                            path="/subscription"
                            element={<Subscription />}
                        ></Route>
                        <Route
                            path="/profile/:id"
                            element={<Profile />}
                        ></Route>
                        <Route
                            path="/profile/:id/posts"
                            element={<UserPosts />}
                        ></Route>

                        <Route
                            path="/profile/:id/skill"
                            element={<Skill />}
                        ></Route>
                        <Route
                            path="/profile/:id/education"
                            element={<Education />}
                        ></Route>
                        <Route
                            path="/profile/:id/experience"
                            element={<Experience />}
                        ></Route>

                        <Route
                            path="/profile/:id/experience/:expID/edit"
                            element={<Experience />}
                        ></Route>

                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/message" element={<Message />}></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/faq" element={<Faq />}></Route>
                        <Route
                            path="/settings/:id/oldpsw"
                            element={<OldPswReset />}
                        ></Route>
                        <Route path="/reset" element={<PswReset />}></Route>
                        <Route path="/otp" element={<OtpReset />}></Route>
                        <Route 
                        path="/reset/:id/changepsw" element={<ChangePsw />}></Route>
                    </>
                )}
            </Routes>
        </div>
    );
};

export default Router;
