"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mission from '../../../public/mission.jpg'
import { FaLightbulb, FaEye } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="bg-slate-100 pt-10 pb-14">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-700 py-5">
          Our Mission & Vision
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
          BIIN is committed to shaping the digital future of Bangladesh through innovative programs and youth empowerment.
        </p>
      </motion.div>
      
      <div className="flex justify-center py-5">
        <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image src={mission} alt="BIIN Mission - Empowering Youth Through Technology" className="h-96 rounded-lg shadow-lg" />
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ x: "2rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-yellow-300" size={24} />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-justify text-white/90 leading-relaxed">
                To equip the youth of Bangladesh with digital skills, foster innovation and build a generation of tech-savvy leaders who drive social and economic development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: "2rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-500 to-indigo-600 p-6 rounded-2xl shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-emerald-300" size={24} />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-justify text-white/90 leading-relaxed">
                To create a digitally inclusive society by building a sustainable ecosystem where young individuals thrive through technology, entrepreneurship, and community collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
