"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/events/${event.slug}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full shadow-lg">
                {event.category}
              </span>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Date */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
              <FaCalendarAlt className="text-emerald-500" size={14} />
              <span>{event.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {event.shortDescription}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
              <span>Read More</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-2" size={12} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
