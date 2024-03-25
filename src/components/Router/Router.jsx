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
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route
                            path="/profile/skill"
                            element={<Skill />}
                        ></Route>
                        <Route
                            path="/profile/education"
                            element={<Education />}
                        ></Route>
                        <Route
                            path="/profile/experience"
                            element={<Experience />}
                        ></Route>
                        <Route path="/message" element={<Message />}></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                    </>
                )}
            </Routes>
        </div>
    );
};

export default Router;
