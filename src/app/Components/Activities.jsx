"use client"
import React from 'react'
import { BsFillSafe2Fill, BsFillMortarboardFill, BsFillCpuFill, BsFillLightningChargeFill } from 'react-icons/bs'
import { IoGameController, IoLaptop, IoLayers, IoMedical, IoRibbon, IoCode, IoBusiness, IoSchool, IoGlobe } from 'react-icons/io5'
import { FaLaptopCode, FaUsers, FaGraduationCap, FaHandshake, FaLightbulb, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

const sizes = 32;
const data = [
    {
        id: 1,
        title: 'ICT & Programming Training',
        icon: <FaLaptopCode size={sizes} />,
        description: 'Comprehensive training in programming and ICT skills'
    },
    {
        id: 2,
        title: 'Digital Literacy Campaigns',
        icon: <IoGlobe size={sizes} />,
        description: 'Rural Bangladesh digital literacy initiatives'
    },
    {
        id: 3,
        title: 'Hackathons & Codeathons',
        icon: <IoCode size={sizes} />,
        description: 'Tech competitions and innovation contests'
    },
    {
        id: 4,
        title: 'Startup Incubation',
        icon: <FaRocket size={sizes} />,
        description: 'Entrepreneurial support and mentorship'
    },
    {
        id: 5,
        title: 'Esports & Gaming Tournaments',
        icon: <IoGameController size={sizes} />,
        description: 'Competitive gaming and esports events'
    },
    {
        id: 6,
        title: 'Tech Talks & Workshops',
        icon: <FaLightbulb size={sizes} />,
        description: 'Educational sessions and skill development'
    },
    {
        id: 7,
        title: 'University Club Programs',
        icon: <FaUsers size={sizes} />,
        description: 'Campus engagements and student leadership'
    },
    {
        id: 8,
        title: 'Learning Platforms',
        icon: <FaGraduationCap size={sizes} />,
        description: 'Remote learning solutions for students'
    },
    {
        id: 9,
        title: 'Youth IT Training Program',
        icon: <IoLaptop size={sizes} />,
        description: 'Comprehensive youth development program'
    },
    {
        id: 10,
        title: 'Bangladesh National ICT Fest',
        icon: <IoRibbon size={sizes} />,
        description: 'National technology festival and showcase'
    },
    {
        id: 11,
        title: 'ICT Job Fair & Internship Expo',
        icon: <FaHandshake size={sizes} />,
        description: 'Career opportunities and industry connections'
    },
    {
        id: 12,
        title: 'Startup Bootcamps',
        icon: <IoBusiness size={sizes} />,
        description: 'Intensive entrepreneurship training'
    }
]

const Activities = () => {
    return (
        <div className="min-h-screen w-full bg-[#f8fafc] relative">
            {/* Top Fade Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 30px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                }}
            />
            {/* Your Content/Components */}
            <section className="py-14 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                            Programs That Power the Future
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            BIIN designs and delivers a range of skill-building and impact-driven initiatives to make IT education in Bangladesh more inclusive and future-ready.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {data.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group border border-gray-200 hover:border-emerald-300"
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                                    <span className="text-white">
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className="text-center text-base font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                                    {item.title}
                                </h3>
                                <p className="text-center text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Activities