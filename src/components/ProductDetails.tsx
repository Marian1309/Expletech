import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/types';

import Spinner from './Spinner';

type Props = {
  product: Product;
};

const ProductDetails: FC<Props> = ({ product }) => {
  const getDescriptions = (description: string) => {
    return description?.split('\n').map((characteristic, index) => (
      <p
        className="mb-4 text-sm text-gray-700 md:text-lg lg:text-xl xl:text-2xl"
        key={index}
      >
        {characteristic}
      </p>
    ));
  };

  return (
    <div className="m-4 max-w-2xl rounded bg-white p-6 shadow-md flex-center sm:min-w-[416.5px] sm:max-w-max md:min-w-min">
      <div className="flex flex-col md:flex-row md:items-center">
        {product ? (
          <Image
            alt={product?.name}
            className="w-full rounded py-10 md:w-3/5"
            height={0}
            priority
            sizes="250vw"
            src={product?.image}
            width={0}
          />
        ) : (
          <Spinner loading={!product} />
        )}

        <div className="lg:text-lg xl:text-xl">
          <h2 className="text-md mb-2 font-bold lg:text-xl xl:text-2xl">
            {product?.name}
          </h2>

          <p className="mb-4 text-gray-700 md:my-4 lg:text-xl xl:text-2xl">
            {product?.price ? `${product.price}$` : null}
          </p>

          {getDescriptions(product?.description)}

          <Link
            className="rounded bg-blue-500 px-4 py-2 text-white flex-center"
            href="/"
          >
            Back to Listing page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
8;
