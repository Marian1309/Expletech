import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { Order, Product } from '@/types';

type ProductsState = {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  currentPage: number;
};

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false,
  currentPage: 1
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  try {
    const { data } = await axios.get('/products.json');
    return data;
  } catch (err: unknown) {
    return [];
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sort: (
      state,
      action: PayloadAction<{ name: string; model: string; order: Order }>
    ) => {
      const { name, model, order } = action.payload;

      let filtered = state.products;

      if (name !== '' && model !== '') {
        filtered = filtered
          .filter(
            (product) => product.model.toLowerCase() === model.toLowerCase()
          )
          .filter((product) =>
            product.name.toLowerCase().includes(name.toLowerCase())
          );
      } else if (model === '') {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(name.toLowerCase())
        );
      } else {
        filtered = filtered.filter(
          (product) => product.model.toLowerCase() === model.toLowerCase()
        );
      }

      if (order === 'highToLow') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (order === 'lowToHigh') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      }

      state.filteredProducts = filtered;
    },
    setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
      state.currentPage = action.payload.page;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.filteredProducts = [];
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
      state.filteredProducts = [];
      state.loading = false;
    });
  }
});

export const { sort, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
