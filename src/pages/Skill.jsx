import React from 'react'
import Header from '../components/header/Header'
import UserSkill from '../components/skill/UserSkill'
import Image from '../components/image/Image'
import { images } from '../components/images'


const Skill = () => {
  return (
    <div>
        <Header/>
        <div className='inner max-w-1240px mx-auto shadow-custom'>
          <div className='xs2:p-2 xs:p-3 sm:p-4'>
            <div className='flex justify-between xs2:pb-1 md:pb-3'>
                <div className='flex'>
                    <button><img src={Image.backArw} alt=""  className='xs2:size-6 xs:size-7 md:size-8'/></button>
                    <p className='pl-3 font-semibold xs2:text-base xs:text-lg md:text-xl md:pt-1'>Skills</p>
                </div>
                <div>
                    <button><img src={images.plus} alt="" className='xs2:size-5 xs:size-6 md:size-7'/></button>
                </div>
            </div>
            <UserSkill skills={"Web Design"} />
            <UserSkill skills={"UI/UX"}/>
          </div>
        </div>
    </div>
  )
}

export default Skill