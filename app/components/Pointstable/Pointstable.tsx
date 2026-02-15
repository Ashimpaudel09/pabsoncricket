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
   EDIT ONLY THIS DATA
========================= */

const teamStats: Record<string, TeamStat> = {
  // ================= GROUP A =================
  'Lumbini Monks': {
    group: 'A',
    w: 2,
    l: 0,
    nrr: '0.4186',
  },
  'Gandaki Eagles': {
    group: 'A',
    w: 1,
    l: 1,
    nrr: '0.3784',
  },
  'Kathmandu Capitals': {
    group: 'A',
    w: 1,
    l: 1,
    nrr: '0.0811',
  },
  'Koshi Strikers': {
    group: 'A',
    w: 0,
    l: 2,
    nrr: '-0.8277',
  },

  // ================= GROUP B =================
  'Madhesh Royals': {
    group: 'B',
    w: 2,
    l: 0,
    nrr: '5.5006',
  },
  'Bagmati Challengers': {
    group: 'B',
    w: 2,
    l: 0,
    nrr: '3.0831',
  },
  'SudurPaschim Rising': {
    group: 'B',
    w: 0,
    l: 2,
    nrr: '-1.5421',
  },
  'Karnali HighLanders': {
    group: 'B',
    w: 0,
    l: 2,
    nrr: '-7.7375',
  },
};

const groupColors = {
  A: 'bg-red-600',
  B: 'bg-red-600',
};

const PointsTable = () => {
  const groups = ['A', 'B'] as const;

  const buildGroupData = (group: 'A' | 'B') => {
    return Object.keys(teamStats)
      .filter((name) => teamStats[name].group === group)
      .map((name) => {
        const { w, l, nrr } = teamStats[name];
        const p = w + l;
        const pts = w * 2;

        return {
          name,
          p,
          w,
          l,
          pts,
          nrr,
        };
      })
      .sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        return parseFloat(b.nrr) - parseFloat(a.nrr);
      });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 to-orange-500">
      <div className="max-w-5xl mx-auto space-y-16 px-4">

        {groups.map((group) => {
          const data = buildGroupData(group);

          return (
            <div key={group} className="bg-white rounded-xl shadow-2xl overflow-hidden">

              {/* GROUP HEADER */}
              <div className={`${groupColors[group]} text-white px-6 py-4`}>
                <h2 className="text-xl font-bold tracking-widest">
                  GROUP {group}
                </h2>
              </div>

              {/* TABLE */}
              <Table>
                <TableHeader className="bg-yellow-400 text-black">
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>TEAM</TableHead>
                    <TableHead className="text-center">MATCH</TableHead>
                    <TableHead className="text-center">WON</TableHead>
                    <TableHead className="text-center">LOST</TableHead>
                    <TableHead className="text-center">PTS</TableHead>
                    <TableHead className="text-center">NET RR</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map((team, index) => (
                    <TableRow
                      key={team.name}
                      className={
                        index === 0
                          ? 'bg-yellow-100 font-semibold'
                          : 'hover:bg-gray-50'
                      }
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-bold">
                        {team.name}
                      </TableCell>
                      <TableCell className="text-center">{team.p}</TableCell>
                      <TableCell className="text-center text-green-600 font-bold">
                        {team.w}
                      </TableCell>
                      <TableCell className="text-center text-red-600 font-bold">
                        {team.l}
                      </TableCell>
                      <TableCell className="text-center font-black">
                        {team.pts}
                      </TableCell>
                      <TableCell className="text-center font-mono">
                        {team.nrr}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PointsTable;
