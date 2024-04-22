"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mission from '../../../public/mission.jpg'

const Mission = () => {
  return (
    <section className=" bg-slate-100 pt-10 pb-14">
      <h1 className="text-5xl font-bold text-center text-gray-700 py-5">
        Mission & Vision
      </h1>
      <div className=" flex justify-center py-5">
        <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Image src={mission} alt="mission" className=" h-96"/>
          </div>
          <div>
            <motion.div
              initial={{ x: "-2rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid flex-grow p-5 card bg-white rounded-box shadow-sm place-items-center"
            >
              <h1 className="font-bold text-gray-700">Mission</h1>
              <p className=" text-justify text-gray-600">
                Our mission at BIIN is to empower the youth of Bangladesh by
                providing them with foster innovation, nurturing a generation of
                tech-savvy individuals capable of positively impacting society
                and contributing to the nation&apos;s socio-economic growth.
              </p>
            </motion.div>
            <div className="divider font-bold text-gray-700">
              &
            </div>
            <motion.div
              initial={{ x: "2rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid flex-grow p-5 card bg-white rounded-box shadow-sm place-items-center"
            >
              <h1 className="font-bold text-gray-700">Vision</h1>
              <p className=" text-justify text-gray-600">
                We create a vibrant ecosystem that inspires and equips young
                individuals with IT expertise and entrepreneurial spirit to
                thrive in the digital era.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
