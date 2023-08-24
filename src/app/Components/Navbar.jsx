"use client"
import React, { useState } from 'react'
import { BsMenuButtonWideFill, BsFillBackspaceFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import Link from 'next/link';
import logo from '../../../public/wlogo.png'
import Image from 'next/image';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section>
            <section>
                <div className='flex justify-center items-center'>
                    <nav className=' flex justify-between w-full   bg-slate-800 shadow-md pe-5 ps-5 pt-1 pb-1 z-20'>


                        <div className=' flex items-center ms-10 max-md:ms-0'>
                            <Image src={logo} alt='logo' height={80} width={80} />
                        </div>
                        <div className=' hidden md:block'>
                            <div className=' flex justify-center items-center gap-4 h-16 text-white'>
                                <Link className=' text-sm hover:text-teal-500' href="/">Home</Link>
                                <Link className=' text-sm hover:text-teal-500' href="/about">About Us</Link>
                                {/* <div className="dropdown dropdown-hover dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Our Activity </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Campus Activation</a></li>
                                        <li><a>Workshop / Seminar</a></li>
                                    </ul>
                                </div> */}
                                {/* <div className="dropdown dropdown-hover dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Gallery </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Videos</a></li>
                                        <li><a>Photos</a></li>
                                    </ul>
                                </div> */}
                                {/* <div className="dropdown dropdown-hover dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Events </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 '  />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Tech Mania</a></li>
                                        <li><a> Sturtup Olympiad</a></li>
                                    </ul>
                                </div> */}
                                {/* <Link className='text-sm hover:text-teal-500' href="/">Partner</Link> */}
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm"> Our Team </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link href='/chairman'>Board-Member</Link></li>
                                        {/* <li><a>Resource Persons</a></li> */}
                                        <li><Link href='/changeMaker'>Change-makers</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Get Involved</label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a href='https://forms.gle/tqTmSpieThsCeQFV6' target='_blank'>Become a Member</a></li>
                                        <li><a href='https://forms.gle/pocQfGR3gBVScM2L9' target='_blank'>Register your Club</a></li>
                                        <li><a href='https://forms.gle/5GYLHndDiLfrc5br6' target='_blank'>Open a Chapter</a></li>
                                        <li><a href='https://forms.gle/JjMmTJdTxCkhxzsNA' target='_blank'>Register as a Mentor</a></li>
                                    </ul>
                                </div>
                                 {/* <Link className='text-sm hover:text-teal-500' href="/partner">Partner</Link> */}
                                <Link className=' text-sm hover:text-teal-500' href="/contact">Contact Us</Link>
                            </div>
                        </div>

                        {/* mobile */}
                        <div className='ms-10 flex justify-evenly items-center md:hidden pt-2 pb-2'>
                            <button onClick={() => setIsOpen(!isOpen)} aria-controls='mobile-menu' aria-expanded='false' className=' text-black p-2'>
                                {!isOpen ? (
                                    <BsMenuButtonWideFill size={20} color='white' />
                                ) : (
                                    <BsFillBackspaceFill size={20} color='white' />
                                )}
                            </button>

                        </div>

                    </nav>

                </div>
                {
                    isOpen && (
                        <div className='flex flex-col md:hidden justify-center items-center gap-4 p-2 bg-white rounded-lg m-2 text-gray-700 z-50'>
                            <Link className=' text-sm hover:text-teal-500' href="/">Home</Link>
                            <Link className=' text-sm hover:text-teal-500' href='/about'>About Us</Link>
                           
                            {/* <div className="dropdown cursor-pointer dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Our Activity </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Campus Activation</a></li>
                                        <li><a>Workshop / Seminar</a></li>
                                    </ul>
                                </div> */}
                            {/* <div className="dropdown cursor-pointer dropdown-end">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Gallery </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Videos</a></li>
                                        <li><a>Photos</a></li>
                                    </ul>
                                </div> */}
                            {/* <div className="dropdown  dropdown-end cursor-pointer">
                                    <div className=' flex justify-center items-center group/item hover:text-teal-500'>
                                        <label tabIndex={0} className=" text-sm">Events </label>
                                        <BiChevronDown size={20} className='group-hover/item:rotate-180 '  />
                                    </div>
                                    <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Tech Mania</a></li>
                                        <li><a> Sturtup Olympiad</a></li>
                                    </ul>
                                </div> */}
                            {/* <Link className='text-sm hover:text-teal-500' href="/">Partner</Link> */}
                            <div className="dropdown  dropdown-end cursor-pointer">
                                <div className=' flex justify-center items-center group/item hover:text-teal-500 cursor-pointer'>
                                    <label tabIndex={0} className=" text-sm"> Our Team </label>
                                    <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                </div>
                                <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link href='/chairman'>Board-Member</Link></li>
                                    {/* <li><a>Resource Persons</a></li> */}
                                    <li><Link href='/changeMaker'>Change-makers</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown  dropdown-end cursor-pointer">
                                <div className=' flex justify-center items-center group/item hover:text-teal-500 cursor-pointer'>
                                    <label tabIndex={0} className=" text-sm">Get Involved</label>
                                    <BiChevronDown size={20} className='group-hover/item:rotate-180 ' />
                                </div>
                                <ul tabIndex={0} className=" text-black dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href='https://forms.gle/tqTmSpieThsCeQFV6' target='_blank'>Become a Member</a></li>
                                        <li><a href='https://forms.gle/pocQfGR3gBVScM2L9' target='_blank'>Register your Club</a></li>
                                        <li><a href='https://forms.gle/5GYLHndDiLfrc5br6' target='_blank'>Open a Chapter</a></li>
                                        <li><a href='https://forms.gle/JjMmTJdTxCkhxzsNA' target='_blank'>Register as a Mentor</a></li>
                                </ul>
                            </div>
                            {/* <Link className='text-sm hover:text-teal-500' href="/partner">Partner</Link> */}
                            <Link className=' text-sm hover:text-teal-500' href="/contact">Contact Us</Link>
                            
                        </div>
                    )
                }
            </section>
        </section>
    )
}
