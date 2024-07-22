import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs.marian1309.vercel.app'),
  title: {
    template: '%s • Next.js 14',
    default: 'Next.js 14'
  },
  description: 'Next.js 14 Starter'
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
