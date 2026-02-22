"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className=' pt-10 pb-14 bg-gradient-to-r from-gray-800 to-gray-900'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
               
                <div className=' flex justify-center'>
                <div className=' gap-5 w-full md:w-3/4 px-4 grid grid-cols-2 md:grid-cols-4 py-6'>
                        <div className='flex justify-center items-center gap-4 py-4'>
                            <div>
                                {
                                    counterOn && <p className=' text-center text-4xl sm:text-5xl md:text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={10000} />+</p>
                                }
                                <p className='text-center text-white font-bold text-sm md:text-md'>Students Connected</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 py-4'>
                            <div>
                                {counterOn && <p className=' text-center text-4xl sm:text-5xl md:text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={50} />+</p>
                                }
                                <p className='text-center text-white font-bold text-sm md:text-md'>Our Partners</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 py-4'>
                            <div>
                                {counterOn && <p className=' text-center text-4xl sm:text-5xl md:text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={50} />+</p>
                                }
                                <p className='text-center text-white font-bold text-sm md:text-md'>Our Chapters</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 py-4'>
                            <div>
                                {counterOn && <p className=' text-center text-4xl sm:text-5xl md:text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={25} />+</p>
                                }
                                <p className='text-center text-white font-bold text-sm md:text-md'>Committee Members</p>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollTrigger>

        </div>
    )
}

export default Counter