import React from 'react'

const CookiePolicy = () => {
    return (
        <div>
            <div className='banner shadow-md xs2:h-20 sm:h-28'>
                <h1 className=' font-semibold xs2:text-2xl sm:text-4xl text-center xs2:pt-5 sm:pt-9'>Cookie Policy</h1>
            </div>
            <div className='inner xs2:w-[300px] xs:w-[400px] sm:w-4/5 mx-auto space-y-10 my-10'>
                <div className='space-y-6 tracking-wide'>
                    <p>Effective on April 5, 2024</p>
                    <p>At BizConnect, we believe in being clear and open about how we collect and use data related to you. This Cookie Policy applies to any BizConnect product or service that links to this policy or incorporates it by reference. We use cookies and similar technologies such as pixels, local storage and mobile ad IDs (collectively referred to in this policy as “cookies”) to collect and use data as part of our Services, as defined in our Privacy Policy (“Services”) and which includes our sites, communications, mobile applications and off-site Services, such as our ad services and the “Apply with BizConnect and “Share with BizConnect plugins or tags. In the spirit of transparency, this policy provides detailed information about how and when we use these technologies. </p>
                    <p>By continuing to visit or use our Services, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy.</p>
                </div>

                <div className='space-y-5 tracking-wide'>
                    <h2 className='text-3xl font-medium'>What third parties use these technologies in connection with our Services?</h2>
                    <p>Third parties such as our customers, partners and service providers may use cookies in connection with our Services.</p>
                    <p>For example, third parties may use cookies in their BizConnect pages, job posts and their advertisements on and off BizConnect for their own marketing purposes. For an illustration, please visit BizConnect's Help Center.</p>
                    <p>Third parties may also use cookies in connection with our off-site Services, such as BizConnect ad services. Third parties may use cookies to help us to provide our Services. We may also work with third parties for our own marketing purposes and to enable us to analyze and research our Services.</p>
                </div>

                <div className='space-y-5 tracking-wide'>
                    <h2 className='text-3xl font-medium'>Your Choices</h2>
                    <p>You have choices on how BizConnect uses cookies and similar technologies. Please note that if you limit the ability of BizConnect to set cookies and similar technologies, you may worsen your overall user experience, since it may no longer be personalized to you. It may also stop you from saving customized settings like login information.</p>
                </div>

                <div className='space-y-5 tracking-wide'>
                    <h2 className='text-3xl font-medium'>Browser Controls</h2>
                    <p>Most browsers allow you to control cookies through their settings, which may be adapted to reflect your consent to the use of cookies. Further, most browsers also enable you to review and erase cookies, including BizConnect cookies. To learn more about browser controls, please consult the documentation that your browser manufacturer provides.</p>
                </div>

                <div className='space-y-5 tracking-wide'>
                    <h2 className='text-3xl font-medium'>What is Do Not Track (DNT)?</h2>
                    <p>DNT is a concept that has been promoted by regulatory agencies such as the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing Internet users to control the tracking of their online activities across websites by using browser settings. As such, BizConnect does not generally respond to “do not track” signals.</p>
                </div>
            </div>
        </div>
    )
}

export default CookiePolicy