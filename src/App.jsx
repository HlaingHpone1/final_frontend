import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router/Router";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

import { useLocalSessionStore } from "./components/Store";
import { RoleContext } from "./components/RoleContext";
function App() {
    const { userData: localUser } = useLocalSessionStore();

    let isUser, isRECRUITER, isJOBSEEKER;

    if (localUser) {
        isUser = localUser.data.role === "USER";
        isRECRUITER = localUser.data.role === "RECRUITER";
        isJOBSEEKER = localUser.data.role === "JOBSEEKER";
    }

    const data = sessionStorage.getItem("userData");
    return (
        <div className="font-Roboto ">
            <BrowserRouter>
                {data != null && (
                    <div className="">
                        <RoleContext.Provider
                            value={{ isRECRUITER, isJOBSEEKER }}
                        >
                            <NavBar />
                            <Router />
                            {/* <Footer /> */}
                        </RoleContext.Provider>
                    </div>
                )}

                {data == null && (
                    <div className="">
                        <Router />
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
