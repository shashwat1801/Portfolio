import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarsCanvas from '@/components/main/StarBackground';
import { Navbar } from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
