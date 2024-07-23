'use client';

import { type FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import type { Product } from '@/types';

import type { AppDispatch, RootState } from '@/context/store';

import { fetchProducts } from '@/context/features/productsSlice';

import { ProductDetails } from '@/components';

type Props = {
  params: {
    id: string;
  };
};

const ProductPage: FC<Props> = ({ params }) => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((product) => product.id === +params.id);

  return (
    <div className="h-adaptive flex-center">
      <ProductDetails product={product as Product} />;
    </div>
  );
};

export default ProductPage;
