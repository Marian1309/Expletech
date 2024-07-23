import { render, screen } from '@testing-library/react';

import type { Product } from '@/types';

import ProductDetails from '@/components/ProductDetails';

const mockProduct: Product = {
  id: 1,
  name: 'Xiaomi Redmi Note 13 8/256 Midnight Black',
  image:
    'https://i.allo.ua/media/catalog/product/cache/3/image/736x512/9df78eab33525d08d6e5fb8d27136e95/1/1/1111_32.jpg',
  price: 7999,
  model: 'Xiomi',
  description:
    "Діагональ екрану - 6.67''\n Тип екрану - AMOLED\n Камера - 108 Мп + 8 Мп + 2 Мп\n Процесор - Qualcomm Snapdragon 685\n Ємність акумулятора - 5000 mAh\n Стандарт захисту - IP54"
};

test('renders product name', () => {
  render(<ProductDetails product={mockProduct} />);
  expect(
    screen.getByText('Xiaomi Redmi Note 13 8/256 Midnight Black')
  ).toBeInTheDocument();
});

test('renders product price', () => {
  render(<ProductDetails product={mockProduct} />);
  expect(screen.getByText('7999$')).toBeInTheDocument();
});

test('renders product description', () => {
  render(<ProductDetails product={mockProduct} />);
  expect(screen.getByText("Діагональ екрану - 6.67''")).toBeInTheDocument();
  expect(screen.getByText('Тип екрану - AMOLED')).toBeInTheDocument();
});

test('renders "Back to Listing page" link', () => {
  render(<ProductDetails product={mockProduct} />);
  const link = screen.getByRole('link', { name: /Back to Listing page/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/');
});
