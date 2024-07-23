import { useSelector } from 'react-redux';

import type { RootState } from '@/context/store';

import { setCurrentPage } from '@/context/features/productsSlice';

const usePagination = (dispatch: any, productsPerPage: number) => {
  const { filteredProducts, currentPage } = useSelector(
    (state: RootState) => state.products
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage({ page }));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return {
    handlePageChange,
    currentProducts,
    totalPages
  };
};

export default usePagination;
