"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const eventImages = [
  {
    src: "/resizeImage/0-10.jpg",
    title: "Asia Pacific ICT Alliance Awards 2025",
    date: "December 08, 2025",
  },
  {
    src: "/resizeImage/0-09.jpg",
    title: "Bangladesh ICT & Innovation Awards 2025",
    date: "October 18, 2025",
  },
  {
    src: "/resizeImage/0-01.jpg",
    title: "Workshop for TMGB Members (Tech Journalist)",
    date: "September 20, 2025",
  },
  {
    src: "/resizeImage/0-04.jpg",
    title: "Medical Support for Injured Student Activists",
    date: "October 20, 2024",
  },
  {
    src: "/resizeImage/0-05.jpg",
    title: "ICANN Outreach Program",
    date: "July 14, 2024",
  },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? eventImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === eventImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const current = eventImages[currentIndex];

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-2">
              About BIIN
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
              Who We Are
            </h1>
            <p className="text-slate-600 leading-relaxed mb-4">
              BIIN is a national platform committed to shaping the digital
              future of Bangladesh. With 10,000+ connected students, 50+
              strategic partners, and 50+ active chapters, we work across urban
              and rural areas to provide high-impact programs in ICT education,
              entrepreneurship and digital innovation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We operate under a registered Trust Deed, ensuring legal
              transparency, structured governance and national reach. Our
              advisory panel includes national and global leaders in ICT and
              youth development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-emerald-100 shadow-sm">
                <div className="h-1.5 w-full bg-emerald-500" />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <HiOutlineLightBulb size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Equip youth with digital skills, foster innovation, and
                    build tech-savvy leaders for social and economic growth.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-indigo-100 shadow-sm">
                <div className="h-1.5 w-full bg-indigo-500" />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <HiOutlineGlobeAlt size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Build a digitally inclusive society where youth thrive
                    through technology, entrepreneurship, and collaboration.
                  </p>
                </div>
              </article>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Learn More <HiOutlineArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-100 shadow-sm">
              <div className="relative w-full aspect-[4/3] bg-slate-300">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.src}
                      alt={current.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={currentIndex === 0}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h4 className="text-white font-semibold text-base sm:text-lg leading-snug">
                        {current.title}
                      </h4>
                      <p className="text-slate-300 text-sm mt-1">
                        {current.date}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 text-slate-800 p-2 shadow-md hover:bg-white transition"
                  aria-label="Previous image"
                >
                  <HiOutlineChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 text-slate-800 p-2 shadow-md hover:bg-white transition"
                  aria-label="Next image"
                >
                  <HiOutlineChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {eventImages.map((img, index) => (
                <button
                  key={img.src}
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
