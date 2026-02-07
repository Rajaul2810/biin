"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const trustees = [
  {
    name: "Syed Almas Kabir",
    role: "Chairman, Board of Trustees",
    image: "/almas.jpg",
    description: "Renowned ICT industry leader and policy advocate, Mr. Kabir serves as the Chairman of BIIN. With over three decades of experience in technology, entrepreneurship and public policy, he leads the strategic direction of the organization and oversees governance as a Founder Trustee.",
    quote: "Technology is the bridge between dreams and reality for our youth."
  },
  {
    name: "Moon M. Rajib",
    role: "General Secretary & Founder Trustee",
    image: "/moon.jpg",
    description: "As the Founder and General Secretary of BIIN, Mr. Rajib drives the organization's vision, program development, and national outreach. With a strong background in communication, branding, and youth engagement, he plays a key role in managing BIIN's day-to-day operations and partnerships.",
    quote: "Empowering youth through innovation is not just our mission, it's our passion."
  }
];

const Trustees = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 text-sm font-semibold rounded-full mb-4">
            Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Governance & Trust
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BIIN is governed by a Board of Trustees as per its registered Trust Deed, ensuring all operations, finances, and partnerships are guided by transparency, legality, and accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {trustees.map((trustee, index) => (
            <motion.div
              key={trustee.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="relative md:w-1/2 h-80 md:h-96 overflow-hidden">
                    <Image
                      src={trustee.image}
                      alt={trustee.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-tl-3xl z-20 flex items-center justify-center">
                      <FaQuoteLeft className="text-white/80" size={20} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
                        {trustee.name}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm">
                        {trustee.role}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {trustee.description}
                    </p>

                    {/* Quote */}
                    <div className="relative pl-4 border-l-2 border-emerald-500">
                      <p className="text-gray-500 italic text-sm">
                        &ldquo;{trustee.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-sm">
              Registered under the Trust Act, ensuring complete transparency and accountability
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trustees; 