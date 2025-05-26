import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_Arabic, Scheherazade_New } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '500', '600', '700'],
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-sans-arabic',
  weight: ['400', '500', '600', '700'],
});

const scheherazade = Scheherazade_New({
  subsets: ['arabic'],
  variable: '--font-scheherazade-new',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Quran Recitation for Absolute Beginners',
  description: 'A gentle, step-by-step program to help you read the Quran—even if you\'ve never read Arabic before',
  keywords: ['Quran', 'Arabic', 'recitation', 'beginner', 'learn', 'Islam', 'tajweed'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${notoSans.variable} ${notoSansArabic.variable} ${scheherazade.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}