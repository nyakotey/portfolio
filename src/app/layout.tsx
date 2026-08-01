import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import { Navbar } from '../components/navbar';
import { Sidebar } from '../components/sidebar';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyakotey.com'),
  title: 'Nathaniel Nyakotey | ECE Engineer Portfolio',
  description: "Nathaniel Nyakotey's portfolio website showcasing engineering, software development, resume, and selected projects.",
  applicationName: 'Nathaniel Nyakotey',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/images/logo.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'Nathaniel Nyakotey',
    title: 'Nathaniel Nyakotey | ECE Engineer Portfolio',
    description: 'Engineering, software development, resume, and selected projects from Nathaniel Nyakotey.',
    url: 'https://nyakotey.com/',
    images: [
      {
        url: '/assets/images/myself.png',
        width: 1200,
        height: 630,
        alt: 'Nathaniel Nyakotey portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathaniel Nyakotey | ECE Engineer Portfolio',
    description: 'Engineering, software development, resume, and selected projects from Nathaniel Nyakotey.',
    images: ['/assets/images/myself.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main>
          <Sidebar />

          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>

        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}