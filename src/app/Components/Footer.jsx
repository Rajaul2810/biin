// components/Footer.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiChevronsRight } from 'react-icons/fi';
import logo from '../../../public/BIIN-Logo.png'

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="max-w-7xl w-11/12 md:w-3/4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 pt-5">
                <div className='mb-5'>
                    <Image src={logo} alt='logo' width={100} height={100} className='object-contain'/>
                    {/* <h2 className="text-white text-xl font-semibold pb-2">BIIN</h2> */}
                    <p className="text-gray-400">Welcome to Empowering Youth through IT Skill Development and innovative community.</p>
                    <div className="mt-4">

                        <ul className="flex space-x-4">

                            <li>
                                <a
                                    href="https://www.facebook.com/BIIN.network"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300"
                                >
                                    <FaFacebook size={20} />
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com/BIIN.network"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300"
                                >
                                    <FaTwitter size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com/BIIN.network"
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
                <div className="flex justify-between mb-5">

                    <div className="">
                        <h2 className="text-white text-lg font-semibold pb-2">Explore</h2>
                        <Link href="/faq">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>FAQ</p>
                        </Link>
                        <Link href="/about">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>About Us</p>
                        </Link>
                        <Link href="/contact">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Contact Us</p>
                        </Link>
                        <Link href="#">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Video Tour</p>
                        </Link>
                        <Link href="#">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/> Our Team</p>
                        </Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <h2 className="text-white text-lg font-semibold pb-2">Quick Link</h2>
                    <Link href="#">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Join Us</p>
                    </Link>
                    <Link href="/events">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Events</p>
                    </Link>
                    <Link href="/partner">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Our Partners</p>
                    </Link>
                    <Link href="#">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Tech Venture</p>
                    </Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div>
                        <p className='text-gray-400 text-sm text-center'><a href="#" className=' underline hover:text-white'>Terms of use</a> | <a href="#" className=' underline hover:text-white'>Privacy Policy</a></p>
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Bangladesh ICT & Innovation Network (BIIN)
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
