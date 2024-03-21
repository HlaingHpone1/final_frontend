import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
    const data = sessionStorage.getItem("userData");
    return (
        <div className="font-Roboto">
            <BrowserRouter>
                {data != null && (
                    <div className="">
                        <NavBar />
                        <Router />
                        <Footer />
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
