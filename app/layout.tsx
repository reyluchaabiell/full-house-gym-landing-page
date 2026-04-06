import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fullhouse-gym.example.com'),
  title: 'FullHouse GYM | Gym Modern & Suportif di Cibinong',
  description:
    'FullHouse GYM adalah gym modern di Cibinong untuk pemula sampai advanced. Fasilitas nyaman, area hangout, suasana suportif, dan progres yang terasa nyata.',
  keywords: [
    'FullHouse GYM',
    'gym cibinong',
    'gym bogor',
    'gym pemula',
    'personal trainer cibinong',
    'tempat gym bogor',
  ],
  openGraph: {
    title: 'FullHouse GYM | Full Effort. Full Results. Welcome House.',
    description:
      'Gym modern, suportif, dan results-driven di Cibinong. Cocok untuk pemula maupun advanced.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'FullHouse GYM',
    images: [{ url: '/logo/fullhouse-logo.png', width: 512, height: 512, alt: 'Logo FullHouse GYM' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FullHouse GYM | Gym Modern & Suportif di Cibinong',
    description:
      'Gym modern, suportif, dan results-driven di Cibinong. Cocok untuk pemula maupun advanced.',
    images: ['/logo/fullhouse-logo.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
