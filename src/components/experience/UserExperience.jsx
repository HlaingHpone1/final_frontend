import React from 'react'
import Image from '../image/Image.jsx'
import { images } from '../images'

const UserExperience = ({ job, jobType, period }) => {
    return (
        <div className=' border-b border-black'>
            <div className='flex py-4'>
                <div>
                    <img src={images.profile} alt="" className='xs2:size-20 md:size-24 rounded-lg' />
                </div>
                <div className='pl-3'>
                    <p className=' xs2:text-base xs:text-lg md:text-xl'>{job}</p>
                    <p className='xs2:text-xs xs:text-sm md:text-base'>{jobType}</p>
                    <p className='xs2:text-xs xs:text-sm md:text-base'>{period}</p>
                </div>
            </div>
        </div>
    )
}

export default UserExperience