import React from "react";
import ContactUs from "../../pages/ContactUs";
import LogIn from "../../pages/LogIn";
import Register from "../../pages/Register";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/contact" element={<ContactUs />}></Route>
            </Routes>
        </div>
    );
};

export default Router;
