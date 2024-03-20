import React from "react";
import "../../index.css";

const Loading = ({ isLoading }) => {
    return (
        <div>
            {isLoading && (
                <div className="loading_section absolute top-0 left-0  z-50 bg-black w-full h-full opacity-75">
                    <div className="banter-loader ">
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                        <div className="banter-loader__box"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Loading;
