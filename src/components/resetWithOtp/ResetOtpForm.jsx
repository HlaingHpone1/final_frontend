import React, { useEffect, useState } from 'react'

const ResetOtpForm = () => {
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <form className="  min-w-[350px]"
        action=''
      // onSubmit={submitHandler}
      >

        <div className="mb-5">
          <input
            type="text"
            className="bg-transparent border-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 rounded-sm my-3"
            // onChange={inputHandler}
            required />
          <div className='flex justify-between'>
            <button>Resend OTP</button>
            <p>{remainingTime} sec</p>
          </div>
        </div>

        <button type="submit"
          className={`bg-slate-500 text-white px-5 py-2 rounded-md text-lg`}>Confirm</button>
      </form>
    </section>
  )
}

export default ResetOtpForm