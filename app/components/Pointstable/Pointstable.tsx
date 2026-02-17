'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

interface TeamStat {
  group: 'A' | 'B';
  w: number;
  l: number;
  nrr: string;
}

/* =========================
   DATA SOURCE
========================= */
const teamStats: Record<string, TeamStat> = {
  'PABSON LUMBINI U15': { group: 'A', w: 3, l: 0, nrr: '0.5107' },
  'PABSON KATHMANDU U15': { group: 'A', w: 2, l: 1, nrr: '0.2105' },
  'PABSON GANDAKI U15': { group: 'A', w: 1, l: 2, nrr: '0.0268' },
  'PABSON KOSHI U15': { group: 'A', w: 0, l: 3, nrr: '-0.7063' },
  'PABSON MADHESH U15': { group: 'B', w: 3, l: 0, nrr: '3.3332' },
  'PABSON BAGMATI U15': { group: 'B', w: 2, l: 1, nrr: '1.7434' },
  'PABSON SUDURPASCHIM U15': { group: 'B', w: 1, l: 2, nrr: '0.2489' },
  'PABSON KARNALI U15': { group: 'B', w: 0, l: 3, nrr: '-5.9769' },
};

const PointsTable = () => {
  const groups = ['A', 'B'] as const;

  const buildGroupData = (group: 'A' | 'B') => {
    return Object.keys(teamStats)
      .filter((name) => teamStats[name].group === group)
      .map((name) => {
        const { w, l, nrr } = teamStats[name];
        return { name, p: w + l, w, l, pts: w * 2, nrr };
      })
      .sort((a, b) => b.pts - a.pts || parseFloat(b.nrr) - parseFloat(a.nrr));
  };

  return (
    <section className="py-12 bg-slate-950 min-h-screen text-slate-100 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
            POINTS <span className="text-yellow-400">TABLE</span>
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid gap-12">
          {groups.map((group) => (
            <div key={group} className="relative shadow-2xl overflow-hidden rounded-xl border border-white/10">
              
              {/* Vibrant Group Header */}
              <div className="bg-gradient-to-r from-red-700 to-red-600 px-6 py-4 flex justify-between items-center border-b-4 border-yellow-400">
                <h2 className="text-xl font-black italic tracking-widest text-white">GROUP {group}</h2>
                <span className="text-[10px] font-bold bg-black/30 px-2 py-1 rounded text-yellow-300 tracking-widest">RANKINGS</span>
              </div>

              <div className="bg-slate-900/90 overflow-x-auto">
                <Table>
                  <TableHeader className="bg-yellow-400">
                    <TableRow className="hover:bg-yellow-400 border-none">
                      <TableHead className="w-16 text-center text-black font-black uppercase text-xs">#</TableHead>
                      <TableHead className="text-black font-black uppercase text-xs italic">Team</TableHead>
                      <TableHead className="text-center text-black font-black uppercase text-xs">M</TableHead>
                      <TableHead className="text-center text-black font-black uppercase text-xs">W</TableHead>
                      <TableHead className="text-center text-black font-black uppercase text-xs">L</TableHead>
                      <TableHead className="text-center text-black font-black uppercase text-xs">NRR</TableHead>
                      <TableHead className="text-center text-black font-black uppercase text-xs">Pts</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {buildGroupData(group).map((team, index) => {
                      const isQualified = index < 2;
                      return (
                        <TableRow 
                          key={team.name} 
                          className={`border-b border-slate-800/50 transition-colors ${isQualified ? 'bg-green-500/5' : 'bg-transparent'}`}
                        >
                          {/* Status Badge Column */}
                          <TableCell className="text-center">
                            <span className={`
                              inline-flex items-center justify-center w-6 h-6 rounded text-[10px] font-black
                              ${isQualified ? 'bg-green-600 text-white shadow-[0_0_10px_rgba(22,163,74,0.4)]' : 'bg-red-600 text-white'}
                            `}>
                              {isQualified ? 'Q' : 'E'}
                            </span>
                          </TableCell>
                          
                          <TableCell>
                            <span className="font-bold text-slate-100 text-sm tracking-tight">{team.name}</span>
                          </TableCell>
                          
                          <TableCell className="text-center font-medium text-slate-400 text-sm">{team.p}</TableCell>
                          <TableCell className="text-center font-bold text-green-400 text-sm">{team.w}</TableCell>
                          <TableCell className="text-center font-bold text-red-500 text-sm">{team.l}</TableCell>
                          
                          <TableCell className={`text-center font-mono text-xs font-bold ${parseFloat(team.nrr) >= 0 ? 'text-blue-400' : 'text-orange-500'}`}>
                            {parseFloat(team.nrr) > 0 ? `+${team.nrr}` : team.nrr}
                          </TableCell>
                          
                          <TableCell className="text-center">
                            <span className="text-sm font-black text-yellow-400">
                              {team.pts}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsTable;