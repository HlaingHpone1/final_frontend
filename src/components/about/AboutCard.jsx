import React from 'react'

const AboutCard = ({title,text}) => {
  return (
    <div className='bg-tertiary rounded-sm col-span-1 mb-1'>
        <div className='xs2:p-4 lg:p-5'>
            <h2 className='xs2:pb-2 sm:pb-3 font-semibold xs2:text-base xs:text-lg sm:text-xl'>{title}</h2>
            <p className='text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default AboutCard