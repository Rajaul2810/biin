"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Event images for Mission section (remaining 5 images)
const missionImages = [
  {
    src: "/Resize Image/0-06.jpg",
    title: "Cyber Security Seminar",
    date: "November 8, 2023",
  },
  {
    src: "/Resize Image/0-07.jpg",
    title: "Coordination Meeting ",
    date: "April 21, 2024",
  },
  {
    src: "/Resize Image/0-08.jpg",
    title: "Book on BIIN’s Role in the July Revolution",
    date: "August 11, 2024",
  },
  {
    src: "/Resize Image/0-03.jpg",
    title: "Startup Adda ",
    date: "July 31, 2023",
  },

  {
    src: "/Resize Image/0-11.jpg",
    title: "5000-Member Celebration of BIIN ",
    date: "August 4, 2023",
  },
];

const Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === missionImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? missionImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === missionImages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
                    src={missionImages[currentIndex].src}
                    alt={missionImages[currentIndex].title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentIndex === 0}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                  />
                  {/* Preload next image */}
                  {missionImages[(currentIndex + 1) % missionImages.length] && (
                    <Image
                      src={missionImages[(currentIndex + 1) % missionImages.length].src}
                      alt="preload"
                      fill
                      className="hidden"
                      sizes="1px"
                      loading="eager"
                    />
                  )}
                  {/* Overlay with event info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-xl">
                    <h4 className="text-white font-semibold text-lg">{missionImages[currentIndex].title}</h4>
                    <p className="text-gray-300 text-sm">{missionImages[currentIndex].date}</p>
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
              {missionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-emerald-500 w-6" 
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
