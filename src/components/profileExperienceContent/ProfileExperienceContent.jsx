import React from "react";
import moment from "moment-timezone";

const ProfileExperienceContent = ({ data, noBorder }) => {
    const startDate = moment(data.startDate).tz("Asia/Yangon");
    const endDate = moment(data.endDate).tz("Asia/Yangon");

    const durationYears = endDate.diff(startDate, "years");
    const durationMonths = endDate.diff(startDate, "months") % 12;

    return (
        <div
            className="flex space-x-4 border-b border-black py-5"
            style={{ border: noBorder ? "none" : "" }}
        >
            <img
                className="block size-12 p-2 bg-slate-300 object-cover rounded-xl aspect-square"
                src="https://icons.veryicon.com/png/o/miscellaneous/zr_icon/work-experience-2.png"
                alt="this is icon"
            />
            <div className="content ">
                <p className="title font-semibold font-Roboto-Slab text-xl">
                    {data.companyName}
                </p>
                <div className="edu flex space-x-3 text-base">
                    <p className="degree">{data.position}</p>
                    <p className="field">{data.type}</p>
                </div>
                <div className="duration flex space-x-2 text-slate-500 text-base">
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
                    <p>
                        {". "}
                        {durationYears > 0 ? `${durationYears} years` : ""}{" "}
                        {durationMonths > 0 ? `${durationMonths} months` : ""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileExperienceContent;
