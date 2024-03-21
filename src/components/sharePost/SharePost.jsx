import React from 'react'
import images from '../image/Image'

const SharePost = () => {
  return (
    <section className=' w-[608px] bg-white rounded-2xl'>
        <div className='inner w-[575px] flex mx-auto py-5 justify-between'>
            <img src={images.userProfile} className='rounded-full size-[55px] border border-[#858484]' />
            <input type="text" 
            name="" 
            id=""
            placeholder='Start a Post'
            className='border border-black rounded-[25px] w-[503px] h-11 my-auto px-4 placeholder:text-black' />
        </div>
    </section>
  )
}

export default SharePost