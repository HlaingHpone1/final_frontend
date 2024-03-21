import React from 'react'
import images from '../image/Image'

const Post = () => {
  return (
    <section className='w-[608px] bg-[#7B7777]  rounded-2xl'>
      <div className=''>

        {/* 1st row */}
        <div className='flex mx-4 justify-between'>
          <div className='flex'>
            <div>
              <img src={images.userProfile} className='rounded-full size-[55px] border border-[#858484]'/>
            </div>
            <div>
              <h2>Stack Overflow</h2>
              <p>111,111 Followers</p>
              <p>time</p>
            </div>
          </div>
          <div>
            <button><img src={images.dot} className='size-10' /></button>
            <button><img src={images.cross} className='size-10' /></button>
          </div>
        </div>

        <div className='mx-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro ullam rerum aliquid, praesentium repellat. Fuga, animi cupiditate dolorem distinctio cum perferendis maiores natus, neque eum quidem minus, qui doloremque sapiente molestias!</p>
        </div>

        <div>
          <img src="" alt="" />
        </div>

        <div className='flex'>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div className='flex'>
            <p>234 Comment</p>
            <p>234 Repost</p>
          </div>
        </div>

        <div className='flex'>
          <div>
            <img src="" alt="" />
            <p>Like</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Comment</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Repost</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Send</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post