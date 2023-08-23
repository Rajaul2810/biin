"use client"
import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
    return (
        <section className=' bg-white'>
            <div className=' flex justify-center items-center pt-10 pb-14'>
                <div className='w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center '>
                    <div className='pb-5'>
                        <p className=' text-3xl font-extrabold  text-black'>GET IN TOUCH</p>

                        <p className=' text-md pb-5 pt-2'>Send us a note and we will be in touch shortly.</p>
                        <div className=' mb-2 flex p-3 shadow-lg  rounded-lg'>
                            <p className=' bg-gradient-to-r from-teal-600 to-teal-500 p-3 w-10 h-10 rounded-full  shadow-indigo-500/50 shadow-md'><FiMapPin color='white' /></p>
                            <div className=' ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Address:</p>
                                <p className=' text-sm'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='mb-2 flex p-3 shadow-lg me-1 rounded-lg'>
                            <p className=' bg-gradient-to-r from-teal-600 to-teal-500 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md'><FiMail color='white' /></p>
                            <div className=' ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Mailbox:</p>
                                <a href='mailto:BDICTInnovationNetwork@gmail.com' className=' text-sm'>BDICTInnovationNetwork@gmail.com</a>
                            </div>
                        </div>
                        <div className=' mb-2 flex p-3 shadow-lg me-1 rounded-lg'>
                            <p className=' bg-gradient-to-r from-teal-600 to-teal-500 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md'><FiPhone color='white' /></p>
                            <div className='ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Phone:</p>
                                <p className=' text-sm'>+88 01854555534</p>
                            </div>
                        </div>

                    </div>
                    <div className='p-1 w-full shadow-md rounded-md'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462637537881!2d90.39441832949385!3d23.778895394671153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1691230330521!5m2!1sen!2sbd" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact