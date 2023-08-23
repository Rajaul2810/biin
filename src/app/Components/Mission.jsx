"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Mission = () => {
    return (
        <section className=' bg-slate-100 pt-10 pb-14'>
             <h1 className=' text-2xl text-center font-bold pb-5'>Mission & Vision</h1>
            <div className=' flex justify-center'>
                <div className="flex flex-col w-11/12 md:w-3/4 md:flex-row">
                    <motion.div
                    initial={{x:'-2rem',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                     className="grid flex-grow p-5 card bg-white rounded-box place-items-center">
                        <h1 className='font-bold'>Mission</h1>
                        <p className=' text-justify'>Our mission at BIIN is to empower the youth of Bangladesh by providing them with foster innovation, nurturing a generation of tech-savvy individuals capable of positively impacting society and contributing to the nation&apos;s socio-economic growth.</p>
                    </motion.div>
                    <div className="divider md:divider-horizontal font-bold">&</div>
                    <motion.div
                    initial={{x:'2rem',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                    className="grid flex-grow p-5 card bg-white rounded-box place-items-center">
                        <h1 className='font-bold'>Vision</h1>
                        <p className=' text-justify'>We create a vibrant ecosystem that inspires and equips young individuals with IT expertise and entrepreneurial spirit to thrive in the digital era.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Mission