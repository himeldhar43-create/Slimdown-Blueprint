import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Slimdown Blueprint | Natural Weight Loss & Wellness Guides for Women',
  description: 'Empowering health, structured meal plans, natural smoothie guides, and sustainable home workouts built specifically to help women feel their best.',
  keywords: 'women weight loss, reduce bloating, natural metabolic health, smoothie guides, beginner home workouts, meal plans for women',
  metadataBase: new URL('https://slimdownblueprint.com'),
  openGraph: {
    title: 'Slimdown Blueprint | Natural Weight Loss & Wellness Guides for Women',
    description: 'Empowering health, structured meal plans, natural smoothie guides, and sustainable home workouts built specifically to help women feel their best.',
    url: 'https://slimdownblueprint.com',
    siteName: 'Slimdown Blueprint',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slimdown Blueprint | Natural Wellness',
    description: 'Natural wellness and body transformation blueprints designed for the unique health goals of women.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Slimdown Blueprint",
              "url": "https://slimdownblueprint.com",
              "logo": "https://slimdownblueprint.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@slimdownblueprint.com",
                "contactType": "customer support"
              }
            })
          }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text font-body antialiased selection:bg-brand-primary/20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}