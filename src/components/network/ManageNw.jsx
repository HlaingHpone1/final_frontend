import React from 'react'
import img from '../img'

const ManageNw = () => {
  return (
    <div className=' pt-3 pl-4'>
        <h2 className=' pb-3 text-2xl'>Managed my network</h2>

        <div className=' space-y-3 text-lg'>
            <div className='flex'>
                <img src={img.twopeople} className=' px-1 pr-2'/>
                <a href="">Connection</a>
            </div>
            <div className='flex'>
                <img src={img.userBlack} className=' px-1 pr-2'/>
                <a href="">Followers & followings</a>
            </div>
            <div className='flex'>
                <img src={img.groupblack} className=' px-1 pr-2'/>
                <a href="" className='my-auto'>Groups</a>
            </div>
            <div className='flex'>
                <img src={img.page} className=' pr-1'/>
                <a href="" className='my-auto'>Pages</a>
            </div>
        </div>
    </div>
  )
}

export default ManageNw