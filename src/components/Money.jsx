import React from 'react'

const Money = () => {
  return (
    <section>
        <div className='flex flex-col items-center justify-center mt-[3rem] mb-[3rem] py-[20px] space-y-4 w-full bg-[#1f1e1e] shadow-2xl shadow-[#000000] rounded-[10px] w-[90%] mx-auto'>
            <p className='text-[#e2e0e0] text-[25px] text-center font-semibold pt-[1rem] pb-[1rem]'>30-Day Money-Back Guarantee</p>
            <p className='text-[#e2e0e0] text-[15px] font-normal text-center px-3'>We'll refund your payment if you’re not 100% satisfied with Hostinger. No hassle, no risk.</p>

            <button type='button' className='rounded-[60px] px-[5rem] py-3 outline-none bg-[#2e2c2c] text-[15px] font-medium shadow-sm shadow-[#000] font-medium text-[#e2e0e0] hover:bg-[#fff] hover:text-[#000]'>Try Now</button>    
        </div>
    </section>
  )
}

export default Money