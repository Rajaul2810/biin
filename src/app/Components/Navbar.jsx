"use client";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "../../../public/BIIN Logo-1.png";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Awards", href: "https://awards.biin.org.bd", external: true },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Partner", href: "/partner" },
  { name: "Contact Us", href: "/contact" },
];

const isActive = (pathname, href) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const linkClass = (active) =>
  `relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    active
      ? "text-indigo-900 bg-indigo-50"
      : "text-gray-700 hover:text-indigo-900 hover:bg-indigo-50/70"
  }`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleDropdown = (idx) => {
    setDropdownOpen(dropdownOpen === idx ? null : idx);
  };

  const renderNavItem = (link, mobile = false) => {
    if (link.dropdown) {
      return null;
    }

    if (link.external) {
      if (mobile) {
        return (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-900 transition"
          >
            {link.name}
            <FiExternalLink size={16} className="text-gray-400" />
          </a>
        );
      }

      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass(false)} inline-flex items-center gap-1.5`}
        >
          {link.name}
          <FiExternalLink size={12} className="opacity-50" />
        </a>
      );
    }

    const active = isActive(pathname, link.href);

    if (mobile) {
      return (
        <Link
          href={link.href}
          onClick={closeMenu}
          className={`block px-3 py-3 rounded-xl text-base font-medium transition ${
            active
              ? "bg-indigo-50 text-indigo-900 font-semibold border-l-4 border-indigo-800"
              : "text-gray-800 hover:bg-indigo-50/70 hover:text-indigo-900"
          }`}
        >
          {link.name}
        </Link>
      );
    }

    return (
      <Link href={link.href} className={linkClass(active)}>
        {link.name}
        {active && (
          <motion.span
            layoutId="nav-active"
            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-indigo-800"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: scrolled ? 4 : 8,
          paddingBottom: scrolled ? 4 : 8,
        }}
        transition={{ duration: 0.25 }}
        className={`w-full border-b border-gray-200 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md shadow-gray-200/80" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="BIIN home"
          >
            <Image
              src={logo}
              alt="BIIN logo"
              height={scrolled ? 56 : 72}
              width={scrolled ? 72 : 92}
              className="object-contain transition-all duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <li key={link.name} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-indigo-900 hover:bg-indigo-50/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    aria-expanded="false"
                  >
                    <span>{link.name}</span>
                    <BiChevronDown
                      size={18}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <ul className="absolute left-0 top-full min-w-[190px] mt-1 bg-white shadow-xl rounded-xl py-2 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-40">
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 rounded-lg text-sm mx-1 transition"
                          >
                            {item.name}
                          </a>
                        </li>
                      ) : (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 rounded-lg text-sm mx-1 transition"
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>{renderNavItem(link)}</li>
              )
            )}
          </ul>

          <div className="hidden lg:block shrink-0">
            <Link
              href="/get-involved"
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-sky-500 shadow-md shadow-emerald-500/20 hover:from-sky-500 hover:to-emerald-500 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Join Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-indigo-200 transition active:scale-95"
          >
            {isOpen ? (
              <HiOutlineX size={24} className="text-gray-800" />
            ) : (
              <HiOutlineMenuAlt3 size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-slate-900/45 backdrop-blur-sm z-40"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="lg:hidden fixed top-0 right-0 w-[85%] max-w-sm h-full z-50 bg-white shadow-2xl border-l border-gray-100"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={logo}
                      alt="BIIN"
                      height={40}
                      width={52}
                      className="object-contain"
                      priority
                    />
                    <span className="text-lg font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-indigo-700 bg-clip-text text-transparent">
                      BIIN
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="p-2 rounded-xl hover:bg-gray-100 transition"
                    aria-label="Close menu"
                  >
                    <HiOutlineX size={22} className="text-gray-700" />
                  </button>
                </div>

                <ul className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 py-5">
                  {navLinks.map((link, idx) =>
                    link.dropdown ? (
                      <li key={link.name}>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-800 hover:bg-indigo-50 font-medium text-base transition"
                          onClick={() => handleDropdown(idx)}
                        >
                          <span>{link.name}</span>
                          <BiChevronDown
                            size={22}
                            className={`transition-transform ${
                              dropdownOpen === idx
                                ? "rotate-180 text-indigo-700"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {dropdownOpen === idx && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-2 space-y-1"
                            >
                              {link.dropdown.map((item) =>
                                item.external ? (
                                  <li key={item.name}>
                                    <a
                                      href={item.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-3 py-2.5 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 text-sm transition"
                                      onClick={closeMenu}
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ) : (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="block px-3 py-2.5 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 text-sm transition"
                                      onClick={closeMenu}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                )
                              )}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={link.name}>{renderNavItem(link, true)}</li>
                    )
                  )}
                </ul>

                <div className="px-4 pb-8 pt-2 border-t border-gray-100">
                  <Link
                    href="/get-involved"
                    onClick={closeMenu}
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold shadow-md hover:from-sky-500 hover:to-emerald-500 active:scale-[0.98] transition"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
