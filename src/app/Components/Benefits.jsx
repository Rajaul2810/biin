"use client"
import React from 'react'
import { BsArrowRight, BsFillCheckCircleFill } from 'react-icons/bs'

const Benefits = () => {
    return (
        <section className='pt-10 pb-14 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-3xl m-5'>
            <h1 className=' text-2xl text-center font-bold pb-5'>Club Benefits</h1>
            <div>
                <div className=' flex justify-center items-center'>
                    <div className=' w-11/12 md:w-3/4 grid gap-3 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 place-items-center '>
                        <div className='md:col-span-2 h-72 overflow-auto'>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md '><BsFillCheckCircleFill color='white' className=' me-2' />Cutting-Edge IT Training</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md'><BsFillCheckCircleFill color='white' className=' me-2' /> Industry-Relevant Certifications</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md'><BsFillCheckCircleFill color='white' className=' me-2' />Mentorship and Guidance</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md'><BsFillCheckCircleFill color='white' className=' me-2' />Networking Opportunities</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md'><BsFillCheckCircleFill color='white' className=' me-2' />Entrepreneurial Support</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md'><BsFillCheckCircleFill color='white' className=' me-2' /> Club Profile from our website</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md'><BsFillCheckCircleFill color='white' className=' me-2' /> Activating leadership skill</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md '><BsFillCheckCircleFill color='white' className=' me-2' /> Community Engagement</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md '><BsFillCheckCircleFill color='white' className=' me-2' /> Free Course for Clubs</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md '><BsFillCheckCircleFill color='white' className=' me-2' /> Internship and Job Opportunities</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md '><BsFillCheckCircleFill color='white' className=' me-2' /> All National BIIN Events , your club Branding</p>
                            <p className='flex items-center mb-2 p-2 bg-teal-500 shadow-md w-full rounded-md '><BsFillCheckCircleFill color='white' className=' me-2' /> Recognition and Awards</p>
                        </div>
                        <div>
                            <h1 className=' uppercase text-5xl font-bold text-center'>Become A <br /> Member</h1>
                        </div>
                        <div className=''>
                            <p className='mb-5 '><a href="https://docs.google.com/forms/d/e/1FAIpQLScfdsb-piOgJVgC_L3cEYOXIfuYZDPZN89dUMQa29Q7XIvCFQ/viewform" target='_blank' className=' text-white bg-gradient-to-r from-pink-700 to-pink-500 p-3  shadow-md pe-5 ps-5  rounded-md hover:scale-105 duration-150 transition animate-pulse flex items-center '>Apply Now <BsArrowRight/> </a>  </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Benefits