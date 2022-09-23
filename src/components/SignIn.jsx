import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='log h-[100vh] py-10 lg:py-20'> 
        <div className='mx-auto flex pb-10'>
            <div className='flex flex-col lg:flex-row w-8/12 rounded-lg mx-auto shadow-lg overflow-hidden shadow-lg shadow-[#000000] rounded-[10px]'>
                <div className='w-full lg:w-1/2 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url("/log.png")` }}>
                    <img src="/log.png"
                    />
                    
                </div>
                <div className='w-full lg:w-1/2 py-[16px] px-12 bg-[#1f1e1e]'>
                    <h1 className='text-[20px] mb-4 font-medium text-[#e2e0e0]'>Sign In</h1>
                    <p className='mb-4 font-medium text-[#e2e0e0]'>Buy and Get 10% Discount</p>
                    <form action="#">
                 
                        <div className='mt-4'>
                            <input type="text" placeholder="Email" required className='py-1 px-2 bg-[#3b3b3b] outline-none w-full rounded-md shadow-md' />
                        </div>
                        <div className='mt-4'>
                            <input type="password" placeholder="Password" required className='py-1 px-2 bg-[#3b3b3b] outline-none w-full rounded-md shadow-md' />
                        </div>
            
                        <div className='mt-4'>
                            <button type='button' className='w-full font-medium bg-[#2e2c2c] shadow-[#000] py-2 shadow-md rounded-md text-white hover:bg-[#575555]'>
                                Sign In
                            </button>
                        </div>
                        <div className='mt-4 space-y-6'>
                            <p className='text-[#e2e0e0] font-medium text-center'>Or Sign In With :</p>
                            <div className='flex space-x-4 items-center justify-center mt-2 cursor-pointer'>
                                <img src="./google.svg" 
                                width={40}
                                height={40}
                                className='object-contain object-contain transition ease-in-out hover:scale-150 duration-300'
                                />
                                 <img src="./facebook.svg" 
                                width={40}
                                height={40}
                                className='object-contain object-contain transition ease-in-out hover:scale-150 duration-300'
                                />
                                 <img src="./git.svg" 
                                width={40}
                                height={40}
                                className='object-contain object-contain transition ease-in-out hover:scale-150 duration-300'
                                />
                            </div>
                            <div className='mt-4'>
                            <p className='text-[#e2e0e0] text-[12px] sm:text-[15px] text-center font-medium'>Don't Have Account? <Link to='/login' className='text-[#3e3be0] hover:text-[#5452eb]'>Sign Up </Link>Here</p>
                        </div>
                        </div>
                    </form>
                    <div className='flex items-center justify-center mt-10'>
                        <Link to='/'>
                        <button type='button' className='px-4 py-2 border-2 font-semibold text-[#e2e0e0] hover:bg-[#e2e0e0] hover:text-[#000] rounded-[20px]'>Continue Browsing</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SignIn