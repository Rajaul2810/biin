"use client"
import React from 'react'
import { FaComputer } from 'react-icons/fa6'
import { LiaDoveSolid, LiaUsersSolid} from 'react-icons/lia'


const sizes = 35;
const data = [
    {
        id: 1,
        title: 'Community Building',
        description:'BIIN believes in the strength of community collaboration. They organize events, meet-ups, and forums where like-minded individuals can connect, share knowledge, and collaborate on IT projects. Such interactions create a supportive environment for learning and growth.',
        icon: <LiaUsersSolid size={sizes} />
    },
    {
        id: 2,
        title: 'Social Impact',
        description:'BIIN emphasizes the use of IT for social impact and development. They encourage youth to use their technological skills to address real-world challenges, such as healthcare, education, environment, and more, thereby contributing to the betterment of society.',
        icon: <LiaDoveSolid size={sizes} />
    },
    {
        id: 3,
        title: 'IT Skill Development',
        description:'BIIN strives to provide accessible and high-quality IT skill development opportunities to young people across Bangladesh. Through workshops, training programs, and online resources, BIIN equips them with in-demand skills such as programming, web development, data analytics, cybersecurity, and more.',
        icon: <FaComputer size={sizes} />
    },
    
]

const WhyJoin = () => {
  return (
    <section className='pt-10 pb-14 bg-slate-50'>
            <h1 className=' text-2xl text-center font-bold pb-5'>Why Join BIIN Family</h1>
            <div>
                <div className=' flex justify-center'>
                    <div className=' w-11/12 md:w-3/4 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            data.map((item) =>
                                <div key={item.id} className=' p-5 rounded-md shadow-md hover:transform hover:scale-105 duration-150 bg-teal-400 hover:bg-white'>
                                    <div className=' flex flex-col justify-center items-center'>
                                        <p className=' self-center text-teal-700 bg-teal-100 p-3 rounded-md shadow-sm mb-2 '>{item.icon}</p>
                                        <h1 className='text-center font-bold pt-2 pb-2'>{item.title}</h1>
                                        <p className=' text-justify text-sm'>{item.description}</p>
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

export default WhyJoin