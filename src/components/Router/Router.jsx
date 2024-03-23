import React from "react";
import ContactUs from "../../pages/ContactUs";
import LogIn from "../../pages/LogIn";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Network from "../../pages/Network";

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
                    </>
                )}
            </Routes>
        </div>
    );
};

export default Router;
