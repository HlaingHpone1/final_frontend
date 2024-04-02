import React from "react";
import QandA from "../components/faq/QandA";

const Faq = () => {
  return (
    <main className='inner max-w-1240px mx-auto px-10 xl:p-0'>
      
      <div className=' shadow-custom rounded-lg  p-6 my-10'>
        <div className='py-5'>
          <h2 className='xs2:text-lg sm:text-xl md:text-2xl font-bold text-center'>Frequenty asked questions</h2>
        </div>
        <QandA/>
      </div>
      
    </main>
  )
}

export default Faq;
