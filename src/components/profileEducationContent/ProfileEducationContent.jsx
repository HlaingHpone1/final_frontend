import React from "react";
import moment from "moment-timezone";

const ProfileEducationContent = ({ data, noBorder }) => {
    return (
        <div
            className="flex space-x-4 border-b border-black py-5"
            style={{ border: noBorder ? "none" : "" }}
        >
            <img
                className="block size-12 p-1 bg-slate-300 object-cover rounded-xl aspect-square"
                src="https://cdn-icons-png.freepik.com/512/6570/6570884.png"
                alt="this is icon"
            />
            <div className="content ">
                <p className="title font-semibold font-Roboto-Slab text-lg">
                    {data.schoolName}
                </p>
                <div className="edu flex space-x-3 text-sm">
                    <p className="degree">{data.degree}</p>
                    <p className="field">{data.fieldOfStudy}</p>
                </div>
                <div className="duration flex space-x-2 text-slate-500 text-sm">
                    <p className="start">
                        {moment(data.startDate)
                            .tz("Asia/Yangon")
                            .format("MMMM YYYY")}
                    </p>
                    <p>-</p>
                    <p className="end">
                        {moment(data.endDate)
                            .tz("Asia/Yangon")
                            .format("MMMM YYYY")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileEducationContent;
