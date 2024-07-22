'use client';

import type { FC, ReactNode } from 'react';

import { Provider } from 'react-redux';

import store from '@/context/store';

type Props = {
  children: ReactNode;
};

const ContextProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ContextProvider;
