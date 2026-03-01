// components/Footer.js
// Footer Component - BIIN
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiChevronsRight } from 'react-icons/fi';
import logo from '../../../public/BIIN Logo-1.png'

const Footer = () => {
    return (
      <footer className="bg-black">
        <div className="max-w-7xl w-11/12 md:w-10/12 lg:w-3/4 mx-auto grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 pb-4">
          <div className="mb-5 md:col-span-1 md:max-w-[220px]">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-gray-400">
              Welcome to Empowering Youth through IT Skill Development and
              innovative community.
            </p>
            <div className="mt-4">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com/BIINtrust"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <FaTwitter size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <FaInstagram size={20} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 md:pl-20 lg:pl-28">
            <h2 className="text-white text-lg font-semibold pb-3">Explore</h2>
            <div className="flex flex-col gap-2.5">
              <Link href="/faq">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  FAQ
                </p>
              </Link>
              <Link href="/about">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  About Us
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Contact Us
                </p>
              </Link>
              <Link href="#">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Video Tour
                </p>
              </Link>
              <Link href="#">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Our Team
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-5 md:pl-20 lg:pl-28">
            <h2 className="text-white text-lg font-semibold pb-3">
              Quick Link
            </h2>
            <div className="flex flex-col gap-2.5">
              <Link href="#">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Join Us
                </p>
              </Link>
              <Link href="/events">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Events
                </p>
              </Link>
              <Link href="/partner">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Our Partners
                </p>
              </Link>
              <Link href="#">
                <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1">
                  <FiChevronsRight />
                  Tech Venture
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div>
              <p className="text-gray-400 text-sm text-center">
                <a href="#" className=" underline hover:text-white">
                  Terms of use
                </a>{" "}
                |{" "}
                <a href="#" className=" underline hover:text-white">
                  Privacy Policy
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Bangladesh ICT &
                Innovation Network (BIIN)
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
