import React, { useState } from 'react'
import { images } from '../images'
import { img } from '../img';
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const logoutHandler = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    // const Menus = [
    //     {title: "Dashboard" , src: img.dashboard},
    //     {title: "Users" , src: img.group},
    //     {title: "Profile" ,src: img.adminProfile},
    //     {title: "Log Out", src: img.logout},
    // ]
    return (
        <div className={` ${open ? "w-72" : "w-20"} md: duration-300 h-screen bg-nav p-5 pt-8 relative`}>
            <img src={images.backArrow}
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-blue-500 rounded-full bg-white ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} />

            <Link to={"/"}>
                <div className='flex gap-x-3 items-center'>
                    <img src={images.logoWhite} className={`size-10 duration-300`} />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>BizConnect</h1>
                </div></Link>

            {/* <ul className='pt-6'>
            {Menus.map((menu, index)=>(
                <li 
                key={index} 
                className={`text-gray-300 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}>
                <img src={menu.src} className='size-6' />
                <span className={`${!open && 'hidden'} origin-left duration-300`}>{menu.title}</span></li>
            ))}
        </ul> */}
            <ul className='pt-5'>
                <li className='text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md'>
                    <img src={img.dashboard} className='size-6' />
                    <span className={`${!open && 'hidden'} origin-left duration-300`}>Dashboard</span>
                </li>

                <li className='text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md'>
                    <img src={img.group} className='size-6' />
                    <span className={`${!open && 'hidden'} origin-left duration-300`}>Users</span>
                </li>

                <li className='text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md'>
                    <img src={img.adminProfile} className='size-6' />
                    <span className={`${!open && 'hidden'} origin-left duration-300`}>Profile</span>
                </li>

                <li className='text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md' onClick={logoutHandler}>
                    <img src={img.logout} />
                    <span
                        className={`${!open && 'hidden'} origin-left duration-300`}
                    >Log Out</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar