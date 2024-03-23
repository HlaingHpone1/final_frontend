import React from 'react'
import images from '../image/Image'
import Btn from '../btn/Btn'

const InterestedGroup = () => {
  return (
        <div className='bg-[#D4F1F4] max-w-60 rounded-lg drop-shadow'>
        <img src={images.userBg} className=' h-16 w-full rounded-t-lg' />
            <div>
            {/* <img src={img.cancelBlack} alt="" className='size-7 '/> */}
            </div>
            <div className=' ml-20 mt-[-2.5rem]'>
                <img src={images.userProfile} className=' size-20 border border-[#858484]' />
            </div>
        <div className=' text-center p-2'>
            <p className=' text-xl pb-3'>Group</p>
            <p className=' text-sm'>{} members</p>
            <Btn
            text="Join" />
        </div>
    </div>
  )
}

export default InterestedGroup