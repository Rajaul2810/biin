"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const committeeMembers = [
  {
    name: "Syed Almas Kabir",
    role: "Chairman",
    image: "/committee/Almas.png",
  },
  {
    name: "Syed Ahsan Habib",
    role: "EC Member",
    image: "/committee/habib.png",
  },
  {
    name: "Farzanah Chowdhury",
    role: "EC Member",
    image: "/committee/Farzanah.png",
  },
  {
    name: "Joya Kabir",
    role: "EC Member",
    image: "/committee/joya.png",
  },
  {
    name: "Moon M. Rajib",
    role: "General Secretary",
    image: "/committee/Rajib.png",
  },
];

const secretariats = [
  { name: "Tanjin Prity", role: "Manager" },
  { name: "Mahbub Sharif", role: "PR Officer" },
  { name: "Mehnaz Chowdhury", role: "Senior Executive, IT" },
  { name: "Mobarak Hossain Joy", role: "Executive, Event" },
  { name: "Mohammad Sish", role: "Executive, Design" },
  { name: "Rajaul Karim", role: "Web Developer" },
];

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Trustees = () => {
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
            Leadership
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Executive Committee
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            BIIN is governed under a registered Trust Deed, ensuring operations,
            finances, and partnerships follow transparency and accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {committeeMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center mb-8 sm:mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            Operations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            BIIN Secretariat
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            The team coordinating programs, communications, and day-to-day
            delivery across BIIN initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {secretariats.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
              className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-md hover:ring-indigo-100 p-4 sm:p-5 transition-all duration-300"
            >
              <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 text-sm font-bold">
                {getInitials(person.name)}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {person.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {person.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trustees;
