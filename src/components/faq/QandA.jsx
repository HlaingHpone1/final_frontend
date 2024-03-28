import React from 'react'
import { images } from '../images'

const QandA = () => {
    const Data = [
        {
            question: "What is BizConnect?",
            answer: "BizConnect is a professional networking platform designed to connect individuals and businesses, facilitate collaboration, and provide opportunities for career growth and business development."
        },
        {
            question: "How do I create an account on BizConnect?",
            answer: 'To create an account on BizConnect, simply visit the website and click on the "Sign Up" or "Create Account" button. Follow the prompts to enter your personal information, create a profile, and start connecting with professionals.'
        },
        {
            question: "Can I connect with other professionals on BizConnect?",
            answer: 'Yes, BizConnect allows you to connect with other professionals in your industry or areas of interest. You can search for people by name, job title, company, or keywords, and send connection requests to build your network.'
        },
        {
            question: "Can I join groups or communities on BizConnect?",
            answer: 'Yes, BizConnect offers groups and communities based on interests, industries, locations, and professions. You can join groups to network, share insights, participate in discussions, and connect with like-minded professionals.'
        },
        {
            question: "How can I get support or assistance on BizConnect?",
            answer: 'If you need help or have questions about using BizConnect, you can visit the Help Center, contact customer support through the website, or reach out to the community for assistance.'
        }
    ]
    
    return (
        <div className="py-5 ">

            {Data.map((data, index) => (

                <details className="group border-b py-4" key={index}>

                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                        <p className=' xs2:text-sm xs:text-base md:text-lg'>{data.question}</p>
                        <span className="transition group-open:rotate-180 xs2:size-5 size-6">
                            <img src={images.downArrow} />
                        </span>
                    </summary>

                    <p className="group-open:animate-fadeIn mt-3 text-neutral-700 xs2:text-sm xs:text-base md:text-lg">{data.answer}
                    </p>

                </details>

            ))}

        </div>
    )
}

export default QandA