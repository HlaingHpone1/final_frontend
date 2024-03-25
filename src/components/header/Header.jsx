import React from 'react'
import { images } from "../images.js";
import { useLocalSessionStore } from '../Store';

const Header = () => {
    const { userData } = useLocalSessionStore();
  return (
    <div className=' bg-tertiary'>
        <div className='inner max-w-1240px mx-auto mb-6'>
            <div className='flex xs2:py-2 xs:py-3'>
                <div className="profile-img">
                <img
                 src={userData.data.profileImage}
                 className="rounded-full xs2:size-10 xs:size-12 mx-auto border-black"
                />
                </div>
                <div className='pl-3 pb-2'>
                    <p className="xs2:text-xs sm:text-sm font-Roboto-Slab font-semibold text-black capitalize">
                        {userData.data.userName}
                    </p>
                    <p className=" xs2:text-[10px] xs:text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header