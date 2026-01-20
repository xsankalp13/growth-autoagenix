import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import SmoothScroll from '../components/SmoothScroll';
import CubertoCursor from '../components/CubertoCursor';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Growth Autoagenix - Affiliate Marketing Agency',
  description: 'Premium performance-based affiliate marketing agency for brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <CubertoCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
