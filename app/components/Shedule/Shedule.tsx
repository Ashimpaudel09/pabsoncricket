'use client';

import React from 'react';
import { ArrowRight, Calendar, Play, Circle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

type ScheduleProps = {
  showAll?: boolean;
};

export const Schedule = ({ showAll = false }: ScheduleProps) => {
  const allMatches = [
    { id: 1, date: '28TH MAGH, 2082', time: '8:00 AM', t1: 'BAGMATI', t2: 'SUDURPASCHIM', liveLink: 'hel', status: 'upcoming' },
    { id: 2, date: '28TH MAGH, 2082', time: '1:00 PM', t1: 'KATHMANDU', t2: 'GANDAKI', liveLink: '', status: 'Upcoming' },
    { id: 3, date: '29TH MAGH, 2082', time: '9:00 AM', t1: 'GANDAKI', t2: 'KOSHI', liveLink: '', status: 'Upcoming' },
    { id: 4, date: '29TH MAGH, 2082', time: '1:00 PM', t1: 'SUDURPASCHIM', t2: 'MADHESH', liveLink: '', status: 'Upcoming' },
    { id: 5, date: '1 FALGUN, 2082', time: '9:00 AM', t1: 'KOSHI', t2: 'LUMBINI', liveLink: '', status: 'Upcoming' },
    { id: 6, date: '1 FALGUN, 2082', time: '1:00 PM', t1: 'MADHESH', t2: 'KARNALI', liveLink: '', status: 'Upcoming' },
    { id: 7, date: '2 FALGUN, 2082', time: '9:00 AM', t1: 'LUMBINI', t2: 'KATHMANDU', liveLink: '', status: 'Upcoming' },
    { id: 8, date: '2 FALGUN, 2082', time: '1:00 PM', t1: 'KARNALI', t2: 'BAGMATI', liveLink: '', status: 'Upcoming' },
    { id: 9, date: '3 FALGUN, 2082', time: '9:00 AM', t1: 'KATHMANDU', t2: 'KOSHI', liveLink: '', status: 'Upcoming' },
    { id: 10, date: '3 FALGUN, 2082', time: '1:00 PM', t1: 'BAGMATI', t2: 'MADHESH', liveLink: '', status: 'Upcoming' },
  ];

  const matches = showAll ? allMatches : allMatches.slice(0, 4);

  const getLogoPath = (name: string) => `/Team/${name.toLowerCase()}.jpeg`;

  // Muted, Professional Team Accents
  const getTeamAccent = (name: string) => {
    const accents: Record<string, string> = {
      BAGMATI: '#b91c1c',      // Deep Red
      SUDURPASCHIM: '#eab308', // Gold
      KATHMANDU: '#1e3a8a',    // Navy Blue
      GANDAKI: '#ea580c',      // Burnt Orange
      KOSHI: '#15803d',        // Forest Green
      MADHESH: '#be123c',       // Rose Red
      LUMBINI: '#6d28d9',      // Deep Purple
      KARNALI: '#0369a1',      // Ocean Blue
    };
    return accents[name] || '#475569';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Minimalist Professional Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-black italic tracking-tighter text-slate-900 mb-2">
            PCL <span className="text-red-600">2082</span>
          </h2>
          <div className="h-1 w-20 bg-slate-900 rounded-full" />
          <p className="mt-4 text-xs font-bold text-slate-500 tracking-[0.3em] uppercase">Official Match Schedule</p>
        </div>

        <div className="space-y-6">
          {matches.map((m) => (
            <div key={m.id} className="relative max-w-4xl mx-auto">
              
              {/* Main Container: Skewed Row */}
              <div className="flex items-center gap-0 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* Team 1 Banner */}
                <div className="flex-1 flex items-center bg-slate-50 h-20 md:h-24 border-l-8" 
                     style={{ borderColor: getTeamAccent(m.t1) }}>
                  <div className="px-4 md:px-8 flex items-center gap-4">
                    <img src={getLogoPath(m.t1)} className="h-10 w-10 md:h-14 md:w-14 object-contain grayscale-[0.2]" alt="" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400">TEAM ONE</span>
                      <span className="text-sm md:text-xl font-black text-slate-800">{m.t1}</span>
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="bg-slate-900 text-white h-20 md:h-24 px-4 md:px-8 flex items-center justify-center -skew-x-12 z-10 border-x-4 border-white">
                  <span className="skew-x-12 font-black italic text-sm md:text-lg">VS</span>
                </div>

                {/* Team 2 Banner */}
                <div className="flex-1 flex items-center justify-end bg-slate-50 h-20 md:h-24 border-r-8 text-right"
                     style={{ borderColor: getTeamAccent(m.t2) }}>
                  <div className="px-4 md:px-8 flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400">TEAM TWO</span>
                      <span className="text-sm md:text-xl font-black text-slate-800">{m.t2}</span>
                    </div>
                    <img src={getLogoPath(m.t2)} className="h-10 w-10 md:h-14 md:w-14 object-contain grayscale-[0.2]" alt="" />
                  </div>
                </div>
              </div>

              {/* Info Bar: Fixed below */}
              <div className="flex justify-between items-center px-6 py-2 bg-slate-100/50 mt-1 rounded-b-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-slate-600 font-bold text-[10px] md:text-xs">
                    <Calendar size={12} /> {m.date}
                  </div>
                  <div className="text-red-600 font-black italic text-[10px] md:text-xs">
                    {m.time}
                  </div>
                </div>

                {/* Subtle Status */}
                <div className="flex items-center gap-2">
                  {m.status === 'Live' ? (
                    <div className="flex items-center gap-1 text-red-600 animate-pulse font-black text-[10px]">
                      <Circle size={8} fill="currentColor" /> LIVE NOW
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase italic">Upcoming</span>
                  )}
                  {m.liveLink && (
                    <button onClick={() => window.open(m.liveLink)} className="ml-2 bg-slate-900 text-white p-1.5 rounded-md hover:bg-red-600 transition-colors">
                      <Play size={10} fill="white" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <Link href="/schedule">
              <Button variant="ghost" className="font-bold text-slate-500 hover:text-slate-900">
                VIEW FULL FIXTURES <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};