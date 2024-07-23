import { render, screen } from '@testing-library/react';

import Spinner from '@/components/Spinner';

describe('Spinner Component', () => {
  test('renders without crashing', () => {
    render(<Spinner />);
  });

  test('displays the loading spinner when loading is true', () => {
    render(<Spinner loading={true} />);
    const spinnerElement = screen.getByLabelText('Loading Spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('does not display the loading spinner when loading is false', () => {
    render(<Spinner loading={false} />);
    const spinnerElement = screen.queryByLabelText('Loading Spinner');
    expect(spinnerElement).not.toBeInTheDocument();
  });
});
