import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  return (
    <section>
      <nav className={`${isScrolled && 'bg-[#2e2c2c]'} py-3 sm:py-3 md:py-0`}>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <NavLink to="/">
              <img src={require('../assets/i.png')} 
              width={250}
              height={150}
              className='object-contain pl-3'
              />
              </NavLink>
  
              <img src={require('../assets/ind.png')} 
              width={60}
              height={60}
              className='hidden object-contain sm:flex ml-2'
              />
              <p className='hidden sm:flex text-slate-300'>English</p>
              </div>
            <div className='flex items-center space-x-2 md:space-x-4 justify-between md:hidden mr-2'>
            <a href='/login'><button type='button' className='text-white login'>Log In</button></a>
                <img 
                  src={isToggle ? '/close.svg' : '/menu.svg'}
                  width={40}
                  alt='menu'
                  className='cursor-pointer'
                  onClick={() => setIsToggle((prev) => !prev)}
                />  

                <div className={`${isToggle ? 'flex' : 'hidden'} 
                p-6 bg-[#6145e0] absolute top-20 right-2 mx-4 my-2 min-w-[140px] rounded-xl sidebar
                `}>
                  <ul className='flex flex-col p-5 text-slate-300 font-light cursor-pointer'>
                <li className='linkk'>Hosting</li>
                <li className='linkk'>VPS</li>
                <li className='linkk'>Email</li>
                <li className='linkk'>Domain</li>
        
                <svg className='fill-current text-[white] transition ease-in-out hover:scale-110 duration-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

              </ul>          
                </div>
            </div>  
          
              <ul className='hidden md:flex space-x-4 p-5 text-slate-300 font-light cursor-pointer'>
                <li className='links'>Hosting</li>
                <li className='links'>VPS</li>
                <li className='links'>Email</li>
                <li className='links'>Domain</li>
                <NavLink to="./login">
                <button type='button' className='text-white login'>Log In</button>
                </NavLink>
                <img src='/cart.svg' 
                width={40}
                className='cursor-pointer'
                />  
              </ul>          
          </div>
      </nav>
    </section>
  )
}

export default Navbar