'use client'
import React from 'react'
import part from '../../../public/partner.png'
import part1 from '../../../public/partner1.png'
import part3 from '../../../public/partner3.png'
import part4 from '../../../public/partner4.png'
import part5 from '../../../public/partner5.png'
import part6 from '../../../public/partner6.png'
import part7 from '../../../public/partner7.png'
import Image from 'next/image';

const partners = [
  { src: part, alt: 'Partner 1' },
  { src: part1, alt: 'Partner 2' },
  { src: part3, alt: 'Partner 3' },
  { src: part4, alt: 'Partner 4' },
  { src: part5, alt: 'Partner 5' },
  { src: part6, alt: 'Partner 6' },
  { src: part7, alt: 'Partner 7' },
];

// Modern, responsive marquee using CSS animation
const Marquee = ({ children, reverse = false, speed = 30 }) => (
  <div className="overflow-hidden w-full relative">
    <div
      className={`flex gap-8 items-center animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {children}
      {children}
    </div>
  </div>
);

// Add the marquee keyframes to the page (for demo, in production use a CSS file)
const style = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
.animate-marquee {
  animation: marquee linear infinite;
  min-width: 200%;
}
.animate-marquee-reverse {
  animation: marquee-reverse linear infinite;
  min-width: 200%;
}
`;

const Partner = () => {
  return (
    <>
      <style>{style}</style>
      <section className="relative py-12 px-3 sm:py-20 sm:px-10 bg-gradient-to-br from-slate-50 via-white to-slate-200 rounded-3xl sm:mx-8 my-8 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 bg-emerald-400 opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-28 -right-28 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="relative z-10 max-w-4xl sm:max-w-6xl mx-auto">
          <h2 className="text-center text-4xl sm:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-emerald-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          <p className="text-center text-lg sm:text-xl text-gray-500 mb-8 sm:mb-12 px-2">
            We proudly collaborate with industry leaders and innovative organizations.
          </p>
          {/* Modern responsive marquee for md+ screens */}
          <div className="hidden sm:block mb-6">
            <Marquee speed={30}>
              {partners.map((partner, idx) => (
                <div
                  key={partner.alt}
                  className="flex items-center my-3 justify-center h-24 w-40 mx-6 bg-white/90 hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-2xl rounded-xl border border-gray-100 hover:scale-105"
                  style={{ minWidth: 160 }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="object-contain"
                    width={120}
                    height={72}
                    sizes="(max-width: 640px) 80px, 120px"
                    loading={idx < 2 ? "eager" : "lazy"}
                    priority={idx < 2}
                    style={{ maxHeight: '72px', maxWidth: '120px', width: 'auto', height: 'auto' }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="hidden sm:block">
            <Marquee reverse speed={36}>
              {partners.slice().reverse().map((partner, idx) => (
                <div
                  key={partner.alt}
                  className="flex items-center my-3 justify-center h-24 w-40 mx-6 bg-white/90 hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-2xl rounded-xl border border-gray-100 hover:scale-105"
                  style={{ minWidth: 160 }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="object-contain"
                    width={120}
                    height={72}
                    sizes="(max-width: 640px) 80px, 120px"
                    loading={idx < 2 ? "eager" : "lazy"}
                    priority={idx < 2}
                    style={{ maxHeight: '72px', maxWidth: '120px', width: 'auto', height: 'auto' }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          {/* Responsive grid for mobile */}
          <div className="grid grid-cols-2 gap-4 sm:hidden mt-6">
            {partners.map((partner, idx) => (
              <div
                key={partner.alt}
                className="flex items-center justify-center h-20 w-full bg-white/90 hover:bg-emerald-50 transition-all duration-200 shadow rounded-xl border border-gray-100"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain"
                  width={80}
                  height={48}
                  sizes="80px"
                  loading={idx < 2 ? "eager" : "lazy"}
                  priority={idx < 2}
                  style={{ maxHeight: '48px', maxWidth: '80px', width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner