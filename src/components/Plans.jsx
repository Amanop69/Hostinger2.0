import React from 'react'
import Partner from './Partner'

const Plans = () => {
  return (
    <>
    <section className='mt-[25rem] sm:mt-[18rem] md:mt-[14rem] lg:mt-[10rem]'>
    <div className='mt-[5rem]'>
        <Partner />
    </div>
        <div className='flex justify-center items-center p-[2rem]  font-semibold'>
            <p className='text-[#e2e0e0] text-center text-[30px]'>Best Web Hosting Plans</p>
        </div>
            <div className='w-[100%] flex justify-center items-center p-[5px] px-[1rem] mt-[-10px] sm:px-[5rem] md:px-[10rem]'>
                <p className='text-[#e2e0e0] text-[14px] text-center font-light'>We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go our custom-built algorithm will provide suggestions based on your usage.</p>
            </div>


        <div className='flex flex-col sm:flex-row sm:justify-center sm:flex-wrap sm:space-x-[20px]'>
        <div className='mt-[2rem] flex items-center justify-center'>
            <div className='bg-[#1f1e1e] p-1 transition ease-in-out hover:scale-110 duration-300 w-[80%] rounded-[10px] shadow-lg shadow-[#000000] sm:w-[20rem]'>
                <p className='bg-[#e2e0e0] px-4 py-1 rounded-[10px] text-center text-[20px] font-semibold'>Most Loved</p>
                <p className='text-[#e2e0e0] p-5 text-[20px] text-center font-medium'>Premium Web Hosting</p>
                <p className='text-[#e2e0e0] text-center text-[15px]'>Perfect package for personal websites</p>

                {/* Discount section */}

                <div className='flex items-center justify-center space-x-4 mt-[1rem]'>
                    <span className='text-[#e2e0e0] line-through opacity-50'>₹459</span> 
                    <button className='bg-[#faf9f9] px-5 py-1 rounded-[20px]'>SAVE 68%</button>
                </div>

                <p className='text-[30px] font-semibold text-center mt-3 text-[#e2e0e0]'>₹149.00<span className='text-[15px]'>/mo</span></p>

                {/* Cart Button */}

                <div className='flex justify-center items-center'>
                    <button className='text-[#e2e0e0] border-2 px-[5rem] py-2 rounded-[30px] mt-[15px] hover:bg-[#faf9f9] hover:text-[#1f1e1e] font-bold'>Add To Cart
                    </button>     
                </div> 

                <div className='mt-5'>
                    <p className='text-[#e2e0e0] font-medium text-center'>Plan Top Features</p>
                    <div className='mt-4 pb-2 flex flex-col items-center justify-center space-y-2'>
                        <p className='text-[#e2e0e0] font-bold flex items-center justify-center'>100<span className='text-[#e2e0e0] font-normal pl-2'>Websites</span></p>
                        
                        <p className='text-[#e2e0e0] font-bold inline'>100GB<span className='text-[#e2e0e0] font-normal pl-2'>SSD Storage</span></p>
                        
                        <p className='text-[#e2e0e0] font-bold inline'>25000<span className='text-[#e2e0e0] font-normal pl-2'>Visits Monthly</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Free<span className='text-[#e2e0e0] font-normal pl-2'>Email</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Bandwidth</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Database</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Free SSL</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Free<span className='text-[#e2e0e0] font-normal pl-2'>Domain</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>30 Days<span className='text-[#e2e0e0] font-normal pl-2'>Money Back</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>24/7/365<span className='text-[#e2e0e0] font-normal pl-2'>Support</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>100<span className='text-[#e2e0e0] font-normal pl-2'>SSD Subdomains</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>DNS<span className='text-[#e2e0e0] font-normal pl-2'>Management</span></p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='mt-[2rem] flex items-center justify-center'>
            <div className='bg-[#1f1e1e] p-1 transition ease-in-out hover:scale-110 duration-300 w-[80%] rounded-[10px] shadow-lg shadow-[#000000] sm:w-[20rem]'>
                <p className='bg-[#e2e0e0] px-4 py-1 rounded-[10px] text-center text-[20px] font-semibold'>Top Rated</p>
                <p className='text-[#e2e0e0] p-5 text-[20px] text-center font-medium'>VPS Hosting</p>
                <p className='text-[#e2e0e0] text-center text-[15px]'>Perfect package for personal websites</p>

                {/* Discount section */}

                <div className='flex items-center justify-center space-x-4 mt-[1rem]'>
                    <span className='text-[#e2e0e0] line-through opacity-50'>₹1399</span> 
                    <button className='bg-[#faf9f9] px-5 py-1 rounded-[20px]'>SAVE 68%</button>
                </div>

                <p className='text-[30px] font-semibold text-center mt-3 text-[#e2e0e0]'>₹429.00<span className='text-[15px]'>/mo</span></p>

                {/* Cart Button */}

                <div className='flex justify-center items-center'>
                    <button className='text-[#e2e0e0] border-2 px-[5rem] py-2 rounded-[30px] mt-[15px] hover:bg-[#faf9f9] hover:text-[#1f1e1e] font-bold'>Add To Cart
                    </button>     
                </div> 

                <div className='mt-5'>
                    <p className='text-[#e2e0e0] font-medium text-center'>Plan Top Features</p>
                    <div className='mt-4 pb-2 flex flex-col items-center justify-center space-y-2'>
                        <p className='text-[#e2e0e0] font-bold flex items-center justify-center'>100<span className='text-[#e2e0e0] font-normal pl-2'>Websites</span></p>
                        
                        <p className='text-[#e2e0e0] font-bold inline'>50GB<span className='text-[#e2e0e0] font-normal pl-2'>SSD Storage</span></p>
                        
                        <p className='text-[#e2e0e0] font-bold inline'>50000<span className='text-[#e2e0e0] font-normal pl-2'>Visits Monthly</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Free<span className='text-[#e2e0e0] font-normal pl-2'>Email</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Bandwidth</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Database</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Free SSL</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Free<span className='text-[#e2e0e0] font-normal pl-2'>Domain</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>30 Days<span className='text-[#e2e0e0] font-normal pl-2'>Money Back</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>24/7/365<span className='text-[#e2e0e0] font-normal pl-2'>Support</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Subdomains</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>DNS<span className='text-[#e2e0e0] font-normal pl-2'>Management</span></p>
                    </div>
                </div>
                
            </div>
        </div>   

        <div className='mt-[2rem] flex items-center justify-center'>
            <div className='bg-[#1f1e1e] p-1 transition ease-in-out hover:scale-110 duration-300 w-[80%] rounded-[10px] shadow-lg shadow-[#000000] sm:w-[20rem]'>
                <p className='bg-[#e2e0e0] px-4 py-1 rounded-[10px] text-center text-[20px] font-semibold'>Most Purchased</p>
                <p className='text-[#e2e0e0] p-5 text-[20px] text-center font-medium'>Cloud Hosting</p>
                <p className='text-[#e2e0e0] text-center text-[15px]'>Perfect package for personal websites</p>

                {/* Discount section */}

                <div className='flex items-center justify-center space-x-4 mt-[1rem]'>
                    <span className='text-[#e2e0e0] line-through opacity-50'>₹1600</span> 
                    <button className='bg-[#faf9f9] px-5 py-1 rounded-[20px]'>SAVE 68%</button>
                </div>

                <p className='text-[30px] font-semibold text-center mt-3 text-[#e2e0e0]'>₹799.00<span className='text-[15px]'>/mo</span></p>

                {/* Cart Button */}

                <div className='flex justify-center items-center'>
                    <button className='text-[#e2e0e0] border-2 px-[5rem] py-2 rounded-[30px] mt-[15px] hover:bg-[#faf9f9] hover:text-[#1f1e1e] font-bold'>Add To Cart
                    </button>     
                </div> 

                <div className='mt-5'>
                    <p className='text-[#e2e0e0] font-medium text-center'>Plan Top Features</p>
                    <div className='mt-4 pb-2 flex flex-col items-center justify-center space-y-2'>
                        <p className='text-[#e2e0e0] font-bold flex items-center justify-center'>100<span className='text-[#e2e0e0] font-normal pl-2'>Websites</span></p>
                        
                        <p className='text-[#e2e0e0] font-bold inline'>200GB<span className='text-[#e2e0e0] font-normal pl-2'>SSD Storage</span></p>
                        
                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Visits Monthly</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Free<span className='text-[#e2e0e0] font-normal pl-2'>Email</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Bandwidth</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Database</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Free SSL</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Free<span className='text-[#e2e0e0] font-normal pl-2'>Domain</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>30 Days<span className='text-[#e2e0e0] font-normal pl-2'>Money Back</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>24/7/365<span className='text-[#e2e0e0] font-normal pl-2'>Support</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>Unlimited<span className='text-[#e2e0e0] font-normal pl-2'>Subdomains</span></p>

                        <p className='text-[#e2e0e0] font-bold inline'>DNS<span className='text-[#e2e0e0] font-normal pl-2'>Management</span></p>
                    </div>
                </div>
                
            </div>
        </div>   
        </div>

    </section>
    </>
  )
}

export default Plans