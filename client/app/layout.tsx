import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/footer';
import ScrollHandler from '@/components/ScrollHandler';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finelin - VFX & Animation Studio',
  description: 'ReDefining the art of Visual Effects and Animation',
  openGraph: {
    title: 'Finelin - VFX & Animation Studio',
    description: 'ReDefining the art of Visual Effects and Animation',
    images: [
      '/finelinlogo.png',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/finelinlogo1.png" type="image/png" sizes="32x32" />
        <title>Finelin - VFX & Animation Studio</title>
        <meta name="description" content="ReDefining the art of Visual Effects and Animation" />
      </head>
      <body className={inter.className}>
        <ScrollHandler />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
