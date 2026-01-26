'use client';

import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Gallery } from '../components/Gallery/Gallery';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <Navbar />

      {/* Go Back Button */}
      <div className="sticky top-20 z-50 max-w-7xl mx-auto px-4 pl-0 sm:px-6 lg:px-8">
        <Link href="/#gallery">
          <Button
            variant="outline"
            className="rounded-full px-6 py-3 font-bold border-slate-300 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </Button>
        </Link>
      </div>

      {/* Full Gallery */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Gallery showAll />
      </div>
    </main>
  );
}
