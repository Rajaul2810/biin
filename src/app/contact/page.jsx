"use client"
import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section className='bg-white'>
            <div className='flex justify-center items-center min-h-screen p-5'>
                <div className='w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8'>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className='pb-5'
                    >
                        <h1 className='text-4xl font-extrabold text-black mb-4'>Contact Us</h1>
                        <p className='text-lg pb-5 pt-2 text-gray-600'>Ready to build your future with BIIN? Get in touch with us today.</p>
                        
                        <div className='mb-4 flex p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                            <div className='bg-gradient-to-r from-emerald-600 to-teal-500 p-3 w-12 h-12 rounded-full shadow-lg flex items-center justify-center'>
                                <FiMapPin color='white' size={20} />
                            </div>
                            <div className='ms-4 text-gray-600'>
                                <p className='font-bold text-black text-lg'>Our Address:</p>
                                <p className='text-sm'>SimpleTree Attalika, Level 19, Gulshan 2, Dhaka 1212, Bangladesh</p>
                            </div>
                        </div>
                        
                        <div className='mb-4 flex p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                            <div className='bg-gradient-to-r from-emerald-600 to-teal-500 p-3 w-12 h-12 rounded-full shadow-lg flex items-center justify-center'>
                                <FiMail color='white' size={20} />
                            </div>
                            <div className='ms-4 text-gray-600'>
                                <p className='font-bold text-black text-lg'>Our Email:</p>
                                <a href='mailto:BDICTInnovationNetwork@gmail.com' className='text-sm text-emerald-600 hover:text-emerald-800 transition-colors'>BDICTInnovationNetwork@gmail.com</a>
                            </div>
                        </div>
                        
                        <div className='mb-4 flex p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                            <div className='bg-gradient-to-r from-emerald-600 to-teal-500 p-3 w-12 h-12 rounded-full shadow-lg flex items-center justify-center'>
                                <FiPhone color='white' size={20} />
                            </div>
                            <div className='ms-4 text-gray-600'>
                                <p className='font-bold text-black text-lg'>Our Phone:</p>
                                <a href='tel:+8801854555534' className='text-sm text-emerald-600 hover:text-emerald-800 transition-colors'>+88 01854555534</a>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl border border-emerald-200 hidden">
                            <h3 className="font-bold text-gray-800 mb-3">Quick Links for Search Engines</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors">• ICT Skills for Youth Bangladesh</a>
                                <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors">• Best Digital Literacy Programs in Bangladesh</a>
                                <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors">• Startup Incubation for Students</a>
                                <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors">• Campus IT Clubs in Bangladesh</a>
                                <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors">• Hackathon & Coding Contests BD</a>
                                <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors">• Free IT Courses for Students BD</a>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='p-1 w-full shadow-lg rounded-xl overflow-hidden'
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462637537881!2d90.39441832949385!3d23.778895394671153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1691230330521!5m2!1sen!2sbd" 
                            width="100%" 
                            height="500" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact