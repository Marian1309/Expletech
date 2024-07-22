'use client';

import { type FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import type { Product as ProductType } from '@/types';

import type { AppDispatch, RootState } from '@/context/store';

import { fetchProducts } from '@/context/features/productsSlice';

import Product from './Product';
import Spinner from './Spinner';

const ProductList: FC = () => {
  const { filteredProducts, loading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const render = (products: ProductType[], loading: boolean) => {
    if (loading) {
      return <Spinner loading={loading} />;
    }

    if (products.length === 0) {
      return <p>There is no products in the list.</p>;
    }

    return (
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:p-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="my-2 md:container xl:my-6">
      {render(filteredProducts, loading)}
    </div>
  );
};

export default ProductList;
