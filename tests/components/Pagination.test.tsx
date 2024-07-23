import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from '@/components/Pagination';

test('renders correct number of pages', () => {
  render(<Pagination currentPage={1} onPageChange={() => {}} totalPages={5} />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(5);
});

test('highlights current page', () => {
  render(<Pagination currentPage={3} onPageChange={() => {}} totalPages={5} />);
  const currentPageButton = screen.getByText('3');
  expect(currentPageButton).toHaveClass('bg-blue-500 text-white');
});

test('calls onPageChange with correct page number', () => {
  const onPageChangeMock = jest.fn();
  render(
    <Pagination
      currentPage={1}
      onPageChange={onPageChangeMock}
      totalPages={5}
    />
  );
  const pageButton = screen.getByText('2');
  fireEvent.click(pageButton);
  expect(onPageChangeMock).toHaveBeenCalledWith(2);
});
