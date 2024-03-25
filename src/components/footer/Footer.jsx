import React from "react";

import { images } from "../images";

const Footer = () => {
    return (
        <section className=" px-3">
            <div className="flex space-x-3 text-xs mb-7">
                <p>About</p>
                <p>FAQs</p>
                <p>Privacy & Terms</p>
                <p>More</p>
            </div>
            <div className="flex gap-x-5">
                <img src={images.logo1} className="size-16" />
                <p className="text-xs my-auto">BizConnect Corpotion @ 2024</p>
            </div>
        </section>
    );
};

export default Footer;
