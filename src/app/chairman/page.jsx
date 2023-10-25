"use client";
import React from "react";
import almas from "../../../public/almas.jpg";
import moon from "../../../public/moon.jpg";
import Image from "next/image";
import { useState } from "react";

const Chairman = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <section className=" bg-slate-50 pt-10 pb-10">
      <div className=" flex justify-center">
        <div className="w-11/12 md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center ">
          <div className="">
            <Image
              src={almas}
              alt="chairman"
              className=" border-4 border-white rounded-md h-56 w-full shadow-md"
            />
            {/* <Image src={almas} alt='chairman' className=' border-8 border-teal-500 rounded-md -rotate-45 h-full w-full' /> */}
          </div>
          <div>
            <h1 className=" text-3xl font-bold">Syed Almas Kabir</h1>
            <p className=" text-slate-900 pb-4 text-xl">Chairman, BIIN</p>
            <p className=" text-justify text-sm text-gray-600">
              Mr. Syed Almas Kabir is an entrepreneur, ICT industry evangelist,
              policy advocate and an angel investor. He is the President of
              Bangladesh–Malaysia chamber of commerce and industry (BMCCI),
              Former Director of Federation of Bangladesh Chamber of Commerce &
              Industry (FBCCI) – the apex trade body and immediate Past
              President (2018-2022) of Bangladesh Association of Software &
              Information Services (BASIS).
              {isOpen && (
                <span className=" text-justify text-sm text-gray-600">
                  Mr. Kabir is the Managing Director & Chief Executive Officer
                  of MetroNet Bangladesh Limited – the largest and most trusted
                  nationwide data-communication company in the country offering
                  Cloud Computing, FinTech, Cyber Security, Intranet, Internet,
                  IP Telephony, and other IT Enabled Services. He has been
                  associated with the ICT industry for the last 33 years. Mr.
                  Kabir studied Electrical Engineering at Jadavpur University,
                  India and achieved his Master’s degree from New York
                  University, USA. He was attached to academia as an Associate
                  Professor at Independent University, Bangladesh (IUB) for 13
                  years. He also was involved in various top management roles in
                  IUB, North South University & City University. Mr. Kabir was
                  an adjunct faculty at National University and Northern
                  University. Mr. Kabir was elected as the Senior Vice
                  President, Vice President and Treasurer of BASIS in the past.
                  He was twice elected as the President of American Alumni
                  Association (AAA) and Vice President of Bangladesh–Malaysia
                  chamber of commerce and industry (BMCCI) for two terms. He was
                  the Vice-President of Internet Service Providers Association
                  of Bangladesh (ISPAB) and Director of Bangladesh Employers’
                  Federation (BEF). He was also elected as the National
                  President of Junior Chamber International Bangladesh (JCI) and
                  St. Joseph Old Boys’ Foundation. He served as the
                  International Councilor of JCI Asia Pacific Development
                  Council. Almas volunteers as the Member-Secretary of Traffic
                  Management and Community Policing Committee of
                  Gulshan-Banani-Baridhara-Niketan under the purview of Dhaka
                  North City Corporation. He is also the founder and Adviser of
                  IUB Alumni Association (AiA). The US State Department awarded
                  Mr. Kabir as an International Visitor in their Leadership
                  Program (IVLP).
                </span>
              )}
            </p>
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xs bg-teal-500 rounded-full lowercase p-2 shadow-md hover:scale-105 duration-150 transition"
              >
                see less
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className=" text-white text-xs bg-teal-500 rounded-full lowercase p-2 shadow-md hover:scale-105 duration-150 transition"
              >
                see more
              </button>
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        <div className="w-11/12 md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            <h1 className=" text-3xl font-bold">Moon M. Rajib</h1>
            <p className=" text-slate-900 pb-4 text-xl">
              Founder & Chief Coordinator, BIIN
            </p>
            <p className=" text-justify text-sm text-gray-600">
              Mr. Moon M. Rajib works as the Branding and Communication Manager
              at MetroNet Bangladesh Limited. He is working as Manager (Program
              & Projects) & Team Lead (Branding & Communication) at AyAl Corp
              Limited and in charge of ICT and startups, as well as a senior
              sub-editor at the Daily Kholakagoj, a daily newspaper in
              Bangladesh.
              {isOpen2 && (
                <span>
                  He has been associated with the ICT industry for the last 8
                  years. Mr. Moon studied Computer Science and Engineering at
                  Jagannath University. He has completed the Human Resource
                  Management Competencies (HRMC) course from IBA, University of
                  Dhaka, and joined various professional training programs on
                  soft skills and technical skills at the BangladeshComputer
                  Council, British Council, BASIS Institute of Technology and
                  Management (BITM), DCCI Business Institute (DBI) and IIT,
                  Dhaka University. He was the convenor of the BASIS Students
                  Forum at Jagannath University, campus ambassador at Google
                  Developers Group - GDG Bangla, and coordinator of the
                  Engineering Students Association Bangladesh (ESAB) at JnU.
                  After completing his internship at the Bangladesh Association
                  of Software and Information Services (BASIS), he joined a
                  multinational company as a communication executive. Later, he
                  joined the Bangladesh Association of Software and Information
                  Services (BASIS) and worked there for several years as an
                  Assistant Manager (Corporate Affairs). He was the joint
                  coordinator of the largest student forum in Bangladesh – BASIS
                  Students Forum. He was the communication lead for the National
                  ICT Awards, BASIS SoftExpo, BASIS Outsourcing Award, and NASA
                  Space Apps Challenge.
                </span>
              )}
            </p>
            {isOpen2 ? (
              <button
                onClick={() => setIsOpen2(false)}
                className="text-white text-xs bg-teal-500 rounded-full lowercase p-2 shadow-md hover:scale-105 duration-150 transition"
              >
                see less
              </button>
            ) : (
              <button
                onClick={() => setIsOpen2(true)}
                className="text-white text-xs bg-teal-500 rounded-full lowercase p-2 shadow-md hover:scale-105 duration-150 transition"
              >
                see more
              </button>
            )}
          </div>
          <div>
            <Image
              src={moon}
              alt="moon"
              className=" border-4 border-white rounded-md h-56 w-full shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
