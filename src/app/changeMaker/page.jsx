import React from 'react'
import user from '../../../public/user.png'
import Image from 'next/image'

const makers = [
    {
        id: 1,
        name: 'Moon M. Rajib',
        rule: 'Founder & Chief Coordinator',
        profession: 'Branding & Communication Manager, MetroNet Bangladesh Limited',
        image: user
    },
    {
        id: 2,
        name: 'Gobinda Chandra Das',
        rule: 'Coordinator, Legal Affairs',
        profession: 'Advocate, Supreme Court of Bangladesh',
        image: user
    },
    {
        id: 3,
        name: 'Abdullah Al Fahad Bhuiyan',
        rule: 'Coordinator, Operation',
        profession: 'Executive - Digital Ad-ops, SEBPO',
        image: user
    },
    {
        id: 4,
        name: 'Mehnaz Chowdhury',
        rule: 'Coordinator, IT',
        profession: 'Executive - IT, Aamra Networks Limited',
        image: user
    },
    {
        id: 5,
        name: 'Rajaul Karim',
        rule: 'Coordinator, Web Development',
        profession: 'Jr. Software Developer, AyAl Corp Limited',
        image: user
    },
    
    {
        id: 7,
        name: 'Mohammad Sish',
        rule: 'Coordinator, Design',
        profession: 'Student, Southeast University',
        image: user
    },
    {
        id: 8,
        name: 'Sanchita M. Tumpa',
        rule: 'Coordinator, Team Building',
        profession: 'Student, University of Dhaka',
        image: user
    },
    {
        id: 9,
        name: 'Kazi Abdullah Marjuk',
        rule: 'Executive',
        profession: 'Student, Prime University',
        image: user
    },
    {
        id: 10,
        name: 'Mansora Smrity',
        rule: 'Executive',
        profession: 'Student, Govt. Titumir College',
        image: user
    },
    {
        id: 11,
        name: 'Abdullah Al Akib',
        rule: 'Executive',
        profession: 'Student, North South University',
        image: user
    },
    
    {
        id: 13,
        name: 'Jasiya Mayin Usha',
        rule: 'Executive',
        profession: 'Student, BRAC University',
        image: user
    },
    {
        id: 14,
        name: 'Tithi Kar',
        rule: 'Executive',
        profession: 'Student, Bangladesh University of Textiles-BUTEX',
        image: user
    },
    
]

const ChangeMaker = () => {
    return (
        <section className=' bg-slate-100 pt-10 pb-10'>
            <div>
                <h1 className=' text-center text-4xl font-bold pb-10 text-gray-700'> Our Change Makers</h1>
                <div className=' flex justify-center'>
                    <div className=' w-11/12 md:w-3/4 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                        {
                            makers.map((item) =>
                                <div key={item.id} className='p-5 rounded-lg shadow-sm bg-white  hover:transform hover:scale-105 hover:rounded-none hover:shadow-md duration-150 mt-10 '>
                                      <p className='flex justify-center'>  <Image src={user} alt='user' className=' rounded-full h-16 w-16 -mt-10 shadow-lg shadow-slate-300 bg-slate-100 object-center ' /></p>
                                    <h1 className=' text-center text-lg font-semibold pt-3 text-gray-700'>{item.name}</h1>
                                    <p className=' text-center text-gray-500 text-md'>{item.rule}</p>
                                    <p className=' text-center text-gray-500 text-xs'>{item.profession}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangeMaker