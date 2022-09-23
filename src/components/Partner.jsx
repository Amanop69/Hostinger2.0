import React from 'react'

const Partner = () => {
  return (
    <section className='bg-[#2e2c2c] w-full relative'>
            <div className='flex justify-around'>
                <img src={require("../assets/word2.png")} 
                    width={180}
                    height={30}
                    className='object-contain'
                />
                <img src={require("../assets/lite.png")} 
                    width={140}
                    height={30}
                    className='object-contain'
                />
                   <img src={require("../assets/clou.png")} 
                    width={140}
                    height={30}
                    className='object-contain hidden sm:flex'
                />
            </div>
    </section>
  )
}

export default Partner