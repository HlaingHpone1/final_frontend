import React from 'react'
import { useNavigate } from 'react-router-dom'
import { img } from '../img';

const PageNotFound = () => {
    const navigate = useNavigate();
    const gohomeBtn = () => {
        navigate('/')
    }

    return (
        <div className='inner xs2:max-w-[300px] xs:max-w-screen-xs sm:max-w-screen-sm lg:max-w-5xl xl:max-w-1240px mx-auto'>
            <div className='sm:flex justify-center gap-x-10'>
                <div className=" my-auto">
                    <h1 className='xs2:text-2xl lg:text-5xl font-bold text-center xs2:mt-10 lg:mt-20'>Page not found</h1>

                    <div className=' flex xs2:justify-center sm:justify-start'>
                        <button
                            className=" bg-blue-600 text-white xs2:py-2 lg:py-3 xs2:px-3 lg:px-5 rounded-2xl xs2:mt-3 lg:mt-6"
                            type="button"
                            onClick={gohomeBtn}
                        >
                            Go Home
                        </button>
                    </div>
                </div>
                <div className=' flex justify-center '>
                    <img src={img.error} className='xs2:size-72 xs:size-96 lg:size-[550px]' />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound