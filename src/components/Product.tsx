import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/types';

type Props = {
  product: Product;
};

const Product: FC<Props> = ({ product: { id, name, price, image } }) => {
  return (
    <div className="relative rounded-xl bg-white shadow-md">
      <Image
        alt=""
        className="h-auto w-full rounded-t-xl pb-2 pt-8"
        height={0}
        priority
        sizes="100vw"
        src={image}
        width={0}
      />

      <div className="p-4">
        <div className="mb-4 flex justify-center">
          <h3 className="flex items-center justify-start text-xl font-bold">
            {name}
          </h3>
        </div>

        <h3 className="absolute right-[10px] top-[10px] block rounded-lg bg-[#eff6ff] px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:hidden lg:text-right">
          {price.toFixed(2)} UAH
        </h3>

        <div className="mb-5 border border-gray-100"></div>

        <div className="flex flex-col justify-between lg:flex-row">
          <h3 className="hidden rounded-lg bg-[#eff6ff] px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:block lg:text-right">
            {price.toFixed(2)} UAH
          </h3>

          <Link
            className="text-md rounded-md bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600"
            href={`/${id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
