import { render, screen } from '@testing-library/react';

import type { Product } from '@/types';

import ProductDetails from '@/components/ProductDetails';

const mockProduct: Product = {
  id: 1,
  name: 'Xiaomi Redmi Note 13 8/256 Midnight Black',
  image:
    '/_next/image?url=https%3A%2F%2Fi.allo.ua%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F3%2Fimage%2F736x512%2F9df78eab33525d08d6e5fb8d27136e95%2F1%2F1%2F1111_32.jpg&w=3840&q=75',
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
});

test('renders product image', () => {
  render(<ProductDetails product={mockProduct} />);
  const image = screen.getByAltText(
    'Xiaomi Redmi Note 13 8/256 Midnight Black'
  );
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute(
    'src',
    '/_next/image?url=%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fi.allo.ua%252Fmedia%252Fcatalog%252Fproduct%252Fcache%252F3%252Fimage%252F736x512%252F9df78eab33525d08d6e5fb8d27136e95%252F1%252F1%252F1111_32.jpg%26w%3D3840%26q%3D75&w=3840&q=75'
  );
});

test('renders "Back to Listing page" link', () => {
  render(<ProductDetails product={mockProduct} />);
  const link = screen.getByRole('link', { name: /Back to Listing page/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/');
});
