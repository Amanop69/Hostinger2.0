import React from 'react'

const Features = () => {
  return (
    <section>
        <div className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center text-center space-y-3 pb-3 mx-auto'>
                <p className='text-[#727272] font-medium'>SIMPLE TO USE AND MANAGE</p>
                <p className='text-[#e2e0e0] text-[25px] font-semibold'>Easy To Set Up</p>
                <p className='text-[#b1b1b1] text-[15px] pb-1 sm:px-4'>Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.</p>
                <button type='button' className='border-2 text-[#e2e0e0] px-2 rounded-[10px] font-medium py-1 hover:bg-[#faf9f9] hover:text-[#1f1e1e]'>Learn More</button>
            </div>

            <div className='w-full sm:w-1/2 flex justify-center items-center'>
            <img src={require("../assets/hero1.png")} 
                 className="object-contain"
                 width={600}
                />
            </div>
        </div>

        <div className='flex flex-col sm:flex-row-reverse'>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center text-center space-y-3 pb-3'>
                <p className='text-[#727272] font-medium'>HIGH PERFORMANCE AND SPEED</p>
                <p className='text-[#e2e0e0] text-[25px] font-semibold'>Super-Fast Websites</p>
                <p className='text-[#b1b1b1] text-[15px] pb-1 sm:px-10'>Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.</p>
                <button type='button' className='border-2 text-[#e2e0e0] px-2 rounded-[10px] font-medium py-1 hover:bg-[#faf9f9] hover:text-[#1f1e1e]'>Learn More</button>
            </div>

            <div className='w-full sm:w-1/2 flex justify-center items-center'>
            <img src={require("../assets/startup.png")} 
                 className="object-contain"
                 width={400}
                />
            </div>
        </div>

        <div className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center text-center space-y-3 pb-3'>
                <p className='text-[#727272] font-medium mt-2'>GREAT WORDPRESS EXPERIENCE</p>
                <p className='text-[#e2e0e0] text-[25px] font-semibold'>One Click WordPress Install</p>
                <p className='text-[#b1b1b1] text-[15px] pb-1 px-[1rem]'>Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.</p>
                <button type='button' className='border-2 text-[#e2e0e0] px-2 rounded-[10px] font-medium py-1 hover:bg-[#faf9f9] hover:text-[#1f1e1e]'>Learn More</button>
            </div>

            <div className='w-full sm:w-1/2 flex justify-center items-center'>
            <img src={require("../assets/wordpress.png")} 
                 className="object-contain"
                 width={350}
                />
            </div>
        </div>

        <div className='flex flex-col sm:flex-row-reverse'>
            <div className='flex flex-col items-center justify-center text-center space-y-3 pb-3'>
                <p className='text-[#727272] font-medium mt-4'>HANDS-ON CONTACT SUPPORT</p>
                <p className='text-[#e2e0e0] text-[25px] font-semibold'>24/7 Support</p>
                <p className='text-[#b1b1b1] text-[15px] pb-1 px-[1rem]'>Our team of experts will solve technical issues to get your websites up and running. Anytime.</p>
                <button type='button' className='border-2 text-[#e2e0e0] px-2 rounded-[10px] font-medium py-1 hover:bg-[#faf9f9] hover:text-[#1f1e1e]'>Contact Now</button>
            </div>

            <div className='w-full sm:w-1/2 flex justify-center items-center'>
            <img src={require("../assets/supp.png")} 
                 className="object-contain"
                 width={350}
                />
            </div>
        </div>

        <div className='flex flex-col sm:flex-row'>
            <div className='flex flex-col items-center justify-center text-center space-y-3 pb-3'>
            <p className='text-[#e2e0e0] text-center text-[25px] font-semibold'>User-Friendly Control Panel</p>
                <div className='flex gap-2'>
                <img src='./account.svg' 
                width={20}
                />
                <p className='text-[#e2e0e0] text-[20px] font-semibold'>Ease of Use</p>
                </div>
                <p className='text-[#b1b1b1] text-[15px] pb-1 px-[2rem]'>Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development.</p>
                
                <div className='flex gap-2'>
                <img src='./power.svg' 
                width={20}
                />
                <p className='text-[#e2e0e0] text-[20px] font-semibold'>Powerful</p>
                </div>
                <p className='text-[#b1b1b1] text-[15px] pb-1 px-[2rem]'>A wide variety of tools to satisfy advanced user and website developer needs.</p>

                <div className='flex gap-2'>
                <img src='./wordpress.svg' 
                width={20}
                />
                <p className='text-[#e2e0e0] text-[20px] font-semibold'>WordPress Optimized</p>
                </div>
                <p className='text-[#b1b1b1] text-[15px] pb-1 px-[2rem]'>Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache.</p>
            </div>

            <div className='w-full sm:w-1/2 flex justify-center items-center'>
            <img src={require("../assets/panel.png")} 
                 className="object-contain"
                 width={400}
                />
            </div>
        </div>
    </section>
  )
}

export default Features