import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Router />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
