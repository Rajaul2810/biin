"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineHandRaised,
  HiOutlineGlobeAlt,
  HiOutlineTrophy,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import about2 from "../../../public/about2.jpeg";
import about from "../../../public/about.jpg";

const impactMetrics = [
  {
    icon: HiOutlineAcademicCap,
    label: "Students Empowered",
    value: "10,000+",
    description: "Young individuals equipped with digital skills",
    iconBg: "bg-sky-100 text-sky-600",
    bar: "bg-sky-500",
  },
  {
    icon: HiOutlineHandRaised,
    label: "Partner Organizations",
    value: "50+",
    description: "Strategic partnerships across sectors",
    iconBg: "bg-emerald-100 text-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    icon: HiOutlineGlobeAlt,
    label: "Active Chapters",
    value: "50+",
    description: "Nationwide presence and reach",
    iconBg: "bg-indigo-100 text-indigo-600",
    bar: "bg-indigo-500",
  },
  {
    icon: HiOutlineTrophy,
    label: "Events Organized",
    value: "100+",
    description: "Hackathons, workshops, and competitions",
    iconBg: "bg-amber-100 text-amber-600",
    bar: "bg-amber-500",
  },
  {
    icon: HiOutlineUserGroup,
    label: "Communities Served",
    value: "25+",
    description: "Urban and rural areas covered",
    iconBg: "bg-violet-100 text-violet-600",
    bar: "bg-violet-500",
  },
  {
    icon: HiOutlineRocketLaunch,
    label: "Startups Supported",
    value: "200+",
    description: "Entrepreneurial ventures incubated",
    iconBg: "bg-rose-100 text-rose-600",
    bar: "bg-rose-500",
  },
];

const featuredPrograms = [
  "Youth IT Training Program",
  "Bangladesh National ICT Fest",
  "ICT Job Fair & Internship Expo",
  "Startup Bootcamps",
  "Campus Club Leadership Program",
  "National Hackathons & Innovation Contests",
];

const strategicInitiatives = [
  "Digital Literacy Campaigns",
  "University Club Programs",
  "Tech Talks & Workshops",
  "Esports & Gaming Tournaments",
  "Learning Platforms for Remote Learners",
  "Community-Based Tech Initiatives",
];

const Glance = () => {
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
            Our Impact
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Impact at a Glance
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From urban tech hubs to underserved regions, BIIN&apos;s reach
            continues to expand nationwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.article
                key={metric.label}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`h-1 w-full ${metric.bar}`} />
                <div className="flex flex-1 flex-col p-4 sm:p-5 text-center">
                  <div
                    className={`mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${metric.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {metric.value}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                    {metric.label}
                  </p>
                  <p className="mt-2 hidden sm:block text-xs text-slate-500 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2 mb-10 sm:mb-12">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5 sm:p-7 flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              Featured Programs
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Flagship programs driving skills, careers, and innovation.
            </p>
            <ul className="space-y-2.5 flex-1">
              {featuredPrograms.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 px-3.5 py-3 text-sm text-slate-700 hover:bg-emerald-50/60 hover:border-emerald-100 transition-colors"
                >
                  <HiOutlineCheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/get-involved"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto self-start rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Get Involved <HiOutlineArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="relative overflow-hidden rounded-2xl ring-1 ring-slate-100 shadow-sm bg-slate-100 min-h-[260px] sm:min-h-[320px]"
          >
            <Image
              src={about}
              alt="BIIN Programs and Activities"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        <div className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl ring-1 ring-slate-100 shadow-sm bg-slate-100 min-h-[260px] sm:min-h-[320px] order-2 lg:order-1"
          >
            <Image
              src={about2}
              alt="BIIN Impact and Achievements"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5 sm:p-7 flex flex-col order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              Strategic Initiatives
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Long-term initiatives connecting communities and opportunity.
            </p>
            <ul className="space-y-2.5 flex-1">
              {strategicInitiatives.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 px-3.5 py-3 text-sm text-slate-700 hover:bg-indigo-50/60 hover:border-indigo-100 transition-colors"
                >
                  <HiOutlineCheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-indigo-600"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/get-involved"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto self-start rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Join BIIN <HiOutlineArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Glance;
