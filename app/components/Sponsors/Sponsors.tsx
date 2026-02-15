import React from 'react';

export const Sponsors = () => {
  const sponsorLogos = [
    '/sponsors/11.jpeg',
    '/sponsors/12.jpeg',
    '/sponsors/1.jpeg',
    '/sponsors/2.jpeg',
    '/sponsors/3.jpeg',
    '/sponsors/4.jpeg',
    '/sponsors/5.jpeg',
    '/sponsors/6.jpeg',
    '/sponsors/7.jpeg',
    '/sponsors/8.jpeg',
    '/sponsors/9.jpeg',
    '/sponsors/10.jpeg',
    '/sponsors/11.jpeg',
    '/sponsors/12.jpeg',
    '/sponsors/13.jpeg',
    '/sponsors/14.jpeg',
    '/sponsors/15.jpeg',
    '/sponsors/16.png',
    '/sponsors/17.png',
    '/sponsors/18.png',
    '/sponsors/32.png',
    '/sponsors/19.png',
    '/sponsors/20.png',
    '/sponsors/21.png',
    '/sponsors/22.png',
    '/sponsors/23.png',
    '/sponsors/24.png',
    '/sponsors/25.png',
    '/sponsors/26.png',
    '/sponsors/27.png',
    '/sponsors/28.png',
    '/sponsors/29.png',
    '/sponsors/30.png',
    '/sponsors/31.png',

  ];

  const bgColors = [
    'bg-slate-100',
    'bg-blue-50',
    'bg-yellow-50',
    'bg-red-50',
    'bg-green-50',
    'bg-yellow-50',
    'bg-blue-50',
    'bg-slate-50',
    'bg-green-50',
    'bg-purple-50',
    'bg-blue-50',
    'bg-yellow-50',

  ];

  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            Our Partners
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            OFFICIAL SPONSORS
          </h3>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {sponsorLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                bgColors[index % bgColors.length]
              }`}
            >
              <img
                src={logo}
                alt="Sponsor Logo"
                className="max-h-16 object-contain  transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};