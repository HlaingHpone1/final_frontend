import React from 'react'
import { img } from '../components/img'
import AboutCard from '../components/about/AboutCard'

const About = () => {
    return (
        <div className='inner xs2:max-w-72 xs:max-w-[450px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-1240px mx-auto'>
            <div className='xs:flex my-7 xl:w-9/12'>
                <img src={img.ads} alt="" className=' rounded-3xl xs2:w-72 xs2:h-36 sm:size-56 lg:size-64 xs2:my-auto' />
                <div className='mt-0 xs2:p-2 sm:p-4 xl:p-10'> 
                    <h2 className='font-bold xs2:text-base xs:text-xl xl:text-3xl font-Roboto-Slab xs2:mb-1 xl:mb-4'>About BizConnect</h2>
                    <p className=' xs2:text-xs xs:text-sm text-lg'>BizConnect is a professional networking platform designed to connect individuals and businesses, foster collaboration, and provide opportunities for career growth and business development. BizConnect aims to be a comprehensive platform that empowers professionals to connect, collaborate, and succeed in their careers and business endeavors. It leverages the power of networking, technology, and community to facilitate meaningful interactions and opportunities for growth.
                    </p>
                </div>
            </div>

            <div className='grid xs2:grid-cols-1 sm:grid-cols-3 xs2:gap-y-3 gap-x-3'>
                <AboutCard title={"Our Vission"} text={"Be the premier destination for professionals seeking meaningful connections, career advancement, and business opportunities."} />

                <AboutCard title={"Our Mission"} text={"Offer a trusted and secure platform for professionals to build authentic relationships, share knowledge, and explore new opportunities."} />

                <AboutCard title={"Who We Are"} text={" We are a team of passionate professionals dedicated to creating a platform that empowers individuals and businesses."} />
            </div>
        </div>
    )
}

export default About