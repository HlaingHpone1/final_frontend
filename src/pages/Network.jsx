import React from 'react'
import Ads from "../components/ads/Ads";
import Footer from '../components/footer/Footer';
import ManageNw from '../components/network/ManageNw';
import PeopleMayKnow from '../components/suggestion/PeopleMayKnow';
import InterestedGroup from '../components/suggestion/InterestedGroup';

const Network = () => {
  return (
    <main className='bg-[#EBEBEB]'>
        <div className=' xs2:max-w-72 xs:max-w-md sm:max-w-xl md:max-w-[758px] lg:max-w-[1000px] xl:max-w-1240px mx-auto font-Roboto'>
            <div className='xs2:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid pt-6 gap-6 drop-shadow-lg '>
                <section className=' col-span-1 bg-white rounded-lg text-black h-fit'>
                    <ManageNw/>
                    <div className=' pt-28 pb-7'>
                        <Ads/>
                        <Footer/>
                    </div>
                </section>
                <section  className='xs:col-span-1 sm:col-span-2 lg:col-span-3  bg-white rounded-lg'>
                    <div className=' p-5'>
                        <div className=' mb-3'>
                            <div className='flex justify-between mb-3'>
                                <p className=' text-2xl'>People You May Know</p>
                                <a href="" className=' text-xl'>See all</a>
                            </div>
                            <div className=' grid grid-cols-3 gap-y-5 py-3 pl-9'>
                                <PeopleMayKnow/>
                                <PeopleMayKnow/>
                                <PeopleMayKnow/>
                                <PeopleMayKnow/>
                                <PeopleMayKnow/>
                                <PeopleMayKnow/>
                            </div>
                            
                        </div>
                        <div>
                            <div className='flex justify-between mb-3'>
                                <p className=' text-2xl'>Groups you might be interested in</p>
                                <a href="" className=' text-xl'>See all</a>
                            </div>
                            <div className=' grid grid-cols-3 gap-y-5 py-3 pl-9'>
                                <InterestedGroup/>
                                <InterestedGroup/>
                                <InterestedGroup/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}

export default Network