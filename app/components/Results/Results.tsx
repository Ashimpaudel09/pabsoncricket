'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Play, Trophy, Calendar, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export const Results = ({ showAll = false }: { showAll?: boolean }) => {
  const allResults = [
    {
      id: 1,
      date: 'Magh 28',
      team1: 'Bagmati Challengers',
      team2: 'SudurPaschim Rising',
      score1: '118/7 (19.2 overs)',
      score2: '116/10 (20 overs)',
      winner: 'Bagmati Challengers',
      mom: 'Bishal Ayer (PABSON Bagmati) - 60 Runs off 55 Balls* (Not Out)',
      venue: 'T.U. Ground',
      link: 'https://www.youtube.com/watch?v=8N0Gp1thfeU'
    },
    {
      id: 2,
      date: 'Magh 28',
      team1: 'Gandaki Eagles',
      team2: 'Kathmandu Capitals',
      score1: '128/7 (17.0 overs)',
      score2: '139/7 (17.0 overs)',
      winner: 'Kathmandu Capitals',
      mom: 'Tapendra Bista (PABSON Kathmandu) - 5 wickets for 25 runs in 4 overs',
      venue: 'T.U. Ground',
      link: 'https://www.youtube.com/watch?v=jpcbFiDpJqo'
    },
    {
      id: 3,
      date: 'Magh 29',
      team1: 'Gandaki Eagles',
      team2: 'Koshi Strikers',
      score1: '87/10 (18.2 overs)',
      score2: '63/10 (16.3 overs)',
      winner: 'Gandaki Eagles won by 24 Runs',
      mom: 'Tapendra Bista (PABSON Kathmandu) - 5 wickets for 25 runs in 4 overs',
      venue: 'T.U. Ground',
      link: 'https://www.youtube.com/live/hDAhB4xRm6o?si=YkD8QGRnGX-tMvyy'
    },
    {
      id: 4,
      date: 'Magh 29',
      team1: 'SudurPaschim Rising',
      team2: 'Madhesh Royals',
      score1: '79/10 (18.0 overs)',
      score2: '82/2 (11.5 overs)',
      winner: 'Madhesh Royals won by 8 wickets',
      // mom: 'Tapendra Bista (PABSON Kathmandu) - 5 wickets for 25 runs in 4 overs',
      link: 'https://www.youtube.com/live/QvNLL2gZD1U?si=__8YgUKFIG5tSQHq'
    },
    {
      id: 5,
      date: 'Falgun 1',
      team1: 'Koshi Strikers',
      team2: 'Lumbini Monks',
      score1: '149/5 (20 overs)',
      score2: '153/6 (19.1 overs)',
      winner: 'Lumbini Monks won by 4 wickets',
      mom: 'Basudev yadav (Lumbini Monks) - 31 runs with bat and 2 wickets with ball',
      link: 'https://www.youtube.com/live/nOdFU8Am9Ec?si=r9huGxfB9QHmMaS7'
    },
    {
      id: 6,
      date: 'Falgun 1',
      team1: 'Karnali HighLanders',
      team2: 'Madhesh Royals',
      score1: '23/10 (10.5 overs)',
      score2: '24/0 (1.2 overs)',
      winner: 'Madhesh Royals won by 10 Wickets',
      mom: 'Khilraj Sarraf (Madhesh Royals) - 5 wickets in 4 overs',
      link: 'https://www.youtube.com/live/2Qc3ze8_ZAM?si=_hkOGKi8hxRr64tP'
    },
    {
      id: 7,
      date: 'Falgun 2',
      team1: 'Lumbini Monks',
      team2: 'Kathmandu Capitals',
      score1: '117/6 (20.0 overs)',
      score2: '110/9 (20.0 overs)',
      winner: 'Lumbini Monks won by 7 Runs',
      mom: 'Prem Gupta (Lumbini Monks) - 15 runs with bat and 2 wickets with ball',
      link: 'https://www.youtube.com/watch?v=pq1YWxE5CW0'
    },
    {
      id: 8,
      date: 'Falgun 2',
      team1: 'Bagmati Challengers',
      team2: 'Karnali HighLanders',
      score1: '196/7 (20.0 overs)',
      score2: '80/10 (17.1 overs)',
      winner: 'Bagmati Challengers won by 116 Runs',
      mom: 'Bishal Ayer (PABSON Bagmati) - 97 Runs off 61 Balls',
      link: 'https://www.youtube.com/watch?v=w6rmTatPGwE'
    },
    {
      id: 9,
      date: 'Falgun 3',
      team1: 'Kathmandu Capitals',
      team2: 'Koshi Strikers',
      score1: '142/5 (20.0 overs)',
      score2: '133/9 (20.0 overs)',
      winner: 'Kathmandu Capitals won by 9 runs',
      mom: 'Tapendra Bista (PABSON Kathmandu) - 51 runs off 44 balls* (Not Out)',
    
      link: 'https://www.youtube.com/live/vAB1qOopBQo?si=FYm9uWVlXhk-luzM'
    }, {
      id: 10,
      date: 'Falgun 3',
      team1: 'Madhesh Royals',
      team2: 'Bagmati Challengers',
      score1: '114/9 (20.0 overs)',
      score2: '96/9 (17.1 overs)',
      winner: 'Madhesh Royals won by 18 runs',
      mom: 'Khilraj Sarraf (Madhesh Royals) - 25 Runs with bat and 2 wickets with ball',
      link: 'https://www.youtube.com/live/zp7rUVH7mow?si=u9um_FPWaxgfrhVd'
    },
    {
      id: 11,
      date: 'Falgun 4',
      team1: 'SudurPaschim Rising',
      team2: 'Karnali HighLanders',
      score1: '160/5 (20.0 overs)',
      score2: '90/5 (20.0 overs)',
      winner: 'SudurPaschim Rising won by 70 runs',
      mom: 'Sudarshan Pant (SudurPaschim Rising) - 51 Runs off 39 Balls* (Not Out)',
   
      link: 'https://www.youtube.com/live/_d7UHYHqo0k?si=zhnnXFXyXb0_13fS' // Add link when available
    },
    {
      id: 12,
      date: 'Falgun 4',
      team1: 'Gandaki Eagles',
      team2: 'Lumbini Monks',
      score1: '84/10 (20.0 overs)',
      score2: '86/5 (18.0 overs)',
      winner: 'Lumbini Monks won by 5 wickets',
      mom: 'Prem Gupta (Lumbini Monks) - 3 wickets for 16 runs in 4 overs',
     
      link: 'https://www.youtube.com/live/dvsIp_4_xmU?si=36LyRDwhe0ckUpGl' // Add link when available
    },
  ];

  const sortedResults = [...allResults].sort((a, b) => b.id - a.id);

  const results = showAll ? sortedResults : sortedResults.slice(0, 3);


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
                    {r.winner}
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