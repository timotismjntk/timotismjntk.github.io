import type { Metadata, Viewport } from 'next';
import { Montserrat, Inter, Instrument_Serif } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'SoTech | Bridge the Social & Digital',
    template: '%s | SoTech',
  },
  description:
    "Houston's premier marketing technology partner. We help businesses grow through strategic websites, SEO, paid advertising, and marketing automation.",
  keywords: [
    'Houston marketing agency',
    'web development Houston',
    'SEO Houston',
    'digital marketing Houston',
    'SoTech',
    'marketing automation',
    'CRM Houston',
    'paid advertising',
  ],
  authors: [{ name: 'SoTech' }],
  creator: 'SoTech',
  openGraph: {
    title: 'SoTech | Bridge the Social & Digital',
    description: "Houston's premier marketing technology partner.",
    url: 'https://thesocialtech.net',
    siteName: 'SoTech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoTech | Bridge the Social & Digital',
    description: "Houston's premier marketing technology partner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-black text-white antialiased min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
