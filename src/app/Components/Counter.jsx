"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineHandRaised,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const stats = [
  {
    end: 10000,
    label: "Students Connected",
    icon: HiOutlineAcademicCap,
    iconBg: "bg-sky-100 text-sky-600",
    bar: "bg-sky-500",
  },
  {
    end: 50,
    label: "Our Partners",
    icon: HiOutlineHandRaised,
    iconBg: "bg-emerald-100 text-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    end: 50,
    label: "Our Chapters",
    icon: HiOutlineGlobeAlt,
    iconBg: "bg-indigo-100 text-indigo-600",
    bar: "bg-indigo-500",
  },
  {
    end: 25,
    label: "Committee Members",
    icon: HiOutlineUserGroup,
    iconBg: "bg-amber-100 text-amber-600",
    bar: "bg-amber-500",
  },
];

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-2">
            By The Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Growing Impact
          </h2>
        </motion.div>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.article
                  key={stat.label}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`h-1.5 w-full ${stat.bar}`} />
                  <div className="flex flex-col items-center p-5 sm:p-6 text-center">
                    <div
                      className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tabular-nums min-h-[1.15em]">
                      {counterOn ? (
                        <>
                          <CountUp duration={2.5} end={stat.end} separator="," />
                          +
                        </>
                      ) : (
                        "0+"
                      )}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;
