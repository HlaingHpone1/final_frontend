import React from "react";
import { Link } from "react-router-dom";

import { images } from "../images";

const Footer = () => {
    return (
        <section className=" px-3">
            <div className="flex space-x-3 text-xs mb-7">
                <Link to={"/about"}>About</Link>
                <Link to={"/faq"}>FAQs</Link>
                <Link to={"/privacy"}>Privacy & Terms</Link>
                <Link>More</Link>
            </div>
            <div className="flex gap-x-5">
                <img src={images.logo1} className="size-16" />
                <p className="text-xs my-auto">BizConnect Corpotion @ 2024</p>
            </div>
        </section>
    );
};

export default Footer;
