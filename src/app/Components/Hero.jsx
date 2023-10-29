"use client";
import React from "react";
import hero from "../../../public/hero.jpg";
import Link from "next/link";
import Image from "next/image";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-10 pb-14 bg-gray-900 bg-cover">
      <div>
        <div className=" flex justify-center">
          <div className=" w-11/12 md:w-3/4 grid gap-2 grid-cols-1 md:grid-cols-2 place-items-center ">
            <div className="">
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="text-3xl sm:text-4xl text-center font-extrabold text-teal-500 pt-5"
              >
                Empowering Youth,
              </motion.h1>
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className="text-3xl sm:text-4xl text-center font-extrabold text-teal-500 pt-2"
              >
                <span> Transforming Tomorrow</span>
              </motion.h1>
              <p className=" text-gray-400 pt-5 pb-5 mb-5">
                Bangladesh ICT & Innovation Network (BIIN) is an exemplary
                 organization that stands as a beacon of hope for the
                youth of Bangladesh.
              </p>
              <p className="mb-5 text-white">
                <Link
                  href="/contact"
                  className="btn bg-gradient-to-r from-teal-600 to-teal-500 p-3  shadow-md pe-5 ps-5  rounded-md hover:scale-105 duration-150 transition"
                >
                  Contact Us
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
              <Image
                src={hero}
                alt="man"
                height="100%"
                width="100%"
                className=" rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
