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

// 1. Define the shape of the statistics object
interface TeamStat {
  p: number;   // Matches Played
  w: number;   // Won
  l: number;   // Lost
  pts: number; // Points
  nrr: string; // Net Run Rate (string to preserve decimals like "0.000")
}

// 2. EDITABLE DATA: Update these numbers to change the table standings
// The Record<string, TeamStat> prevents the indexing error you encountered.
const teamStats: Record<string, TeamStat> = {
  'Kathmandu Capitals':    { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'Lumbini Monks':         { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'Madhesh Royals':        { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'SudurPaschim Rising':   { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'Bagmati Challengers':   { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'Karnali HighLanders':   { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'Gandaki Eagles':        { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
  'Koshi Strikers':        { p: 0, w: 0, l: 0, pts: 0, nrr: '0.000' },
};

export const PointsTable = () => {
  // 3. Transform the object into a displayable array
  const displayData = Object.keys(teamStats).map((name) => ({
    name,
    // Generates path like: /Team/kathmandu.jpeg
    logo: `/Team/${name.split(' ')[0].toLowerCase()}.jpeg`,
    ...teamStats[name],
  }));

  // 4. DYNAMIC SORTING: Ranks by Points (desc), then NRR (desc)
  const sortedData = [...displayData].sort((a, b) => {
    if (b.pts !== a.pts) {
      return b.pts - a.pts;
    }
    return parseFloat(b.nrr) - parseFloat(a.nrr);
  });

  return (
    <section id="points-table" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            Standings
          </h2>
          <h3 className="text-4xl font-black text-slate-900">Points Table</h3>
          <p className="text-slate-500 mt-2 text-sm italic">
            Dynamically updated based on team performance
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-center w-[80px]">Pos</TableHead>
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
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  {/* Position */}
                  <TableCell className="text-center font-bold text-slate-400 group-hover:text-blue-600">
                    {index + 1}
                  </TableCell>

                  {/* Team Name & Logo */}
                  <TableCell className="font-bold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                        <img 
                          src={row.logo} 
                          alt={`${row.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Hides broken image icon if logo is missing
                            (e.target as HTMLImageElement).style.opacity = '0';
                          }}
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