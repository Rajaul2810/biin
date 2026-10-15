"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineHandRaised,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineTrophy,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const benefits = [
  {
    icon: HiOutlineFire,
    text: "Cutting-edge IT skill development",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    icon: HiOutlineAcademicCap,
    text: "Certified courses & real-world projects",
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    icon: HiOutlineGlobeAlt,
    text: "Access to national and international ICT events",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: HiOutlineHandRaised,
    text: "Internship & job opportunities",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: HiOutlineLightBulb,
    text: "Personalized mentorship",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: HiOutlineUserGroup,
    text: "Chapter branding & recognition",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: HiOutlineTrophy,
    text: "Leadership training & community service",
    iconBg: "bg-teal-100 text-teal-600",
  },
  {
    icon: HiOutlineRocketLaunch,
    text: "Exposure to startup & investment networks",
    iconBg: "bg-rose-100 text-rose-600",
  },
];

const Benefits = () => {
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
            Member Benefits
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Join BIIN?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Become part of a vibrant youth tech community committed to making a
            real difference across Bangladesh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  key={benefit.text}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.45 }}
                  className="group flex items-start gap-3.5 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-lg p-4 sm:p-5 transition-all duration-300"
                >
                  <div
                    className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl ${benefit.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-800 leading-snug pt-2">
                    {benefit.text}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 sm:p-8 flex flex-col justify-center text-center text-white shadow-lg"
          >
            <div className="pointer-events-none absolute -top-16 -right-12 h-40 w-40 rounded-full bg-emerald-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-sky-500/25 blur-3xl" />
            <div className="relative z-10">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                <HiOutlineRocketLaunch size={24} aria-hidden="true" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Benefits of Joining
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Unlock exclusive opportunities, resources, and a vibrant
                community. Help shape Bangladesh&apos;s digital future.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-200 active:scale-[0.98]"
              >
                Join BIIN <BsArrowRight size={18} />
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
