"use client"
import React from "react";
import { BsArrowRight, BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaFire, FaGraduationCap, FaHandshake, FaLightbulb, FaUsers, FaTrophy, FaRocket, FaGlobe } from "react-icons/fa";

const benefits = [
  {
    icon: <FaFire className="text-orange-400" size={20} />,
    text: "Cutting-edge IT skill development"
  },
  {
    icon: <FaGraduationCap className="text-blue-400" size={20} />,
    text: "Certified courses & real-world projects"
  },
  {
    icon: <FaGlobe className="text-green-400" size={20} />,
    text: "Access to national and International ICT events"
  },
  {
    icon: <FaHandshake className="text-purple-400" size={20} />,
    text: "Internship & job opportunities"
  },
  {
    icon: <FaLightbulb className="text-yellow-400" size={20} />,
    text: "Personalized mentorship"
  },
  {
    icon: <FaUsers className="text-indigo-400" size={20} />,
    text: "Chapter branding & recognition"
  },
  {
    icon: <FaTrophy className="text-emerald-400" size={20} />,
    text: "Leadership training & community service"
  },
  {
    icon: <FaRocket className="text-pink-400" size={20} />,
    text: "Exposure to startup & investment networks"
  }
];

const Benefits = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-sky-900 via-indigo-900 to-emerald-900 rounded-3xl shadow-2xl mx-2 sm:mx-6 my-8 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Why Join BIIN?
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Joining BIIN means becoming part of a vibrant youth tech community committed to making a difference.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* Benefits List */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-xl p-4 shadow group hover:scale-105"
                >
                  <span className="mt-1 flex-shrink-0">
                    {benefit.icon}
                  </span>
                  <span className="text-lg font-medium text-white group-hover:text-emerald-200 transition">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center w-full lg:w-1/3 mt-8 lg:mt-0"
          >
            <div className="bg-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center backdrop-blur-md">
              <div className="text-6xl mb-4">🔥</div>
              <h2 className="uppercase text-2xl sm:text-3xl font-bold text-center text-white mb-4 tracking-wide drop-shadow">
                Benefits of <span className="text-emerald-300">Joining</span>
              </h2>
                              <p className="text-center text-white/80 mb-6 text-base sm:text-lg">
                  Unlock exclusive opportunities, resources, and a vibrant community. Join us and shape the future of Bangladesh&apos;s digital landscape!
                </p>
              <a
                href="https://forms.gle/pocQfGR3gBVScM2L9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-sky-500 hover:to-emerald-500 transition-all duration-200 animate-pulse"
              >
                Join BIIN <BsArrowRight size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;