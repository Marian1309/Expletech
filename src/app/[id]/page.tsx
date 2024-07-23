'use client';

import type { FC } from 'react';

import { useSelector } from 'react-redux';

import type { RootState } from '@/context/store';

type Props = {
  params: {
    id: string;
  };
};

const ProductPage: FC<Props> = ({ params }) => {
  const { products } = useSelector((state: RootState) => state.products);

  const product = products.find((product) => product.id === +params.id);

  console.log(product);

  return <></>;
};

export default ProductPage;
