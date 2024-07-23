'use client';

import type { ChangeEvent, FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import type { Order } from '@/types';

import type { AppDispatch, RootState } from '@/context/store';

import { setModel, setName, setOrder } from '@/context/features/formSlice';
import { sort } from '@/context/features/productsSlice';

const SearchForm: FC = () => {
  const { name, model, order } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch<AppDispatch>();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName({ name: e.target.value }));
  };

  const handleModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setModel({ model: e.target.value }));
  };

  const handleOrderlChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrder({ order: e.target.value as Order }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(sort({ name, model, order }));
  };

  return (
    <div className="bg-[#1D4ED8] p-6">
      <form
        className="mx-auto flex w-full max-w-4xl flex-col items-center md:flex-row"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-full md:mb-0 md:w-3/5 md:pr-2">
          <input
            className="w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            onChange={handleNameChange}
            placeholder="Enter name of the product "
            type="text"
            value={name}
          />
        </div>

        <div className="w-full md:w-2/5 md:pl-2">
          <select
            className="mb-4 w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 md:mb-0"
            onChange={handleModelChange}
            value={model}
          >
            <option value="">Choose model </option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Moto">Moto</option>
            <option value="ZTE">ZTE</option>
            <option value="Honor">Honor</option>
            <option value="POCO">POCO</option>
            <option value="Motorola">Motorola</option>
          </select>
        </div>

        <div className="w-full md:w-3/5 md:pl-2">
          <select
            className="w-full rounded-lg bg-white px-2 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            onChange={handleOrderlChange}
            value={order}
          >
            <option value="">Choose price order</option>
            <option value="lowToHigh">From low to high</option>
            <option value="highToLow">From high to low</option>
          </select>
        </div>

        <button
          className="mt-4 w-full rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 md:ml-4 md:mt-0 md:w-auto"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
