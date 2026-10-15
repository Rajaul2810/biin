"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineDesktopComputer,
} from "react-icons/hi";

const data = [
  {
    id: 1,
    title: "Community Building",
    description:
      "BIIN believes in the strength of community collaboration. They organize events, meet-ups, and forums where like-minded individuals can connect, share knowledge, and collaborate on IT projects. Such interactions create a supportive environment for learning and growth.",
    icon: HiOutlineUserGroup,
    iconBg: "bg-sky-100 text-sky-600",
    bar: "bg-sky-500",
    ring: "ring-sky-100 hover:ring-sky-200",
  },
  {
    id: 2,
    title: "Social Impact",
    description:
      "BIIN emphasizes the use of IT for social impact and development. They encourage youth to use their technological skills to address real-world challenges, such as healthcare, education, environment, and more, thereby contributing to the betterment of society.",
    icon: HiOutlineHeart,
    iconBg: "bg-emerald-100 text-emerald-600",
    bar: "bg-emerald-500",
    ring: "ring-emerald-100 hover:ring-emerald-200",
  },
  {
    id: 3,
    title: "IT Skill Development",
    description:
      "BIIN strives to provide accessible and high-quality IT skill development opportunities to young people across Bangladesh. Through workshops, training programs, and online resources, BIIN equips them with in-demand skills such as programming, web development, data analytics, cybersecurity, and more.",
    icon: HiOutlineDesktopComputer,
    iconBg: "bg-indigo-100 text-indigo-600",
    bar: "bg-indigo-500",
    ring: "ring-indigo-100 hover:ring-indigo-200",
  },
];

const WhyJoin = () => {
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
            Belong With Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Join BIIN Family
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Grow your skills, expand your network, and create meaningful impact
            with Bangladesh&apos;s ICT community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ${item.ring} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className={`h-1.5 w-full ${item.bar}`} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
