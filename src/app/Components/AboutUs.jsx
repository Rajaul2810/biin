"use client"
import React from 'react'
import about1 from '../../../public/about1.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutUs = () => {
    return (
        <section className='pt-10 pb-14 bg-slate-50'>
            <div>
                <div className=' flex justify-center'>
                    <div className=' w-11/12 md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center '>
                        <div className=''>
                            <h1 className=' font-semibold text-2xl'>About Us</h1>
                            <motion.p
                            initial={{y:'2rem',opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{
                                duration:2,
                                type:"spring"
                            }}
                            
                            className=' text-gray-700 pt-5 pb-3 mb-5 text-justify'>Bangladesh ICT & Innovation Network (BIIN) is an exemplary non-profit organization that stands as a beacon of hope for the youth of Bangladesh. By providing skill development, fostering innovation, and promoting entrepreneurship, BIIN is empowering the young generation to lead the way toward a digitally inclusive and prosperous future. Through their relentless efforts, BIIN continues to play a pivotal role in shaping the IT landscape of Bangladesh and nurturing the next generation of tech leaders.</motion.p>
                            <p className='mb-5'><Link href="/about" className='btn text-white bg-gradient-to-r from-teal-600 to-teal-500 p-3  rounded-md hover:border-2 hover:border-gray-500 '>More</Link></p>
                        </div>
                        <motion.div
                        initial={{x:'7rem',opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{
                            duration:2,
                            type:"spring"
                        }}
                        >
                           <a href="https://forms.gle/pocQfGR3gBVScM2L9"> <Image src={about1} alt='man' height="100%" width='100%' className=' rounded-md' /></a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs