"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import biin from "../../../public/BIIN Profile Image/Biin_Logo_White.png";

const exploreLinks = [
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Partners", href: "/partner" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={biin}
              alt="BIIN"
              width={140}
              height={90}
              className="object-contain w-[120px] sm:w-[140px] h-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              Empowering youth through ICT skill development, innovation, and
              community collaboration across Bangladesh.
            </p>
            <a
              href="https://www.facebook.com/BIINtrust"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BIIN on Facebook"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-300 hover:bg-emerald-500/20 hover:text-emerald-300 hover:ring-emerald-400/30 transition"
            >
              <FaFacebook size={18} />
            </a>
          </div>

          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Explore
            </h2>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h2>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm">
                <HiOutlineMapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <span className="text-slate-400 leading-relaxed">
                  SimpleTree Attalika (Level 19), 134 Gulshan Avenue, Dhaka
                  1212, Bangladesh
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@biin.org.bd"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                >
                  <HiOutlineEnvelope
                    size={18}
                    className="shrink-0 text-emerald-400"
                  />
                  info@biin.org.bd
                </a>
              </li>
              <li>
                <a
                  href="tel:+8809640123701"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                >
                  <HiOutlinePhone
                    size={18}
                    className="shrink-0 text-emerald-400"
                  />
                  +88 09640 123 701-3
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bangladesh ICT & Innovation
            Network (BIIN)
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            <span className="hover:text-slate-300 transition-colors cursor-default">
              Terms of use
            </span>
            <span className="mx-2 text-slate-600">|</span>
            <span className="hover:text-slate-300 transition-colors cursor-default">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
