"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaGlobe, FaHandshake, FaLightbulb, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Event images for About Us section (first 6 images)
const eventImages = [
  {
    src: "/BIIN Profile Image/Asia Pacific ICT Alliance Awards 2025 (December 08, 2025).jpg",
    title: "Asia Pacific ICT Alliance Awards",
    date: "December 08, 2025",
  },
  {
    src: "/BIIN Profile Image/Bangladesh ICT & Innovation Awards 2025 (October 18, 2025).jpg",
    title: "Bangladesh ICT & Innovation Awards",
    date: "October 18, 2025",
  },
  {
    src: "/BIIN Profile Image/5000-Member Celebration of BIIN (August 4, 2023).jpg",
    title: "5000-Member Celebration",
    date: "August 4, 2023",
  },

  // {
  //   src: "/BIIN Profile Image/Book on BIIN's Role in the July Revolution (August 11, 2024).jpg",
  //   title: "Book on BIIN's Role in the July Revolution",
  //   date: "August 11, 2024",
  // },
  {
    src: "/BIIN Profile Image/Coordination Meeting (April 21, 2024).jpg",
    title: "Coordination Meeting",
    date: "April 21, 2024",
  },
  {
    src: "/BIIN Profile Image/Cyber Security Seminar (November 8, 2023).jpg",
    title: "Cyber Security Seminar",
    date: "November 8, 2023",
  },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
              className="relative w-full"
            >
              {/* Image Slider Container */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative aspect-[4/3] w-full"
                  >
                    <Image
                      src={eventImages[currentIndex].src}
                      alt={eventImages[currentIndex].title}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={currentIndex === 0}
                      loading={currentIndex === 0 ? "eager" : "lazy"}
                    />
                    {/* Preload next image */}
                    {eventImages[(currentIndex + 1) % eventImages.length] && (
                      <Image
                        src={eventImages[(currentIndex + 1) % eventImages.length].src}
                        alt="preload"
                        fill
                        className="hidden"
                        sizes="1px"
                        loading="eager"
                      />
                    )}
                    {/* Overlay with event info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-xl">
                      <h4 className="text-white font-semibold text-lg">{eventImages[currentIndex].title}</h4>
                      <p className="text-gray-300 text-sm">{eventImages[currentIndex].date}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 z-10"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 z-10"
                  aria-label="Next image"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {eventImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-emerald-500 w-6" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
