"use client"
import Image from 'next/image'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import about2 from '../../../public/about2.jpeg'
import about from '../../../public/about.jpg'

const Glance = () => {
    return (
        <section className='pt-10 pb-14 bg-slate-100'>
            <h1 className=' text-2xl text-center font-bold pb-5'>At A Glance</h1>
            <div>
                <div className=' flex justify-center items-center pb-10'>
                    <div className=' w-11/12 md:w-3/4 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center '>
                        <div>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />IT Training Workshops</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' /> Digital Literacy Campaigns</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />Hackathons and Codeathons</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />Start-up Incubation</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />Youth Networking Events</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' /> IT Outreach in Rural Areas</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' /> E-Learning Platforms</p>
                        </div>
                        <div>
                            <a href="https://forms.gle/tqTmSpieThsCeQFV6" target='_blank'><Image src={about} alt='man' width='100%' className=' rounded-md' /></a>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className=' w-11/12 md:w-3/4 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center '>
                        <div>
                        <a href="https://forms.gle/5GYLHndDiLfrc5br6" target='_blank'><Image src={about2} alt='man' width='100%' className=' rounded-md' /></a>
                        </div>
                        <div>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />Social Impact Projects</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' /> Industry Partnerships</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />Tech Talks and Webinars</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />National Campus IT Fest</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' />Industrial Tour and Internship</p>
                            <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' /> ICT Job Fest</p>
                            {/* <p className='flex items-center mb-2'><BsFillCheckCircleFill color='teal' className=' me-2' /> E-Learning Platforms</p> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Glance