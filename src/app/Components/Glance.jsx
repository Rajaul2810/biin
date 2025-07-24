"use client"
import Image from 'next/image'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaHandshake, FaGlobe, FaTrophy, FaUsers, FaRocket } from 'react-icons/fa'
import about2 from '../../../public/about2.jpeg'
import about from '../../../public/about.jpg'

const impactMetrics = [
  {
    icon: <FaUserGraduate className="text-blue-500" size={24} />,
    label: "Students Empowered",
    value: "10,000+",
    description: "Young individuals equipped with digital skills"
  },
  {
    icon: <FaHandshake className="text-emerald-500" size={24} />,
    label: "Partner Organizations",
    value: "50+",
    description: "Strategic partnerships across sectors"
  },
  {
    icon: <FaGlobe className="text-purple-500" size={24} />,
    label: "Active Chapters",
    value: "50+",
    description: "Nationwide presence and reach"
  },
  {
    icon: <FaTrophy className="text-yellow-500" size={24} />,
    label: "Events Organized",
    value: "100+",
    description: "Hackathons, workshops, and competitions"
  },
  {
    icon: <FaUsers className="text-indigo-500" size={24} />,
    label: "Communities Served",
    value: "25+",
    description: "Urban and rural areas covered"
  },
  {
    icon: <FaRocket className="text-pink-500" size={24} />,
    label: "Startups Supported",
    value: "200+",
    description: "Entrepreneurial ventures incubated"
  }
];

const Glance = () => {
    return (
        <section className='pt-10 pb-14 bg-gradient-to-br from-slate-50 to-gray-100'>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className='text-5xl text-center font-bold pb-5 text-gray-700'>Impact at a Glance</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
                From urban tech hubs to underserved regions, BIIN&apos;s reach continues to expand nationwide.
              </p>
            </motion.div>
            
            <div className="max-w-7xl mx-auto px-4">
              {/* Impact Metrics Grid */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              >
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      {metric.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</h3>
                    <p className="text-sm font-semibold text-gray-700 mb-2">{metric.label}</p>
                    <p className="text-xs text-gray-500">{metric.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Key Programs Section */}
              <div className='flex justify-center items-center pb-10'>
                <div className='w-11/12 md:w-3/4 grid gap-6 grid-cols-1 md:grid-cols-2 place-items-center'>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Featured Programs</h3>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Youth IT Training Program</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Bangladesh National ICT Fest</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />ICT Job Fair & Internship Expo</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Startup Bootcamps</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Campus Club Leadership Program</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />National Hackathons & Innovation Contests</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <a href="https://forms.gle/tqTmSpieThsCeQFV6" target='_blank'>
                      <Image src={about} alt='BIIN Programs and Activities' width='100%' className='rounded-md shadow-lg hover:shadow-xl transition-shadow' />
                    </a>
                  </motion.div>
                </div>
              </div>
              
              <div className='flex justify-center items-center'>
                <div className='w-11/12 md:w-3/4 grid gap-6 grid-cols-1 md:grid-cols-2 place-items-center'>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a href="https://forms.gle/5GYLHndDiLfrc5br6" target='_blank'>
                      <Image src={about2} alt='BIIN Impact and Achievements' width='100%' className='rounded-md shadow-lg hover:shadow-xl transition-shadow' />
                    </a>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Initiatives</h3>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Digital Literacy Campaigns</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />University Club Programs</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Tech Talks & Workshops</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Esports & Gaming Tournaments</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Learning Platforms for Remote Learners</p>
                    <p className='flex items-center mb-2 p-3 bg-white text-gray-600 shadow-md w-full rounded-md hover:shadow-lg transition-shadow'><BsFillCheckCircleFill color='teal' className='me-2' />Community-Based Tech Initiatives</p>
                  </motion.div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Glance