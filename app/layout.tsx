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
  title: 'Pabson Cricket League | School Cricket Tournament in Nepal',
  description:
    'Pabson Cricket League is a premier school-level cricket tournament showcasing the best young cricketing talent. Follow live scores, match schedules, player stats, and highlights.',

  keywords: [
    'Pabson Cricket',
    'Pabson Cricket League',
    'School Cricket Nepal',
    'Nepal Cricket Tournament',
    'Pabson League 2026',
    'Cricket Fixtures Nepal',
    'Cricket Results Pabson',
  ],

  metadataBase: new URL('https://pabsoncricketleague.com'),

  icons: {
    icon: 'https://pabsoncricketleague.com/pablogo.ico',
    shortcut: 'https://pabsoncricketleague.com/pablogo.ico',
  },

  openGraph: {
    title: 'Pabson Cricket League | Live Scores & Fixtures',
    description:
      'Follow live scores, match schedules, player stats, and highlights of the thrilling Pabson Cricket League.',
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
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pabson Cricket League | Live Scores & Highlights',
    description:
      'Follow live scores, match schedules, player stats, and highlights of the thrilling Pabson Cricket League.',
    images: ['https://pabsoncricketleague.com/pablogo.png'],
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
