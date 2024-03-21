import React from 'react'
import images from '../image/Image'

const Profile = () => {
  return (
    <section className='w-[248px] bg-[#3E3E3E] text-white rounded-2xl'>

      {/* userProfile */}
      <div className='relative'>
        <img src={images.userBg} className='h-14 w-full rounded-t-2xl'/>
        <div className='inner w-56 mx-auto'>
          <div className=' absolute top-5 left-[89px]'>
            <img src={images.userProfile} className='rounded-full size-[70px] border border-[#858484]' />
          </div>
            <p className=' mt-10 text-center text-[25px] mb-2'>Hlaing Hpone</p>
            <p className=' text-center text-xs text-[#c5c5c5]'>Passionate Junior Web Developer | Proficient in React, JavaScript, and PHP | Dedicated to Continuous Learning and Growth</p>
        </div>
      </div>

      {/* Connection */}
      <div className='border-y border-[#858484] mt-3'>
        <div className='inner w-56 flex mx-auto justify-between py-3'>
          <div className='text-xs'>
            <p>Connections</p>
            <p>Grow Your Connections</p>
          </div>
          <img src={images.network1} className='size-8 mt-1' />
        </div>
      </div>

      {/* follower&following */}
      <div className='border-b'>
        <div className='inner w-56 flex text-xs py-2 justify-between mx-auto'>
          <div className='flex'>
            <img src={images.user} className='size-6' />
            <p className='my-auto'>5K Followers</p>
          </div>
          <div className='flex'>
            <img src={images.user} className='size-6' />
            <p className='my-auto'>100 Following</p>
          </div>
        </div>
      </div>

      <div className='inner w-56 flex mx-auto py-2'>
          <img src={images.group} className='size-9 my-auto' />
          <p className='my-1 text-[14px]'>Group</p>
      </div>
    </section>
  )
}

export default Profile