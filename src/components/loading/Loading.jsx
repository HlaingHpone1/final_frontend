import { React, useEffect } from "react";
import "./css/loading.css";

export const Loading = ({ isLoading }) => {
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    return (
        <div>
            {isLoading && (
                <div className="loading_section absolute top-0 left-0 z-50 bg-black w-full h-screen opacity-75">
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

export const PostLoading = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="border border-blue-300 shadow rounded-md p-4 w-full ">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export const NetworkLoading = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="col-span-3">
                    <div className="flex justify-center items-center">
                        <div className="rounded-full h-20 w-20 bg-primary animate-ping"></div>
                    </div>
                </div>
            )}
        </>
    );
};
