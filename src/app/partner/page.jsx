"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

const partners = [
  { src: "/partner.png", alt: "Partner 1" },
  { src: "/partner1.png", alt: "Partner 2" },
  { src: "/partner8.png", alt: "Partner 3" },
  { src: "/partner4.png", alt: "Partner 4" },
  { src: "/partner5.png", alt: "Partner 5" },
  { src: "/partner6.png", alt: "Partner 6" },
  { src: "/partner7.png", alt: "Partner 7" },
  { src: "/partner9.png", alt: "Partner 8" },
];

const Partner = () => {
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
            Collaboration
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Partners
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We proudly collaborate with industry leaders and innovative
            organizations across Bangladesh.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.alt}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-lg hover:ring-emerald-100 p-5 sm:p-6 min-h-[110px] sm:min-h-[130px] transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={140}
                height={80}
                className="object-contain max-h-14 sm:max-h-16 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 140px"
                priority={index < 3}
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-12 sm:mt-14 relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-8 sm:px-10 sm:py-10 text-center text-white"
        >
          <div className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full bg-emerald-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Partner with BIIN
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
              Work with us to empower youth, grow digital skills, and drive
              innovation nationwide.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-emerald-50 transition-colors"
            >
              Become a Partner <HiOutlineArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
