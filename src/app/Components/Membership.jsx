"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineAcademicCap,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const membershipCategories = [
  {
    id: 2,
    title: "Youth Member",
    subtitle: "Young Innovators, Entrepreneurs & Change-Makers (Age 21–42)",
    benefits: [
      "Career Guidance",
      "Industry Certifications",
      "Exclusive Learning Resources",
    ],
    requirements:
      "National ID, profile photo, contact info, occupation/startup details.",
    icon: HiOutlineAcademicCap,
    iconBg: "bg-sky-100 text-sky-600",
    ring: "ring-sky-100 hover:ring-sky-200",
    button: "bg-sky-600 hover:bg-sky-700",
    bar: "bg-sky-500",
  },
  {
    id: 1,
    title: "Institutional Member",
    subtitle: "Organizations Committed to Digital Development",
    benefits: [
      "Brand Exposure",
      "Top-Tier Recruitment",
      "Strategic Partnership",
    ],
    requirements:
      "Company/NGO registration, logo, authorized representative info.",
    icon: HiOutlineOfficeBuilding,
    iconBg: "bg-indigo-100 text-indigo-600",
    ring: "ring-indigo-100 hover:ring-indigo-200",
    button: "bg-indigo-600 hover:bg-indigo-700",
    bar: "bg-indigo-500",
  },
  {
    id: 3,
    title: "General Member",
    subtitle: "Citizens for ICT Development & Social Change",
    benefits: ["Be an Advisor", "Professional Influence", "Recognition"],
    requirements: "Full name, contact details, occupation, national ID, photo.",
    icon: HiOutlineUserGroup,
    iconBg: "bg-amber-100 text-amber-600",
    ring: "ring-amber-100 hover:ring-amber-200",
    button: "bg-amber-600 hover:bg-amber-700",
    bar: "bg-amber-500",
  },
  {
    id: 4,
    title: "Donor Member",
    subtitle: "Partners Supporting ICT Innovation & National Development",
    benefits: [
      "National Recognition",
      "Strategic Networking",
      "Lasting Social Impact",
    ],
    requirements:
      "Full name/Organization name, contact details, national ID/company registration, contribution details.",
    icon: HiOutlineHeart,
    iconBg: "bg-emerald-100 text-emerald-600",
    ring: "ring-emerald-100 hover:ring-emerald-200",
    button: "bg-emerald-600 hover:bg-emerald-700",
    bar: "bg-emerald-500",
  },
];

const Membership = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-2">
            Membership
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            BIIN Membership Categories
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join BIIN and help digitally transform Bangladesh through youth
            empowerment, education, innovation, and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {membershipCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ${category.ring} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className={`h-1.5 w-full ${category.bar}`} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${category.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed min-h-[2.75rem]">
                    {category.subtitle}
                  </p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {category.benefits.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <HiOutlineCheckCircle
                          size={18}
                          className={`mt-0.5 shrink-0 ${category.iconBg.split(" ")[1]}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Requirements
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {category.requirements}
                    </p>
                  </div>
                  <Link
                    href={`/membership-form?category=${encodeURIComponent(category.title)}`}
                    className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white ${category.button} shadow-sm transition-all duration-200 active:scale-[0.98]`}
                  >
                    Apply Now <BsArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-12 sm:mt-14"
        >
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-8 sm:px-10 sm:py-10 text-center text-white">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-sky-500/25 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Membership Upgrade & Conversion
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Members may upgrade or transition between categories with
                applicable discounts on registration or renewal fees.
              </p>
              <Link
                href="/membership-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-200 active:scale-[0.98]"
              >
                Register Now <BsArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;
