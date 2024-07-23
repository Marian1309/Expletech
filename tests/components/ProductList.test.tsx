import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

import type { Product } from '@/types';

import type { RootState } from '@/context/store';

import ProductList from '@/components/ProductList';

const mockStore = configureStore([thunk as any]);

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 13 8/256 Midnight Black',
    image:
      'https://i.allo.ua/media/catalog/product/cache/3/image/736x512/9df78eab33525d08d6e5fb8d27136e95/1/1/1111_32.jpg',
    price: 7999,
    model: 'Xiomi',
    description:
      "Діагональ екрану - 6.67''\n Тип екрану - AMOLED\n Камера - 108 Мп + 8 Мп + 2 Мп\n Процесор - Qualcomm Snapdragon 685\n Ємність акумулятора - 5000 mAh\n Стандарт захисту - IP54"
  }
];

const initialState: Partial<RootState> = {
  products: {
    products: mockProducts,
    filteredProducts: mockProducts,
    loading: false,
    currentPage: 1
  }
};

const initialStateLoading: Partial<RootState> = {
  products: {
    products: [],
    filteredProducts: [],
    loading: true,
    currentPage: 1
  }
};

const initialStateEmpty: Partial<RootState> = {
  products: {
    products: [],
    filteredProducts: [],
    loading: false,
    currentPage: 1
  }
};

test('renders products when not loading', () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
  expect(
    screen.getByText('Xiaomi Redmi Note 13 8/256 Midnight Black')
  ).toBeInTheDocument();
});

test('renders spinner when loading', () => {
  const store = mockStore(initialStateLoading);
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
  const spinnerElement = screen.queryByLabelText('Loading Spinner');
  expect(spinnerElement).toBeInTheDocument();
});

test('renders message when no products', async () => {
  const store = mockStore(initialStateEmpty);
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
  await waitFor(() => {
    expect(
      screen.getByText('There is no products in the list.')
    ).toBeInTheDocument();
  });
});
