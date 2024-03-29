import React from "react";

import { img } from "../img";

const Ads = () => {
    return (
        <div>
            <img
                src={img.ads}
                className="rounded-2xl w-full object-contain mx-auto h-64 mb-4"
            />
        </div>
    );
};

export default Ads;
