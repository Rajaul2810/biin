"use client";
import React from "react";
import hero from "../../../public/BIIN Profile Image/Biin_Web_Image.png";
import biin from "../../../public/BIIN Profile Image/Biin_Logo_White.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] overflow-hidden bg-[#0f1f4d]">
      <Image
        src={hero}
        alt="BIIN community and innovation"
        fill
        priority
        className="object-cover object-center opacity-45 sm:opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1738]/95 via-[#12265c]/80 to-[#0f3d3a]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1738]/90 via-transparent to-[#0b1738]/30" />

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-[88vh] sm:min-h-[92vh] py-16 sm:py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Image
              src={biin}
              alt="BIIN"
              width={200}
              height={130}
              className="w-[140px] sm:w-[180px] md:w-[200px] h-auto object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold text-white leading-[1.15] tracking-tight"
          >
            Bangladesh ICT &{" "}
            <span className="text-emerald-300">Innovation Network</span>
          </motion.h1>

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-200/90 max-w-xl leading-relaxed"
          >
            A registered non-profit trust empowering Bangladesh&apos;s youth
            through ICT skills, startup incubation, and digital innovation.
          </motion.p>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 text-sm sm:text-base transition-colors shadow-lg shadow-emerald-900/30"
            >
              Join BIIN <HiOutlineArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 text-sm sm:text-base backdrop-blur-sm transition-colors"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
