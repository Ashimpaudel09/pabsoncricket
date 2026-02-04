'use client';

import { motion } from 'motion/react';
import { ChevronRight, Calendar, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import NewsPopup from '../News/NewsPopup';

export const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const images = [
    'province/gandaki.jpg',
    'province/kathmandu.jpg',

  ];
  const [openPop, setOpenPop] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">

      <NewsPopup images={images} open={openPop} onClose={() => setOpenPop(false)}/>
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
{/* 
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                Season 2082 • Live Now
              </span>

            </div> */}

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              NEPAL'S PREMIER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                SCHOOL CRICKET
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              The PABSON Cricket League (PCL) brings together the finest U-15
              talent from across Kathmandu. Witness the future stars in action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                asChild
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-7 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1"
              >
                <div
                  onClick={() => handleScrollTo('schedule')}
                  className="cursor-pointer"
                >
                  Match Schedule <ChevronRight className="ml-2 h-5 w-5" />
                </div>
              </Button>
               <div className='flex items-center justify-center pt-4'>

          
        </div>
              {/* <Button
                variant="outline"
                asChild
                className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-7 rounded-2xl font-bold text-lg transition-all hover:border-slate-300"
              >
                <div
                  onClick={() => handleScrollTo('points')}
                  className="cursor-pointer"
                >
                  Points Table
                </div>
              </Button> */}
              <Button
                variant="outline"
                asChild
                className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-7 rounded-2xl font-bold text-lg transition-all hover:border-slate-300"
              >
                <div
                   onClick={()=>{setOpenPop(true)}}
                  className="cursor-pointer"
                >
                  Provincial Team Selection
                </div>
              </Button>
              
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-700" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Dates
                  </p>
                  <p className="font-bold text-slate-900">Magh 28 - Fagun 6</p>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Venue
                  </p>
                  <p className="font-bold text-slate-900">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[550px] aspect-[4/5] md:aspect-square">
              {/* Main Action Image */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-all duration-500 z-10">
                {/* Using standard img tag to prevent Next.js fetchPriority warnings in this environment */}
                <img

                  src="/yubraj.jpeg"
                  alt="Nepali Cricket Stadium Crowd"
                  className="absolute inset-0 w-auto h-auto object-fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-60 z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-40 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
