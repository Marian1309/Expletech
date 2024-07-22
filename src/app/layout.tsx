import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: {
    template: '%s • Expletech',
    default: 'Expletech'
  },
  description: 'Expletech Test Task'
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
