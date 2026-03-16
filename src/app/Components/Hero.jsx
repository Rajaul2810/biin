"use client";
import React from "react";
import hero from "../../../public/BIIN Profile Image/Biin_Web_Image.png";
import biinLogo from "../../../public/BIIN_Logo.png";
import biin from "../../../public/BIIN Profile Image/Biin_Logo_White.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaUserGraduate, FaHandshake, FaLightbulb } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={22} className="text-blue-500" />,
    label: "Students Empowered",
    value: "10,000+",
    bg: "bg-blue-50",
    border: "border-blue-200"
  },
  {
    icon: <FaHandshake size={22} className="text-emerald-500" />,
    label: "Partner Organizations",
    value: "50+",
    bg: "bg-emerald-50",
    border: "border-emerald-200"
  },
  {
    icon: <FaLightbulb size={22} className="text-yellow-500" />,
    label: "Active Chapters",
    value: "50+",
    bg: "bg-yellow-50",
    border: "border-yellow-200"
  }
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#152a6e] via-[#1a3a9a] to-[#145e5a] overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400 opacity-25 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-400 opacity-15 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.15fr] items-end md:items-end md:gap-x-14 lg:gap-x-20 xl:gap-x-24">
          {/* Left: Text */}
          <div className="flex flex-col items-center md:items-start pt-4 sm:pt-6 md:pt-4 lg:pt-6 pb-8 md:pb-12 relative z-20 md:-ml-6 lg:-ml-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-4 sm:mb-6"
            >
              <Image
                src={biin}
                alt="BIIN Logo"
                width={180}
                height={120}
                className="w-[130px] sm:w-[160px] md:w-[180px] h-auto object-contain"
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 text-center md:text-left drop-shadow-lg pb-2 text-yellow-400"
            >
              Bangladesh ICT &
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 text-center md:text-left drop-shadow-lg mt-1 text-yellow-400"
            >
              Innovation <span className="text-yellow-400">Network</span>
            </motion.h1>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, type: "spring" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-300 text-center md:text-left mt-3 sm:mt-4"
            >
              Empowering Youth Through Technology & Innovation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-sm sm:text-base md:text-lg text-gray-300/90 mt-3 sm:mt-5 mb-4 sm:mb-6 text-center md:text-left max-w-lg"
            >
              Welcome to BIIN – Bangladesh ICT & Innovation Network, a
              registered non-profit trust dedicated to transforming the future
              of Bangladesh through ICT skill development, startup incubation
              and youth empowerment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center md:items-start"
            >
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:from-teal-500 hover:to-emerald-500 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base"
              >
                Join BIIN <FiArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-emerald-400/70 text-emerald-300 font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base"
              >
                Learn more
              </Link>
            </motion.div>
          </div>
          {/* Right: Image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative flex justify-center md:justify-end items-end self-end"
          >
            <div className="relative w-full md:w-[115%] lg:w-[125%] md:-mr-14 lg:-mr-28 mb-8 md:mb-10 lg:mb-12">
              <Image
                src={hero}
                alt="BIIN - Empowering Youth Through Technology"
                width={900}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Stats Card */}
      <div className="relative z-20 flex justify-center pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-16">
        <div className="w-11/12 max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl py-5 sm:py-7 px-3 sm:px-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center gap-1 sm:gap-3 py-3 sm:py-4 px-1 sm:px-2 rounded-xl border ${stat.bg} ${stat.border} hover:shadow-lg transition-shadow duration-200`}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white shadow-md mb-1 sm:mb-2">
                {stat.icon}
              </div>
              <p className="text-base sm:text-2xl font-bold text-gray-800">
                {stat.value}
              </p>
              <p className="text-gray-500 font-medium text-center text-xs sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
