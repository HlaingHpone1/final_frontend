import { React, useState } from "react";

const UserChat = () => {
    const [active, setActive] = useState(false);

    return (
        <button
            className={`message-users px-4 py-2 flex w-full justify-between hover:bg-slate-200 ${
                active ? "" : ""
            }`}
            onClick={() => setActive(!active)}
        >
            <div className="user-info flex space-x-3">
                <img
                    className="block rounded-full size-16"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="This is Photo"
                />
                <div className="content text-start">
                    <div className="name text-xl font-semibold">
                        Hlaing Hpone
                    </div>
                    <div className="message text-sm text-slate-400">
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
            <div className="date">Mar 27</div>
        </button>
    );
};

export default UserChat;
