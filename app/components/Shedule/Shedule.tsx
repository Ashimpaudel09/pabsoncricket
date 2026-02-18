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
    {
      id: 1,
      date: '28TH MAGH, 2082',
      time: '8:00 AM',
      t1: 'BAGMATI',
      t2: 'SUDURPASCHIM',
      liveLink: 'https://www.youtube.com/watch?v=8N0Gp1thfeU',
      status: 'Completed',
    },
    {
      id: 2,
      date: '28TH MAGH, 2082',
      time: '1:00 PM',
      t1: 'KATHMANDU',
      t2: 'GANDAKI',
      liveLink: 'https://www.youtube.com/watch?v=jpcbFiDpJqo',
      status: 'Completed',
    },
    {
      id: 3,
      date: '29TH MAGH, 2082',
      time: '9:00 AM',
      t1: 'GANDAKI',
      t2: 'KOSHI',
      liveLink: 'https://www.youtube.com/watch?v=hDAhB4xRm6o',
      status: 'Completed',
    },
    {
      id: 4,
      date: '29TH MAGH, 2082',
      time: '1:00 PM',
      t1: 'SUDURPASCHIM',
      t2: 'MADHESH',
      liveLink: 'https://www.youtube.com/live/QvNLL2gZD1U?si=__8YgUKFIG5tSQHq',
      status: 'Completed',
    },
    {
      id: 5,
      date: '1 FALGUN, 2082',
      time: '9:00 AM',
      t1: 'KOSHI',
      t2: 'LUMBINI',
      liveLink: 'https://www.youtube.com/live/nOdFU8Am9Ec?si=r9huGxfB9QHmMaS7',
      status: 'Completed',
    },
    {
      id: 6,
      date: '1 FALGUN, 2082',
      time: '1:00 PM',
      t1: 'MADHESH',
      t2: 'KARNALI',
      liveLink: 'https://www.youtube.com/live/2Qc3ze8_ZAM?si=_hkOGKi8hxRr64tP',
      status: 'Completed',
    },
    {
      id: 7,
      date: '2 FALGUN, 2082',
      time: '9:00 AM',
      t1: 'LUMBINI',
      t2: 'KATHMANDU',
      liveLink: 'https://www.youtube.com/watch?v=pq1YWxE5CW0',
      status: 'Completed',
    },
    {
      id: 8,
      date: '2 FALGUN, 2082',
      time: '1:00 PM',
      t1: 'KARNALI',
      t2: 'BAGMATI',
      liveLink: 'https://www.youtube.com/watch?v=w6rmTatPGwE',
      status: 'Completed',
    },
    {
      id: 9,
      date: '3 FALGUN, 2082',
      time: '9:00 AM',
      t1: 'KATHMANDU',
      t2: 'KOSHI',
      liveLink: '',
      status: 'Completed',
    },
    {
      id: 10,
      date: '3 FALGUN, 2082',
      time: '1:00 PM',
      t1: 'BAGMATI',
      t2: 'MADHESH',
      liveLink: 'https://www.youtube.com/live/zp7rUVH7mow?si=u9um_FPWaxgfrhVd',
      status: 'Completed',
    },
    {
      id: 11,
      date: '4 FALGUN, 2082',
      time: '9:00 AM',
      t1: 'SUDURPASCHIM',
      t2: 'KARNALI',
      liveLink: 'https://www.youtube.com/live/_d7UHYHqo0k?si=zhnnXFXyXb0_13fS',
      status: 'Completed',
    },
    {
      id: 12,
      date: '4 FALGUN, 2082',
      time: '1:00 PM',
      t1: 'GANDAKI',
      t2: 'LUMBINI',
      liveLink: 'https://www.youtube.com/live/dvsIp_4_xmU?si=36LyRDwhe0ckUpGl',
      status: 'Completed',
    },
    {
      id: 13,
      date: '5 FALGUN, 2082',
      time: '9:00 AM',
      t1: 'LUMBINI',
      t2: 'BAGMATI',
      liveLink: 'https://www.youtube.com/live/Yf3C9hUoZxo?si=ZVP3iyoL1C57lh7s',
      status: 'Completed',
      type: 'Semi-Final 1'
    },
    {
      id: 14,
      date: '5 FALGUN, 2082',
      time: '1:00 PM',
      t1: 'MADHESH',
      t2: 'KATHMANDU',
      liveLink: 'https://www.youtube.com/live/xd0qC9vzDo4?si=Q__Dq5gCpt0Eqgp-',
      status: 'Completed',
      type: 'Semi-Final 2'
    },
    {
      id: 15,
      date: '6 FALGUN, 2082',
      time: '9:00 AM',
      t1: 'KATHMANDU',
      t2: 'LUMBINI',
      liveLink: 'https://www.youtube.com/watch?v=aiUggr2xPO4',
      status: 'Live',
      type: 'Finals'
    },
  ];

  const matches = showAll ? allMatches : allMatches.slice(14, 15);
  const getLogoPath = (name: string) => {
    // List of known teams that have specific logos
    const knownTeams = [
      'BAGMATI', 'SUDURPASCHIM', 'KATHMANDU', 'GANDAKI', 
      'KOSHI', 'MADHESH', 'LUMBINI', 'KARNALI'
    ];

    // If the team is known, return its specific logo, otherwise return the tbd placeholder
    if (knownTeams.includes(name.toUpperCase())) {
      return `/Team/${name.toLowerCase()}.jpeg`;
    }
    
    return '/Team/tbd.jpeg'; // Path to your placeholder image
  };

  const getTeamAccent = (name: string) => {
    const accents: Record<string, string> = {
      BAGMATI: '#b91c1c',
      SUDURPASCHIM: '#eab308',
      KATHMANDU: '#1e3a8a',
      GANDAKI: '#ea580c',
      KOSHI: '#15803d',
      MADHESH: '#be123c',
      LUMBINI: '#6d28d9',
      KARNALI: '#0369a1',
    };
    return accents[name] || '#475569';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-black italic tracking-tighter text-slate-900 mb-2">
            PCL <span className="text-red-600">2082</span>
          </h2>
          <div className="h-1 w-20 bg-slate-900 rounded-full" />
          <p className="mt-4 text-xs font-bold text-slate-500 tracking-[0.3em] uppercase text-center">
            Official Match Schedule
          </p>
        </div>

        <div className="space-y-8 md:space-y-6">
          {matches.map((m) => (
            <div key={m.id} className="relative max-w-4xl mx-auto">
              {/* Main Container: Stacked on Mobile, Row on Desktop */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-0 overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-t-lg md:rounded-none">
                {/* Team 1 Banner */}
                <div
                  className="flex-1 flex items-center bg-slate-50 h-20 md:h-24 border-l-8"
                  style={{ borderColor: getTeamAccent(m.t1) }}
                >
                  <div className="px-4 md:px-8 flex items-center gap-4 w-full">
                    <img
                      src={getLogoPath(m.t1)}
                      className="h-10 w-10 md:h-14 md:w-14 object-contain"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400">
                        TEAM ONE
                      </span>
                      <span className="text-sm md:text-xl font-black text-slate-800 uppercase leading-tight">
                        {m.t1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* VS Divider - Different styles for mobile vs desktop */}
                <div className="bg-slate-900 text-white h-8 md:h-24 px-4 md:px-8 flex items-center justify-center md:-skew-x-12 z-10 md:border-x-4 border-white relative">
                  <span className="md:skew-x-12 font-black italic text-xs md:text-lg">
                    VS
                  </span>
                </div>

                {/* Team 2 Banner - Reversed flex order on mobile for consistency */}
                <div
                  className="flex-1 flex items-center md:justify-end bg-slate-50 h-20 md:h-24 border-r-8 text-left md:text-right"
                  style={{ borderColor: getTeamAccent(m.t2) }}
                >
                  <div className="px-4 md:px-8 flex flex-row-reverse md:flex-row items-center justify-end gap-4 w-full">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400">
                        TEAM TWO
                      </span>
                      <span className="text-sm md:text-xl font-black text-slate-800 uppercase leading-tight">
                        {m.t2}
                      </span>
                    </div>
                    <img
                      src={getLogoPath(m.t2)}
                      className="h-10 w-10 md:h-14 md:w-14 object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                {m.type && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase z-20">
                    {m.type}
                  </div>
                )}
                {!m.type && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase z-20">
                    League
                  </div>
                )}
              </div>

              {/* Info Bar */}
              <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-2 bg-slate-100/80 mt-1 rounded-b-lg border-t border-slate-200 md:border-none">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-1 text-slate-600 font-bold text-[10px] md:text-xs">
                    <Calendar size={12} className="shrink-0" />
                    <span className="whitespace-nowrap">{m.date}</span>
                  </div>
                  <div className="text-red-600 font-black italic text-[10px] md:text-xs whitespace-nowrap">
                    {m.time}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {m.status.toLowerCase() === 'completed' && (
                    <div className="text-[10px] font-bold text-slate-500 uppercase italic flex items-center">
                      <p>Completed</p>
                      <button
                      onClick={() => window.open(m.liveLink, '_blank')}
                      className="ml-2 bg-slate-900 text-white p-2 md:p-1.5 rounded-md hover:bg-red-600 transition-colors flex text-xs"
                    >
                      
                      <Play size={14} fill="white" />
                      Match Highlights
                    </button>
                    </div>
                    
                  )}

                  {m.status.toLowerCase() === 'live' && (
                    <div className="flex items-center gap-1 text-red-600 animate-pulse font-black text-[10px]">
                      <Circle size={8} fill="currentColor" /> LIVE
                      <button
                      onClick={() => window.open(m.liveLink, '_blank')}
                      className="ml-2 bg-slate-900 text-white p-2 md:p-1.5 rounded-md hover:bg-red-600 transition-colors flex text-xs"
                    >
                      <Play size={14} fill="white" />
                      Watch Live
                    </button>
                    </div>
                  )}

                  {m.status.toLowerCase() === 'upcoming' && (
                    <span className="text-[10px] font-bold text-slate-400 uppercase italic">
                      Upcoming
                    </span>
                  )}

                  {/* {m.liveLink && (
                    <button
                      onClick={() => window.open(m.liveLink, '_blank')}
                      className="ml-2 bg-slate-900 text-white p-2 md:p-1.5 rounded-md hover:bg-red-600 transition-colors flex text-xs"
                    >
                      <Play size={14} fill="white" />
                      Match Highlights
                    </button>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 md:mt-16 text-center">
            <Link href="/schedule">
              <Button
                variant="ghost"
                className="font-bold text-slate-500 hover:text-slate-900 text-xs md:text-sm"
              >
                VIEW FULL FIXTURES <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
