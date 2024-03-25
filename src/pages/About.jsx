import React from 'react'
import { images } from '../components/images'
import AboutCard from '../components/about/AboutCard'

const About = () => {
    return (
        <div className='inner xs2:max-w-72 xs:max-w-[450px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-1240px mx-auto'>
            <div className='flex my-7 xl:w-9/12'>
                <img src={images.profile} alt="" className=' rounded-3xl xs2:size-52 sm:size-56 lg:size-64 ' />
                <div className='mt-0 xs2:p-2 sm:p-4 xl:p-10'>
                    <h2 className='font-bold xs2:text-base xs:text-xl xl:text-3xl font-Roboto-Slab xs2:mb-1 xl:mb-4'>About BizConnect</h2>
                    <p className=' xs2:text-xs xs:text-sm text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam doloremque iste fugiat, possimus doloribus facilis cumque tempore totam minima exercitationem nesciunt.</p>
                </div>
            </div>

            <div className='grid xs2:grid-cols-1 sm:grid-cols-3 xs2:gap-y-3 gap-x-3'>
                <AboutCard title={"Our Vission"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam doloremque iste fugiat possimus doloribus facilis cumque tempore totam minima exercitationem nesciunt."} />

                <AboutCard title={"Our Mission"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam doloremque iste fugiat possimus doloribus facilis cumque tempore totam minima exercitationem nesciunt."} />

                <AboutCard title={"Who We Are"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam doloremque iste fugiat possimus doloribus facilis cumque tempore totam minima exercitationem nesciunt."} />
            </div>
        </div>
    )
}

export default About