"use client";
import React, { useState } from "react";
import { BsMenuButtonWideFill, BsFillBackspaceFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import logo from "../../../public/BIIN-Logo.png";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Awards", href: "https://awards.biin.org.bd " },
  {
    name: "Governance & Trust",
    href: "/governance-trust",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  { name: "Partner", href: "/partner" },
  { name: "Contact Us", href: "/contact" },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // For mobile dropdowns
  const handleDropdown = (idx) => {
    setDropdownOpen(dropdownOpen === idx ? null : idx);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`w-full border-b border-gray-300 px-4 md:px-10 py-2 transition-all duration-300 bg-white`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              height={80}
              width={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-6 font-semibold">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <li key={link.name} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg transition text-black hover:bg-white/10 hover:text-teal-300 focus:outline-none"
                  >
                    <span className="text-sm">{link.name}</span>
                    <BiChevronDown
                      size={20}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <ul className="absolute left-0 top-full min-w-[180px] bg-white shadow-xl rounded-xl py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-40">
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-5 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg text-sm transition"
                          >
                            {item.name}
                          </a>
                        </li>
                      ) : (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-5 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg text-sm transition"
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm text-black hover:bg-white/10 hover:text-teal-300 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            {!isOpen ? (
                  <BsMenuButtonWideFill size={28} color="#000" />
            ) : (
              <BsFillBackspaceFill size={28} color="#000" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/60 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside
        className={`md:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <Image
                src={logo}
                alt="logo"
                height={44}
                width={44}
                className="rounded-full border border-gray-200"
                priority
              />
              <span className="text-lg font-bold bg-gradient-to-r from-black via-emerald-600 to-indigo-700 bg-clip-text text-transparent">
                BIIN
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <BsFillBackspaceFill size={24} color="#333" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <li key={link.name} className="mb-0">
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-800 hover:bg-teal-50 font-medium text-base transition"
                    onClick={() => handleDropdown(idx)}
                  >
                    <span>{link.name}</span>
                    <BiChevronDown
                      size={22}
                      className={`transition-transform ${
                        dropdownOpen === idx ? "rotate-180 text-teal-600" : ""
                      }`}
                    />
                  </button>
                  <ul
                    className={`pl-3 mt-0 space-y-1 transition-all duration-200 overflow-hidden ${
                      dropdownOpen === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 text-sm transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ) : (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 text-sm transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-teal-50 hover:text-teal-700 font-medium text-base transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="px-4 pb-6">
            <a
              href="https://forms.gle/tqTmSpieThsCeQFV6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold shadow hover:from-sky-500 hover:to-emerald-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
};
