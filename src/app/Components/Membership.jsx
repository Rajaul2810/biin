"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaUsers, FaBuilding, FaHandshake, FaCrown, FaUserTie } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const membershipCategories = [
  {
    id: 1,
    title: "Youth Member",
    subtitle: "For Young Innovators, Entrepreneurs & Change-Makers (Age 21–42)",
    icon: <FaUserGraduate className="text-blue-500" size={32} />,
    description: "•\tCareer Guidance.\n•\tIndustry Certifications\n•\tExclusive Learning Resources.",
    requirements: "National ID, profile photo, contact info, occupation/startup details.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    title: "Associate Member",
    subtitle: "For Students, Volunteers, Interns & University Club Members",
    icon: <FaUsers className="text-emerald-500" size={32} />,
    registrationFee: "BDT 1,000",
    renewalFee: "BDT 1,200",
    description: "Designed to engage passionate individuals involved in part-time activities, projects, or university-based tech clubs.",
    requirements: "Student/Institution ID, recommendation if applicable. Free of Cost for underprivileged students and registered BIIN university clubs.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    id: 3,
    title: "Institutional Member",
    subtitle: "For Organizations Committed to Digital Development",
    icon: <FaBuilding className="text-purple-500" size={32} />,
    description: "•\tBrand Exposure.\n•\tTop-Tier Recruitment.\n•\tStrategic Partnership.",
    requirements: "Company/NGO registration, logo, authorized representative info.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: 4,
    title: "Donor Member",
    subtitle: "Supporters Investing in Youth & Innovation",
    icon: <FaHandshake className="text-orange-500" size={32} />,
    registrationFee: "BDT 50,000",
    renewalFee: "Flexible (any amount)",
    description: "Individuals or institutions offering significant financial, resource, or programmatic support receive premium recognition and naming rights where applicable.",
    requirements: "Donor profile, contribution details, impact area preference.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 5,
    title: "Life Member",
    subtitle: "For Visionaries Committed to Long-Term Impact",
    icon: <FaCrown className="text-yellow-500" size={32} />,
    registrationFee: "BDT 100,000",
    renewalFee: "Voluntary",
    description: "One-time contribution ensures lifetime access to BIIN's network and events. Ideal for philanthropists, policy-makers, academics, industrialists, and senior advisors.",
    requirements: "Bio, professional background, contribution statement.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    id: 6,
    title: "General Member",
    subtitle: "For Citizens Committed to ICT Development & Social Change",
    icon: <FaUserTie className="text-indigo-500" size={32} />,
    description: "•\tBe an Advisor.\n•\tProfessional Influence\n•\tRecognition.",
    requirements: "Full name, contact details, occupation, national ID, photo.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  }
];

const Membership = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            BIIN Membership Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the Bangladesh ICT & Innovation Network (BIIN) and become part of a movement that&apos;s digitally transforming Bangladesh through youth empowerment, education, innovation, and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {membershipCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed whitespace-pre-line">
                {category.description}
              </p>

              <div className="bg-white/50 rounded-lg p-3 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Requirements:</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{category.requirements}</p>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-sky-500 hover:to-emerald-500 transition-all duration-200 flex items-center justify-center gap-2">
                Apply Now <BsArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">🔄 Membership Upgrade & Conversion</h3>
            <p className="text-lg mb-6">
              Members may upgrade or transition from one category to another (e.g., Youth Member to Life Member) with applicable discounts on registration or renewal fees.
            </p>
            <a
              href="https://forms.gle/pocQfGR3gBVScM2L9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Start Your Application <BsArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership; 