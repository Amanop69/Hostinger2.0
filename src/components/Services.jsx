import React,{ useState } from 'react'
import { motion } from 'framer-motion'

const Services = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
        <div className='my-[3rem] flex justify-center items-center'>
            <p className='text-[#e2e0e0] font-semibold text-[30px] text-center'>Our Services Includes:</p>
        </div>

        <div className='mt-[-10px] grid grid-cols-1 justify-items-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-3'>
            <div onClick={() => setIsOpen(!isOpen)} className='serv'>
                <img src='/ssl.svg' 
                width={20}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>Free SSL</p>
            </div>    
                

            <div className='serv'>
            <img src='/migration.svg' 
                width={30}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>Free Migration</p>
            </div>

            <div className='serv'>
                <img src='/backup.svg'
                width={25}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>Automated Backups</p>
            </div>

            <div className='serv'>
            <img src='/ddos.svg' 
                width={20}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>DDoS Protection</p>
            </div>

            <div className='serv'>
            <img src='/speed.svg' 
                width={25}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>PHP Speed Boost</p>
            </div>

            <div className='serv'>
            <img src='/cached.svg' 
                width={25}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>LiteSpeed Cache Plugin</p>
            </div>

            <div className='serv'>
            <img src='/suppo.svg' 
                width={20}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>24/7/365 Tech Support</p> 
            </div>

            <div className='serv'>
            <img src='/script.svg' 
                width={25}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>Auto Script Installer</p>
            </div>

            <div className='serv'>
            <img src='/uptime.svg' 
                width={25}
                className="ml-2 flex items-center justify-center"
                />
                <p className='ser'>99.9% Uptime Guarantee</p>
            </div>
        </div>
       
    </section>
  )
}

export default Services