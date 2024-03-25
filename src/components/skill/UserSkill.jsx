import React from 'react'


const UserSkill = ({skills}) => {
  return (
    <div className=' border-b border-black'>
        <p className=' py-3 xs2:text-base xs:text-lg md:text-xl'>{skills}</p>
    </div>
  )
}

export default UserSkill