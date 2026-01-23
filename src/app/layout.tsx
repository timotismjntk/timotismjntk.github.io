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
    default: 'Timotius Simanjuntak - Senior Mobile App Engineer',
    template: '%s | Timotius',
  },
  description:
    "A senior Mobile App Engineer based in Indonesia. Feel free to explore my work below.",
  keywords: [
    'React Native',
    'Android App Development',
    'Ios App Development',
    'Mobile App Development',
  ],
  authors: [{ name: 'Timotius Simanjuntak' }],
  creator: 'Timotius Simanjuntak',
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
