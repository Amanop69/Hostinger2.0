import React from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'

const Hero = () => {
  return (
    <section className='bg-[#1f1e1e] pt-[96px] flex flex-col mb-[-10rem] sm:pb-[-10rem] md:mb-[10rem] lg:pb-[-10rem]'>
        <div>
            <div className='items-center w-[100%] h-[40vh]'>
                <h1 className='text-[#e2e0e0] text-center text-[35px] font-medium'>Everything You Need to Create a Website in
                </h1>
                <h1 className='text-[#e2e0e0] text-center text-[50px] font-semibold'>₹149.00<span className='text-[#e2e0e0] text-[20px]'>/mo</span></h1>    
                <p className='text-[#e2e0e0] text-center p-2 font-medium'>Make moves with a free domain and SSL included with a four-year subscription.</p>
                <div>
                    <Timer /> 
                </div> 
                <div className='flex justify-center items-center'>
                <Link to='/login'><button className='text-[#e2e0e0] border-2 px-[25px] py-2 rounded-[30px] mt-[30px] hover:bg-[#faf9f9] hover:text-[#1f1e1e] font-semibold'>Get Started</button></Link>
                </div> 
                <div className='flex items-center justify-center'>
                    <p className='text-[#e2e0e0] text-center mt-[30px] font-medium'><span className='pr-2'>
                            <img src={require("../assets/tick.png")} 
                               width={10}
                               height={10}
                               className="object-contain inline-block" 
                            />
                        </span>Get exclusive 30-day money-back guarantee</p>
                </div>  
            </div>
        </div>
    </section>

  )
}

export default Hero