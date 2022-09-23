import React from 'react'

const Domain = () => {
  return (
    <section>
        <div className='mt-[3rem] mb-[3rem] py-[20px] space-y-4 w-full bg-[#1f1e1e] shadow-2xl shadow-[#000000] rounded-[10px] w-[90%] mx-auto'>
            <p className='text-[#e2e0e0] text-[25px] text-center font-semibold pt-[1rem] pb-[1rem]'>Find the perfect domain name</p>
            <p className='text-[#e2e0e0] text-[15px] font-normal text-center px-3'>Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</p>

            <form action="https://www.google.com/search" method="get" className='flex items-center justify-center py-[1rem]'>
                <input type="text" placeholder="Search Domain Name" name="domain" 
                className='w-[100%] max-w-[300px] rounded-l-[60px] outline-none px-[3rem] py-3 bg-[#3b3b3b] sm:max-w-[500px]'
                />
                <button type='submit' className='rounded-r-[60px] px-[2rem] py-3 outline-none bg-[#2e2c2c] shadow-sm shadow-[#000] font-medium text-[#e2e0e0] hover:bg-[#fff] hover:text-[#000]'>Search</button>
            </form>
        </div>
    </section>
  )
}

export default Domain