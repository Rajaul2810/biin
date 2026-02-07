"use client";
import React from "react";
import hero from "../../../public/BIIN-Logo.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaUserGraduate, FaHandshake, FaLightbulb } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={36} className="text-blue-500" />,
    label: "Students Empowered",
    value: "10,000+",
    bg: "bg-blue-50",
    border: "border-blue-200"
  },
  {
    icon: <FaHandshake size={36} className="text-emerald-500" />,
    label: "Partner Organizations",
    value: "50+",
    bg: "bg-emerald-50",
    border: "border-emerald-200"
  },
  {
    icon: <FaLightbulb size={36} className="text-yellow-500" />,
    label: "Active Chapters",
    value: "50+",
    bg: "bg-yellow-50",
    border: "border-yellow-200"
  }
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-900 via-indigo-900 to-emerald-900 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] py-10">
        <div className="w-11/12 max-w-7xl grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 text-center md:text-left drop-shadow-lg"
            >
              Bangladesh ICT &
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 text-center md:text-left drop-shadow-lg mt-2"
            >
              Innovation Network
            </motion.h1>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, type: "spring" }}
              className="text-2xl sm:text-3xl font-bold text-emerald-300 text-center md:text-left mt-4"
            >
              Empowering Youth Through Technology & Innovation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-lg sm:text-xl text-gray-200 mt-6 mb-6 text-center md:text-left max-w-xl"
            >
              Welcome to BIIN – Bangladesh ICT & Innovation Network, a registered non-profit trust dedicated to transforming the future of Bangladesh through ICT skill development, startup incubation and youth empowerment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold shadow-lg hover:from-sky-500 hover:to-emerald-500 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Join BIIN <FiArrowRight size={22} />e
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald-400 text-emerald-300 font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          {/* Right: Image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden ">
              <Image
                src={hero}
                alt="BIIN - Empowering Youth Through Technology"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-xl w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Stats Card */}
      <div className="relative z-20 flex justify-center -mb-32">
        <div className="w-11/12 max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl py-7 px-4 sm:px-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center gap-3 py-4 px-2 rounded-xl border ${stat.bg} ${stat.border} hover:shadow-lg transition-shadow duration-200`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-2">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 font-medium text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Spacer for stat card overlap */}
      <div className="h-32"></div>
    </section>
  );
};

export default Hero;
