import React from 'react'
import Marquee from "react-fast-marquee";
import part from '../../../public/partner.png'
import part1 from '../../../public/partner1.png'
import part3 from '../../../public/partner3.png'
import part4 from '../../../public/partner4.png'
import part5 from '../../../public/partner5.png'
import part6 from '../../../public/partner6.png'
import part7 from '../../../public/partner7.png'
import Image from 'next/image';

const Partner = () => {
  return (
    <section className=' bg-white pt-10 pb-10'>
        <h1 className=' text-center text-4xl font-bold'>OUR PARTNER</h1>
        <Marquee speed={80}>
           <Image src={part} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part1} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part3} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part4} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part5} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part6} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part7} alt='logo' className=' h-20 w-32 me-10 p-5'/>
        </Marquee>
        <Marquee speed={80} direction='right'>
           <Image src={part} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part1} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part3} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part4} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part5} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part6} alt='logo' className=' h-20 w-32 me-10 p-5'/>
           <Image src={part7} alt='logo' className=' h-20 w-32 me-10 p-5'/>
        </Marquee>
    </section>
  )
}

export default Partner