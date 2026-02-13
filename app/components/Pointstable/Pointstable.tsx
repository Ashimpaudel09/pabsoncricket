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

/* =========================
   1. Team Stat Interface
========================= */
interface TeamStat {
  w: number;   // Wins
  l: number;   // Losses
  nrr: string; // Net Run Rate
}

/* =========================
   2. EDITABLE DATA (ONLY UPDATE THIS)
========================= */
const teamStats: Record<string, TeamStat> = {
 'Kathmandu Capitals':   { w: 1, l: 0, nrr: '0.5882' },
  'Lumbini Monks':        { w: 0, l: 0, nrr: '0.000' },
  'Madhesh Royals':       { w: 1, l: 0, nrr: '2.9796' },
  'SudurPaschim Rising':  { w: 0, l: 2, nrr: '-1.5421' },
  'Bagmati Challengers': { w: 1, l: 0, nrr: '0.3034' },
  'Karnali HighLanders':  { w: 0, l: 0, nrr: '0.000' },
  'Gandaki Eagles':       { w: 1, l: 1, nrr: '0.3784' },
  'Koshi Strikers':       { w: 0, l: 1, nrr: '-1.2000' },
};

/* =========================
   3. POINTS TABLE COMPONENT
========================= */
export const PointsTable = () => {

  /* ---- Derived Stats (AUTO) ---- */
  const displayData = Object.keys(teamStats).map((name) => {
    const { w, l, nrr } = teamStats[name];

    const p = w + l;      // Matches Played
    const pts = w * 2;    // 2 points per win

    return {
      name,
      logo: `/Team/${name.split(' ')[0].toLowerCase()}.jpeg`,
      p,
      w,
      l,
      pts,
      nrr,
    };
  });

  /* ---- Sorting: Points → NRR ---- */
  const sortedData = [...displayData].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    return parseFloat(b.nrr) - parseFloat(a.nrr);
  });

  return (
    <section id="points-table" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            Standings
          </h2>
          <h3 className="text-4xl font-black text-slate-900">
            Points Table
          </h3>
          <p className="text-slate-500 mt-2 text-sm italic">
            Automatically calculated based on match results
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-center w-[70px]">Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">L</TableHead>
                <TableHead className="text-center">Pts</TableHead>
                <TableHead className="text-center">NRR</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow
                  key={row.name}
                  className="hover:bg-slate-50/60 transition"
                >
                  {/* Position */}
                  <TableCell className="text-center font-bold text-slate-400">
                    {index + 1}
                  </TableCell>

                  {/* Team */}
                  <TableCell className="font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                        <img
                          src={row.logo}
                          alt={row.name}
                          className="w-full h-full object-contain"
                          onError={(e) =>
                            ((e.target as HTMLImageElement).style.opacity = '0')
                          }
                        />
                      </div>
                      {row.name}
                    </div>
                  </TableCell>

                  {/* Stats */}
                  <TableCell className="text-center">{row.p}</TableCell>
                  <TableCell className="text-center font-semibold text-green-600">
                    {row.w}
                  </TableCell>
                  <TableCell className="text-center font-semibold text-red-500">
                    {row.l}
                  </TableCell>
                  <TableCell className="text-center font-black text-blue-900 text-lg">
                    {row.pts}
                  </TableCell>
                  <TableCell className="text-center text-slate-500 font-mono text-xs">
                    {row.nrr}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};