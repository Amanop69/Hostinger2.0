import React, { useState, useEffect } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState()
    const [minutes, setMinutes] = useState()
    const [hours, setHours] = useState()
    const [days, setDays] = useState()

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Nov 20, 2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if(distance<0){
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        },1000);
    };

    useEffect(()=>{
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

  return (
    <section>
        <div className='bg-[#1f1e1e] flex w-[100%] justify-center p-4'>
            <div className='time'>
                <p>{days}</p>
            </div>
            <div className='time'>
                <p>{hours}</p>
            </div>
            <div className='time'>
                <p>{minutes}</p>
            </div>
            <div className='time'>
                <p>{seconds}</p>
            </div>
        </div>
        <div className='flex w-[100%] justify-center'>
            <div className='day'>
                <p className='pr-[15px]'>Days</p>
            </div>
            <div className='day'>
                <p className='pr-2'>Hours</p>
            </div>
            <div className='day'>
                <p className='pl-[3px]'>Minutes</p>
            </div>
            <div className='day'>
                <p className='pl-[11px]'>Seconds</p>
            </div>
        </div>
    </section>
    
  )
}

export default Timer