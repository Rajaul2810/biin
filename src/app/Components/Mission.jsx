"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  HiOutlineLightBulb,
  HiOutlineEye,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";

const missionImages = [
  {
    src: "/resizeImage/0-06.jpg",
    title: "Cyber Security Seminar",
    date: "November 8, 2023",
  },
  {
    src: "/resizeImage/0-07.jpg",
    title: "Coordination Meeting",
    date: "April 21, 2024",
  },
  {
    src: "/resizeImage/0-08.jpg",
    title: "Book on BIIN's Role in the July Revolution",
    date: "August 11, 2024",
  },
  {
    src: "/resizeImage/0-03.jpg",
    title: "Startup Adda",
    date: "July 31, 2023",
  },
  {
    src: "/resizeImage/0-11.jpg",
    title: "5000-Member Celebration of BIIN",
    date: "August 4, 2023",
  },
];

const Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? missionImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === missionImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-2">
            Purpose
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Mission & Vision
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            BIIN is shaping Bangladesh&apos;s digital future through innovation
            programs and youth empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-1">
              <div className="relative aspect-[4/3] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={missionImages[currentIndex].src}
                      alt={missionImages[currentIndex].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={currentIndex === 0}
                      unoptimized
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h4 className="text-white font-semibold text-base sm:text-lg leading-snug">
                        {missionImages[currentIndex].title}
                      </h4>
                      <p className="text-slate-300 text-sm mt-1">
                        {missionImages[currentIndex].date}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 text-slate-800 p-2 shadow-md hover:bg-white transition"
                  aria-label="Previous image"
                >
                  <HiOutlineChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 text-slate-800 p-2 shadow-md hover:bg-white transition"
                  aria-label="Next image"
                >
                  <HiOutlineChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {missionImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-7 bg-emerald-500"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 sm:gap-5">
            <motion.article
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-emerald-100 shadow-sm flex-1"
            >
              <div className="h-1.5 w-full bg-emerald-500" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <HiOutlineLightBulb size={22} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To equip the youth of Bangladesh with digital skills, foster
                  innovation and build a generation of tech-savvy leaders who
                  drive social and economic development.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-indigo-100 shadow-sm flex-1"
            >
              <div className="h-1.5 w-full bg-indigo-500" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <HiOutlineEye size={22} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To create a digitally inclusive society by building a
                  sustainable ecosystem where young individuals thrive through
                  technology, entrepreneurship, and community collaboration.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
