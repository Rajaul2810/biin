"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineMapPin,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineArrowRight,
} from "react-icons/hi2";

const contactItems = [
    {
        icon: HiOutlineMapPin,
        label: "Our Address",
        content:
            "SimpleTree Attalika (Level 19), 134 Gulshan Avenue, Dhaka 1212, Bangladesh",
        href: "https://maps.google.com/?q=SimpleTree+Attalika+134+Gulshan+Avenue+Dhaka",
        external: true,
        iconBg: "bg-sky-100 text-sky-600",
        bar: "bg-sky-500",
    },
    {
        icon: HiOutlineEnvelope,
        label: "Our Email",
        content: "info@biin.org.bd",
        href: "mailto:info@biin.org.bd",
        iconBg: "bg-emerald-100 text-emerald-600",
        bar: "bg-emerald-500",
    },
    {
        icon: HiOutlinePhone,
        label: "Our Phone",
        content: "+88 09640 123 701-3",
        href: "tel:+8809640123701",
        iconBg: "bg-indigo-100 text-indigo-600",
        bar: "bg-indigo-500",
    },
];

const Contact = () => {
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
                        Get In Touch
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Ready to build your future with BIIN? Reach out — we&apos;d love to
                        hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {contactItems.map((item, index) => {
                            const Icon = item.icon;
                            const Wrapper = item.href ? "a" : "div";
                            const linkProps = item.href
                                ? {
                                    href: item.href,
                                    ...(item.external
                                        ? { target: "_blank", rel: "noopener noreferrer" }
                                        : {}),
                                }
                                : {};

                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ y: 24, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.08, duration: 0.45 }}
                                >
                                    <Wrapper
                                        {...linkProps}
                                        className="group flex overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className={`w-1.5 shrink-0 ${item.bar}`} />
                                        <div className="flex flex-1 items-start gap-4 p-4 sm:p-5">
                                            <div
                                                className={`shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <Icon size={22} aria-hidden="true" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed group-hover:text-emerald-700 transition-colors">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </Wrapper>
                                </motion.div>
                            );
                        })}

                        <motion.div
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.45 }}
                            className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 sm:p-7 text-white"
                        >
                            <div className="pointer-events-none absolute -top-12 -right-10 h-36 w-36 rounded-full bg-emerald-500/30 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-sky-500/25 blur-3xl" />
                            <div className="relative z-10">
                                <h2 className="text-lg sm:text-xl font-bold mb-2">
                                    Want to join BIIN?
                                </h2>
                                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                                    Explore membership categories and register in a few steps.
                                </p>
                                <Link
                                    href="/get-involved"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-emerald-50 transition-colors"
                                >
                                    Get Involved <HiOutlineArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm min-h-[280px] sm:min-h-[420px] lg:min-h-full"
                    >
                
                        <iframe
                          title="BIIN office location map"
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.096571224716!2d90.41303677533722!3d23.79256537864164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a6b323ab89%3A0x4bf6a21d4ae0ca7d!2sSimpleTree%20Attalika!5e1!3m2!1sen!2sbd!4v1784023343573!5m2!1sen!2sbd" 
                         width="100%"
                         height="100%"
                         style={{ border: 0, minHeight: "420px" }}
                         allowFullScreen
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                         className="h-full w-full min-h-[280px] sm:min-h-[420px]"
                         />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
