import React from 'react'
import images from '../image/Image'
import img from '../img'
import Btn from '../btn/Btn'

const PeopleMayKnow = () => {
  return (
    <div className='bg-[#D4F1F4] max-w-60 rounded-lg drop-shadow'>
        <img src={images.userBg} className=' h-16 w-full rounded-t-lg' />
            <div>
            {/* <img src={img.cancelBlack} alt="" className='size-7 '/> */}
            </div>
            <div className='ml-2 mt-[-2rem]'>
                <img src={images.userProfile} className=' rounded-full size-[55px] border border-[#858484]' />
            </div>
        <div className=' p-2'>
            <p className=' text-xl'>Julia</p>
            <p className=' text-base pb-3'>Job</p>
            <p className=' text-sm'>{} followers</p>
            <Btn
            text="Follow" />
        </div>
    </div>
  )
}

export default PeopleMayKnow