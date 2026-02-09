'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Play, Trophy, Calendar, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export const Results = ({ showAll = false }: { showAll?: boolean }) => {
  const allResults = [
    {
      id: 1,
      date: 'Magh 24',
      team1: 'Bagmati Challengers',
      team2: 'SudurPaschim Rising',
      score1: '145/4',
      score2: '140/9',
      winner: 'Bagmati Challengers',
      mom: 'Kamal Shahi',
      venue: 'T.U. Ground',
      link: '#'
    },
    {
      id: 2,
      date: 'Magh 24',
      team1: 'Kathmandu Capitals',
      team2: 'Gandaki Eagles',
      score1: '162/3',
      score2: '163/5',
      winner: 'Gandaki Eagles',
      mom: 'Ahem Siddiqui',
      venue: 'T.U. Ground',
      link: '#'
    }
  ];

  const results = showAll ? allResults : allResults.slice(0, 3);

  const getTeamColor = (name: string) => {
    const first = name.split(' ')[0].toUpperCase();
    const colors: Record<string, string> = {
      BAGMATI: 'text-rose-600',
      SUDURPASCHIM: 'text-orange-500',
      KATHMANDU: 'text-blue-700',
      GANDAKI: 'text-red-600',
      LUMBINI: 'text-emerald-600',
      KARNALI: 'text-teal-600',
      KOSHI: 'text-slate-600',
      MADHESH: 'text-purple-600'
    };
    return colors[first] || 'text-slate-900';
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Compact Header */}
        <div className="flex items-end justify-between mb-8 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">Match Results</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PABSON League 2082</p>
          </div>
          {!showAll && (
            <Link href="/results" className="text-xs font-bold text-blue-600 flex items-center gap-1">
              See All <ArrowRight size={14} />
            </Link>
          )}
        </div>

        <div className="space-y-3">
          {results.map((r) => (
            <div key={r.id} className="group relative bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:border-blue-100 transition-all">
              
              {/* Top Row: Date & Venue */}
              <div className="flex justify-between items-center mb-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1"><Calendar size={10} /> {r.date}</span>
                <span className="flex items-center gap-1"><MapPin size={10} /> {r.venue}</span>
              </div>

              {/* Main Score Grid */}
              <div className="grid grid-cols-7 items-center gap-2">
                {/* Team 1 */}
                <div className="col-span-3 text-right">
                  <h4 className={`text-xs md:text-sm font-black truncate ${getTeamColor(r.team1)}`}>
                    {r.team1.split(' ')[0]}
                  </h4>
                  <p className="text-lg md:text-xl font-black text-slate-800 tracking-tighter">{r.score1}</p>
                </div>

                {/* VS Divider */}
                <div className="col-span-1 flex flex-col items-center">
                  <div className="w-px h-4 bg-slate-100 mb-1" />
                  <span className="text-[10px] font-black italic text-slate-300">VS</span>
                  <div className="w-px h-4 bg-slate-100 mt-1" />
                </div>

                {/* Team 2 */}
                <div className="col-span-3 text-left">
                  <h4 className={`text-xs md:text-sm font-black truncate ${getTeamColor(r.team2)}`}>
                    {r.team2.split(' ')[0]}
                  </h4>
                  <p className="text-lg md:text-xl font-black text-slate-800 tracking-tighter">{r.score2}</p>
                </div>
              </div>

              {/* Winner Banner - Simple Text */}
              <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Trophy size={12} className="text-amber-500" />
                  <span className="text-[10px] font-bold text-slate-600 italic">
                    {r.winner.split(' ')[0]} won by {r.score1 === '145/4' ? '5 runs' : '5 wickets'}
                  </span>
                </div>
                
                {r.link && (
                  <button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <Play size={10} fill="currentColor" />
                  </button>
                )}
              </div>

              {/* MOM Badge - Absolute Positioned Tiny Label */}
              <div className="absolute -top-2 left-4 bg-white px-2 py-0.5 border border-slate-100 rounded-md shadow-sm">
                <p className="text-[8px] font-black text-slate-500 flex items-center gap-1">
                  <Award size={8} className="text-amber-500" /> POTM: {r.mom}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};