'use client';

import React from 'react';
import { Shield, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';

export const Teams = () => {
  const teams = [
    {
      id: 1,
      name: 'Kathmandu Capitals',
      coach: 'Ramesh Bhatta',
      cardBg: 'bg-blue-50',

      squad: [
        { name: 'Insaab Bohara (C)' }, // Captain
        { name: 'Sanshray Shrestha' },
        { name: 'Mingma Tamang' },
        { name: 'Sandeep Saud' },
        { name: 'Kushal BC' },
        { name: 'John Oli' },
        { name: 'Dipak Joshi' },
        { name: 'Prayush Upreti' },
        { name: 'Sambhav Dhakal' },
        { name: 'Sushant Lamichhane' },
        { name: 'Jivan Budha' },
        { name: 'Tapendra Bista' },
        { name: 'Shantanu Basnet' },
        { name: 'Rijan Shrestha' },
      ],
      reservePlayers: [
        { name: 'Saugat Thapa' },
        { name: 'Biraj Bista' },
        { name: 'Prasanna Jaisi' },
        { name: 'Abhishek Kathayat' },
      ],

    },
    {
      id: 2,
      name: 'Lumbini Monks',
      coach: 'Sunil Shrestha',
      cardBg: 'bg-emerald-50',

      squad: [
        { name: 'Arun Jung Giri' },
        { name: 'Basudev Yadav' },
        { name: 'Arpan Timilsana' },
        { name: 'Ashish Yadav' },
        { name: 'Amit Kumar Yadav' },
        { name: 'Samir Jung Thakuri' },
        { name: 'Sarik Ali' },
        { name: 'Sandip Thapa' },
        { name: 'Rijan Budathoki' },
        { name: 'Shreyans Gyanwali' },
        { name: 'Himal Devkota' },
        { name: 'Javed Khan' },
        { name: 'Krishna Panthi' },
        { name: 'Sahan Ali' },
      ],
      reservePlayers: [
        { name: 'Alex Rawal' },
        { name: 'Rudransh Bhattarai' },
        { name: 'Sakshyam Shakya' },
        { name: 'Prem Gupta' },
      ],
      headCoach: 'Antim Thapa',

    },
    {
      id: 3,
      name: 'Madhesh Royals',
      coach: 'Anil Gurung',
      cardBg: 'bg-purple-50',
      squad: [{ name: 'Player A (C)' }, { name: 'Player B' }],
    },
    {
      id: 4,
      name: 'SudurPaschim Rising',
      coach: 'Binod Das',
      cardBg: 'bg-orange-50',
      squad: [
        { name: 'Anil Rawat' },
        { name: 'Naresh Sunar' },
        { name: 'Agendra Saud' },
        { name: 'Dhirendra Neupane' },
        { name: 'Ankit Chand' },
        { name: 'Sagar Bist' },
        { name: 'Aayush Singh Pujara' },
        { name: 'Bigyan Bohara' },
        { name: 'Birat Singh' },
        { name: 'Sudarshan Pant' },
        { name: 'Niraj Bhatta' },
        { name: 'Suraj Khadayat' },
        { name: 'Niraj Bhattarai' },
        { name: 'Manoj Chand' },
      ],
      reservePlayers: [
        { name: 'Royal Dhakal' },
        { name: 'Bishal Chand' },
        { name: 'Bibek Saud' },
        { name: 'Aadrsha Thapa' },
      ],
    },

    {
      id: 5,
      name: 'Bagmati Challengers',
      cardBg: 'bg-pink-50',

      squad: [
        { name: 'Kamal Shahi' },
        { name: 'Bishal Ayer' },
        { name: 'Raunak Shah' },
        { name: 'Sisheer Oli' },
        { name: 'Dikshant Mishra' },
        { name: 'Yug Hang Rai' },
        { name: 'Anil Gurung' },
        { name: 'Kevin Dulyal' },
        { name: 'Yugant Karki' },
        { name: 'Sachin Sunuwar' },
        { name: 'Satyam Chaurasiya' },
        { name: 'Shubham Parajuli' },
        { name: 'Bhaskar Acharya' },
        { name: 'Hemraj Mahara' },
      ],
      reservePlayers: [
        { name: 'Aavash Bikram Khadka' },
        { name: 'Divittyam Dhakal' },
        { name: 'Bhagwat Acharya' },
        { name: 'Kripesh Puri' },
        { name: 'Rishu Shah Subedi' },
        { name: 'Pawan Yadav' },
      ],
    },

    {
      id: 6,
      name: 'Karnali HighLanders',
      cardBg: 'bg-teal-50',

      squad: [
        { name: 'Sunil Shahi (C)' }, // Captain
        { name: 'Bipin Shahi (VC)' }, // Vice Captain
        { name: 'Prajwol Budha' },
        { name: 'Bipin Budha' },
        { name: 'Ashutosh Kandel' },
        { name: 'Subash Sahi' },
        { name: 'Yogesh Acharya' },
        { name: 'Aaryat Shejwal' },
        { name: 'Aaryan Bhandari' },
        { name: 'Swornin Shahi' },
        { name: 'Bupendra Pariyar' },
        { name: 'Kiran Kumar Malla' },
        { name: 'Kosis Basnet' },
        { name: 'Kushal Rokaya' },
      ],
      reservePlayers: [
        { name: 'Bibek Malla' },
        { name: 'Pawan Lamsal' },
        { name: 'Sweekar Shahi' },
        { name: 'Mithun Budha' },
        { name: 'Bishal Singh' },
      ],

    },
    {
      id: 7,
      name: 'Gandaki Eagles',
      cardBg: 'bg-red-50',

      squad: [
        { name: 'Ahem Siddiqui' },
        { name: 'Anish Bhattarai' },
        { name: 'Niranjan thakur' },
        { name: 'Sujan Aryal' },
        { name: 'Ayoush Bhujel' },
        { name: 'Ashahad siddiqui' },
        { name: 'Dip Gurung' },
        { name: 'Sumin Gharti Magar' },
        { name: 'Saidulla Ansari' },
        { name: 'Tushar Sharma' },
        { name: 'Suprim Neupane' },
        { name: 'Anish Pokhrel' },
        { name: 'Samrid Bhushal' },
        { name: 'Prasidha Acharya' },
      ],
      reservePlayers: [
        { name: 'Siris Bastola' },
        { name: 'Sahil Kunwar' },
        { name: 'Arogya Pokharel' },
        { name: 'Samir Raj pandit' },
      ],

    },
    {
      id: 8,
      name: 'Koshi Strikers',
      cardBg: 'bg-gray-50',
      squad: [
        { name: 'Uttam Rajbanshi' },
        { name: 'Luseng Gurung' },
        { name: 'Kshitiz Karn' },
        { name: 'Aadil Manzoor' },
        { name: 'Prajwal Adhikari' },
        { name: 'Adveek Bastola' },
        { name: 'Rusal Sundas' },
        { name: 'Bijay Mandal' },
        { name: 'Prajwal Sedai' },
        { name: 'Md Aayan Allam' },
        { name: 'Ujwal Khatiwada' },
        { name: 'Aakash Yadav' },
        { name: 'Mukesh Yadav' },
        { name: 'Diwas Bista' },
      ],
      reservePlayers: [
        { name: 'Shrijal Shah' },
        { name: 'Anok rai' },
        { name: 'Kritartha Basnet' },
        { name: 'Samir Budhathoki' },
      ],
    }

  ];

  return (
    <section id="teams" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">
            The Competitors
          </h2>
          <h3 className="text-4xl font-black text-slate-900">All Teams</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => {
            const logoName = team.name.split(' ')[0].toLowerCase();

            return (
              <Dialog key={team.id}>
                <DialogTrigger asChild>
                  {/* TEAM CARD */}
                  <div
                    className={`cursor-pointer rounded-3xl border border-slate-200 p-6 hover:shadow-xl transition-all ${team.cardBg}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={`/Team/${logoName}.jpeg`}
                          alt={`${team.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-slate-900">
                          {team.name}
                        </h4>
                        <p className="text-sm font-bold text-slate-500 flex items-center gap-1">
                          <Shield className="h-3 w-3" /> Team
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Dialog (UNCHANGED / NEUTRAL) */}
                <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
                  <div className="p-8 bg-slate-900 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-black">
                        {team.name}
                      </DialogTitle>
                      <DialogDescription className="text-white/70">
                        Team Squad
                      </DialogDescription>
                    </DialogHeader>

                    {team.coach && (
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                        <User className="h-4 w-4" /> Coach: {team.coach}
                      </div>
                    )}
                  </div>

                  {/* Squad */}
                  <div className="p-6 max-h-[60vh] overflow-y-auto space-y-8">
                    {/* Main Squad */}
                    {team.squad?.length ? (
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-slate-700">
                          Squad
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {team.squad.map((player, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-xl bg-slate-50 border"
                            >
                              <p className="font-bold text-slate-900 text-sm">
                                {player.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-center text-slate-400 font-bold">
                        Squad to be announced
                      </p>
                    )}

                    {/* Reserves */}
                    {team.reservePlayers?.length && (
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-slate-700">
                          Reserves
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {team.reservePlayers.map((player, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-xl bg-white border border-dashed"
                            >
                              <p className="font-bold text-slate-800 text-sm">
                                {player.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>


                  <div className="p-6 border-t bg-slate-50">
                    <Button className="w-full rounded-xl font-bold">
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};
