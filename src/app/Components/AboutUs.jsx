"use client";
import React from "react";
import about1 from "../../../public/about1.jpg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaGlobe, FaHandshake, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="pb-14 bg-slate-50 pt-40">
      <div>
        <div className="flex justify-center">
          <div className="w-11/12 md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="">
              <h1 className="text_heading_bg text-5xl font-bold">
                Who We Are
              </h1>
              <motion.p
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="text-gray-700 pt-5 pb-3 mb-5 text-justify"
              >
                BIIN is a national platform committed to shaping the digital future of Bangladesh. With 10,000+ connected students, 50+ strategic partners, and 50+ active chapters, we work across urban and rural areas to provide high-impact programs in ICT education, entrepreneurship and digital innovation.
              </motion.p>
              <motion.p
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                  delay: 0.2,
                }}
                className="text-gray-700 pb-3 mb-5 text-justify"
              >
                We operate under a registered Trust Deed, ensuring legal transparency, structured governance and national reach. Our advisory panel includes national and global leaders in ICT and youth development.
              </motion.p>
              
              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-lg text-white"
                >
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-300" />
                    Our Mission
                  </h3>
                  <p className="text-sm">
                    To equip the youth of Bangladesh with digital skills, foster innovation and build a generation of tech-savvy leaders who drive social and economic development.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-gradient-to-br from-sky-500 to-indigo-600 p-4 rounded-lg text-white"
                >
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <FaGlobe className="text-emerald-300" />
                    Our Vision
                  </h3>
                  <p className="text-sm">
                    To create a digitally inclusive society by building a sustainable ecosystem where young individuals thrive through technology, entrepreneurship, and community collaboration.
                  </p>
                </motion.div>
              </div>
              
              <p className="mb-5">
                <Link
                  href="/about"
                  className="btn text-white bg-gradient-to-r from-teal-600 to-teal-500 p-3 shadow-md pe-5 ps-5 rounded-md hover:scale-105 duration-150 transition"
                >
                  Learn More
                </Link>
              </p>
            </div>
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              <a href="https://forms.gle/pocQfGR3gBVScM2L9">
                <Image
                  src={about1}
                  alt="BIIN - Empowering Youth Through Technology"
                  height="100%"
                  width="100%"
                  className="rounded-md"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
