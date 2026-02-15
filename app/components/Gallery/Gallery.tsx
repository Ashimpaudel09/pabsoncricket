'use client';

import React from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowUpRight, GalleryHorizontal, Instagram } from 'lucide-react';
import Link from 'next/link';

type GalleryItem = {
  id: number;
  imageUrl: string;
};

type GalleryProps = {
  showAll?: boolean;
};

export const Gallery = ({ showAll = false }: GalleryProps) => {
  const allItems: GalleryItem[] = [
    { id: 1, imageUrl: '/gallery/1.jpg' },
    { id: 2, imageUrl: '/gallery/2.jpg' },
    { id: 3, imageUrl: '/gallery/3.jpg' },
    { id: 4, imageUrl: '/gallery/4.jpg' },
    { id: 5, imageUrl: '/gallery/5.jpg' },
    { id: 6, imageUrl: '/gallery/6.jpg' },
    { id: 5, imageUrl: '/gallery/7.jpg' },
    { id: 6, imageUrl: '/gallery/8.jpg' },
    { id: 5, imageUrl: '/gallery/9.jpg' },
    { id: 6, imageUrl: '/gallery/10.jpg' },
    { id: 5, imageUrl: '/gallery/11.jpg' },
    { id: 6, imageUrl: '/gallery/12.jpg' },
    // { id: 5, imageUrl: '/gallery/13.jpg' },
    // { id: 6, imageUrl: '/gallery/14.jpg' },
    // { id: 5, imageUrl: '/gallery/15.jpg' },
    // { id: 6, imageUrl: '/gallery/16.jpg' },
  ];

  const items = showAll ? allItems : allItems.slice(0, 8);

  return (
    <section
      id="gallery"
      className={`py-16 ${showAll ? 'min-h-screen bg-white' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-bold text-xs mb-2">
            <GalleryHorizontal className="h-3 w-3" />
            Match Gallery
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            {showAll ? 'Gallery' : 'Recent Moments'}
          </h2>
        </div>

        {!showAll && (
          <div className="mb-6 text-right">
            <Button
              variant="outline"
              className="rounded-full border-slate-300"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
            </Button>
          </div>
        )}

        {/* Gallery Grid */}
        <div
          className={`grid gap-4 ${
            showAll
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              : 'grid-cols-2 md:grid-cols-4'
          }`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition group"
            >
              <img
                src={item.imageUrl}
                alt="Gallery Image"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {!showAll && (
          <div className="mt-10 text-center">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 font-bold border-slate-300 inline-flex items-center gap-2"
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