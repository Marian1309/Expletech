import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { ContextProvider } from '@/components/providers';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: {
    template: '%s • Expletech',
    default: 'Expletech'
  },
  description: 'Expletech Test Task'
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={figtree.className}>{children}</body>
      </html>
    </ContextProvider>
  );
};

export default RootLayout;
