import React from "react";
import images from "../image/Image";

const Footer = () => {
    return (
        <section className=" px-3">
            <div className="flex gap-x-11 text-xs text-white mb-7">
                <p>About</p>
                <p>FAQs</p>
                <p>Privacy & Terms</p>
                <p>More</p>
            </div>
            <div className="flex gap-x-5">
                <img src={images.footerlogo} className="w-[121px]" />
                <p className="text-xs my-auto text-white">BizConnect Corpotion @ 2024</p>
            </div>
        </section>
    );
};

export default Footer;
