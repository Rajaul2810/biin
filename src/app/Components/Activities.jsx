"use client"
import React from 'react'
import { BsFillSafe2Fill, BsFillMortarboardFill, BsFillCpuFill, BsFillLightningChargeFill } from 'react-icons/bs'
import { IoGameController, IoLaptop, IoLayers, IoMedical, IoRibbon } from 'react-icons/io5'

const sizes = 30;
const data = [
    {
        id: 1,
        title: 'Workshops',
        icon: <BsFillSafe2Fill size={sizes} />
    },
    {
        id: 2,
        title: 'Seminars',
        icon: <BsFillMortarboardFill size={sizes} />
    },
    {
        id: 3,
        title: 'Gaming Competitions',
        icon: <IoGameController size={sizes} />
    },
    {
        id: 4,
        title: 'Webinars',
        icon: <IoRibbon size={sizes} />
    },
    {
        id: 5,
        title: 'Youth IT Training Program',
        icon: <IoLaptop size={sizes} />
    },
    {
        id: 6,
        title: 'Tech Contest',
        icon: <IoLayers size={sizes} />
    },
    {
        id: 7,
        title: 'Hackathons and Codeathons',
        icon: <IoMedical size={sizes} />
    },
    {
        id: 8,
        title: 'Startup Incubation',
        icon: <BsFillCpuFill size={sizes} />
    },
    {
        id: 9,
        title: 'Digital Literacy Campaigns',
        icon: <BsFillLightningChargeFill size={sizes} />
    }
]

const Activities = () => {
    return (
        <section className='pt-10 pb-14 bg-gradient-to-r from-rose-400 to-amber-300'>
            <h1 className=' text-4xl text-center font-bold pb-5 text-gray-700'>Our Activities</h1>
            <div>
                <div className=' flex justify-center py-5'>
                    <div className=' w-11/12 md:w-3/4 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            data.map((item) =>
                                <div key={item.id} className=' h-40 p-3 rounded-md shadow-sm bg-white  hover:transform hover:scale-105 duration-150 hover:bg-teal-100'>
                                    <div className=' flex flex-col justify-center items-center'>
                                        <p className='bg-gradient-to-r from-teal-600 to-teal-500 p-3 rounded-full  shadow-indigo-500/50 shadow-md text-white '>{item.icon}</p>
                                        <h1 className='text-center font-semibold pt-2 text-gray-600'>{item.title}</h1>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities