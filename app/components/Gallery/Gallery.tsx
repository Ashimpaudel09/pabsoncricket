'use client';

import React from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowUpRight, GalleryHorizontal, Instagram } from 'lucide-react';
import Link from 'next/link';

type GalleryItem = {
  id: number;
  title: string;
  featured?: boolean;
  imageUrl?: string;
};

type GalleryProps = {
  showAll?: boolean;
};

export const Gallery = ({ showAll = false }: GalleryProps) => {
  const allItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Opening Ceremony',
      featured: true,
      imageUrl: 'https://picsum.photos/600/600?random=1',
    },
    {
      id: 2,
      title: 'Match Moment 1',
      imageUrl: 'https://picsum.photos/300/300?random=2',
    },
    {
      id: 3,
      title: 'Match Moment 2',
      imageUrl: 'https://picsum.photos/300/300?random=3',
    },
    {
      id: 4,
      title: 'Highlight 1',
      imageUrl: 'https://picsum.photos/300/300?random=4',
    },
    {
      id: 5,
      title: 'Highlight 2',
      imageUrl: 'https://picsum.photos/300/300?random=5',
    },
    {
      id: 6,
      title: 'Closing Ceremony',
      imageUrl: 'https://picsum.photos/300/300?random=6',
    },
    {
      id: 7,
      title: 'Extra Highlight 1',
      imageUrl: 'https://picsum.photos/300/300?random=7',
    },
    {
      id: 8,
      title: 'Extra Highlight 2',
      imageUrl: 'https://picsum.photos/300/300?random=8',
    },
  ];

  const items = showAll ? allItems : allItems.slice(0, 5);

  return (
    <section
      id="gallery"
      className={`py-24 ${showAll ? 'min-h-screen py-32' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-bold text-xs mb-2">
              <GalleryHorizontal className="h-3 w-3" />
              <span>MATCH RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
              {showAll ? 'All Results' : 'Recent Results'}
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Stay updated with the latest match outcomes and highlights
            </p>
          </div>
          <div className='pb-5 text-right'>
          {!showAll && (
            <Button className="bg-white text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-full shadow-sm hover:tect-pu">
              <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
            </Button>
          )}
          </div>

        {/* Gallery Grid */}
        <div
          className={`grid gap-4 ${showAll
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px]'
              : 'grid-cols-2 md:grid-cols-4 grid-rows-2 h-[600px]'
            }`}
        >
          {items.map((item) => {
            if (item.featured) {
              return (
                <div
                  key={item.id}
                  className={`relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center ${showAll
                      ? 'col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 h-full'
                      : 'col-span-2 row-span-2'
                    }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-4 md:p-8">
                    <div>
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                        FEATURED
                      </span>
                      <p className="text-white font-bold text-lg md:text-2xl">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            // Normal image: show title only on hover
            return (
              <div
                key={item.id}
                className="relative rounded-3xl shadow-md overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded bg-black/40">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 font-bold border-slate-300 flex items-center gap-2 justify-center"
              >
                View Full Gallery <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
