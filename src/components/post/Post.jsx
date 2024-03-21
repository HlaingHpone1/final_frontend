import React from 'react'
import images from '../image/Image'

const Post = () => {
  return (
    <section className='w-[608px] bg-[#454545]  rounded-2xl'>
      <div className=''>

        {/* 1st row */}
        <div className='flex mx-4 justify-between  py-3'>
          <div className='flex gap-2'>
            <div>
              <img src={images.userProfile} className='rounded-full size-[55px] border border-[#858484]'/>
            </div>
            <div>
              <h2 className=' text-[14px] text-white'>Stack Overflow</h2>
              <p className='text-xs text-[#9E9C9C]'>111,111 Followers</p>
              <p className='text-xs text-[#9E9C9C]'>time</p>
            </div>
          </div>
          <div>
            <button><img src={images.dot} className='size-6 mr-2' /></button>
            <button><img src={images.cancel} className='size-7' /></button>
          </div>
        </div>

        {/* 2nd row */} 
        <div className='mx-4 text-[14px] text-white mb-5'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro ullam rerum aliquid, praesentium repellat. Fuga, animi cupiditate dolorem distinctio cum perferendis maiores natus, neque eum quidem minus, qui doloremque sapiente molestias!</p>
        </div>

        {/* 3rd row */}
        <div>
          <img src="https://media.licdn.com/dms/image/D4D12AQFnCYxD2OfXcw/article-cover_image-shrink_720_1280/0/1683640384039?e=2147483647&v=beta&t=EtjgiP-VUcpypliSOUlhDJZ13P7lKMqjw1KK_CTef5c" alt="" />
        </div>

        {/* 4th row */}
        <div className='flex justify-between text-xs text-white mx-4 my-2 border-b'>
          <div className='flex gap-1'>
            <img src={images.likefull} className='size-6 mb-2' />
            <p className='my-auto'>234</p>
          </div>
          <div className='flex my-auto gap-4'>
            <p>234 Comment</p>
            <p>234 Repost</p>
          </div>
        </div>

        {/* 5th row */}
        <div className='flex mx-4 justify-around text-white text-[14px] py-3'>
          <div className='flex gap-1'>
            <img src={images.like} className='size-6' />
            <p>Like</p>
          </div>
          <div className='flex gap-1'>
            <img src={images.comment} className='size-6 my-auto' />
            <p>Comment</p>
          </div>
          <div className='flex gap-1'>
            <img src={images.repost} className='size-6' />
            <p>Repost</p>
          </div>
          <div className='flex gap-1'>
            <img src={images.send} className='size-6 ' />
            <p>Send</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Post