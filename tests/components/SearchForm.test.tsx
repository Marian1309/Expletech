import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

import type { RootState } from '@/context/store';

import SearchForm from '@/components/SearchForm';

const middlewares = [thunk];
const mockStore = configureStore(middlewares as any);

describe('SearchForm', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      form: {
        name: '',
        model: '',
        order: ''
      }
    } as RootState);
  });

  test('renders SearchForm and allows user to interact with inputs', async () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText('Enter name of the product')
    ).toBeInTheDocument();
    expect(screen.getByText('Choose model')).toBeInTheDocument();
    expect(screen.getByText('Choose price order')).toBeInTheDocument();
  });
});
