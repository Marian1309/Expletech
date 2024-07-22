import type { FC } from 'react';

import { ProductList, SearchForm } from '@/components';

const RootPage: FC = () => {
  return (
    <div className="bg-[#eff6ff] text-xl">
      <SearchForm />
      <ProductList />
    </div>
  );
};

export default RootPage;
