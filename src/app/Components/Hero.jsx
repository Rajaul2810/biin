"use client";
import React from "react";
import hero from "../../../public/hero.jpg";
import Link from "next/link";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { HiBookOpen, HiCube, HiUserGroup } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="pt-10 pb-14 bg-gray-900 bg-cover">
      <div className=" flex items-center justify-center md:h-[500px]">
        <div className=" w-11/12 md:w-10/12 grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="text-3xl sm:text-5xl text-center font-extrabold text-teal-500 pt-5"
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
              className="text-3xl sm:text-5xl text-center font-extrabold text-teal-500 pt-2"
            >
              <span> Transforming Tomorrow</span>
            </motion.h1>
            <p className=" text-gray-400 pt-5 pb-5 mb-5 text-justify">
              Bangladesh ICT & Innovation Network (BIIN) is an exemplary
              organization that stands as a beacon of hope for the youth of
              Bangladesh.By providing skill development, fostering innovation,
              and promoting entrepreneurship, BIIN is empowering the young
              generation to lead the way toward a digitally inclusive and
              prosperous future.
            </p>
            <p className="mb-5 ">
              <Link
                href="/contact"
                className="btn text-white md:w-fit flex justify-center bg-gradient-to-r from-teal-600 to-teal-500 p-3  shadow-md rounded-md hover:scale-105 duration-150 transition"
              >
                Contact Us <FiArrowRightCircle />
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
            className=" h-full w-full"
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
      <div className=" flex justify-center -mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white shadow-xl rounded-lg py-5 place-items-center">
          <div className=" border-b-2 md:border-r-2 md:border-b-0 py-2 px-14 flex gap-2 md:block">
            <p className=" bg-indigo-100 text-indigo-700 border border-indigo-600 shadow-md rounded-md p-3 w-fit">
              <HiUserGroup size={40} />
            </p>
            <div className=" py-3">
              <p className=" text-gray-700 text-xl font-bold">10000 +</p>
              <p className=" text-gray-600">Students</p>
            </div>
          </div>
          <div className=" border-b-2 md:border-r-2 md:border-b-0 py-2 px-14 flex gap-2 md:block">
            <p className=" bg-teal-100 text-teal-700 border border-teal-600 shadow-md rounded-md p-3 w-fit">
              <HiCube size={40} />
            </p>
            <div className=" py-3">
              <p className=" text-gray-700 text-xl font-bold">50 +</p>
              <p className=" text-gray-600">Partners</p>
            </div>
          </div>
          <div className="py-2 px-14 flex gap-2 md:block">
            <p className=" bg-pink-100 text-pink-700 border border-pink-600 shadow-md rounded-md p-3 w-fit">
              <HiBookOpen size={40} />
            </p>
            <div className=" py-3">
              <p className=" text-gray-700 text-xl font-bold">50 +</p>
              <p className=" text-gray-600">Chapters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
