"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaHandshake, FaCrown } from "react-icons/fa";

const Trustees = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Governance & Trust
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BIIN is governed by a Board of Trustees as per its registered Trust Deed, ensuring all operations, finances, and partnerships are guided by transparency, legality, and accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCrown className="text-yellow-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Syed Almas Kabir</h3>
            </div>
            <p className="text-emerald-600 font-semibold mb-3">Chairman, Board of Trustees</p>
            <p className="text-gray-600 leading-relaxed">
              Renowned ICT industry leader and policy advocate, Mr. Kabir serves as the Chairman of BIIN. With over three decades of experience in technology, entrepreneurship and public policy, he leads the strategic direction of the organization and oversees governance as a Founder Trustee.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-emerald-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Moon M. Rajib</h3>
            </div>
            <p className="text-emerald-600 font-semibold mb-3">General Secretary & Founder Trustee</p>
            <p className="text-gray-600 leading-relaxed">
              As the Founder and General Secretary of BIIN, Mr. Rajib drives the organization&apos;s vision, program development, and national outreach. With a strong background in communication, branding, and youth engagement, he plays a key role in managing BIIN&apos;s day-to-day operations and partnerships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trustees; 