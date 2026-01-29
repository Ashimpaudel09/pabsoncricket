import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pabsoncricketleague.com'),

  title: {
    default:
      'Pabson Cricket League | School & Under-15 Cricket League in Nepal',
    template: '%s | Pabson Cricket League',
  },

  description:
    'Pabson Cricket League is a leading school and under-15 cricket league in Nepal. Follow match schedules, results, points table, teams and highlights from Nepal’s growing youth cricket competition.',

  keywords: [
    // Brand
    'Pabson Cricket League',
    'Pabson League',
    'Pabson Cricket',

    // Core intent
    'Cricket League Nepal',
    'School Cricket League Nepal',
    'Under-15 Cricket League Nepal',
    'Youth Cricket League Nepal',

    // Tournament-related
    'Nepal Cricket Tournament',
    'School Cricket Tournament Nepal',
    'Under 15 Cricket Tournament Nepal',

    // Search variations
    'Cricket League in Nepal',
    'Cricket Tournament Nepal',
    'Nepal Youth Cricket',

    // Long-tail
    'School level cricket league in Nepal',
    'Under 15 school cricket league Nepal',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
  icon: [
    { url: '/favicon.ico' },
    { url: '/favicon.svg', type: 'image/svg+xml' },
  ],
  apple: '/apple-touch-icon.png',
},


  openGraph: {
    title:
      'Pabson Cricket League | School & Under-15 Cricket League in Nepal',
    description:
      'Official website of Pabson Cricket League — a school and under-15 cricket league in Nepal featuring youth teams, fixtures, results and highlights.',
    url: 'https://pabsoncricketleague.com',
    siteName: 'Pabson Cricket League',
    images: [
      {
        url: 'https://res.cloudinary.com/dmlntyta1/image/upload/v1769432426/pablogo_sreyip.png',
        width: 1200,
        height: 630,
        alt: 'Pabson Cricket League',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Pabson Cricket League | School & Under-15 Cricket League',
    description:
      'Follow fixtures, results and highlights from Nepal’s leading school and under-15 cricket league.',
    images: ['/pablogo.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
