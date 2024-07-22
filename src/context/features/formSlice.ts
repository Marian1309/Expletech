import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Order } from '@/types';

type InitialState = {
  name: string;
  model: string;
  order: Order;
};

const initialState: InitialState = {
  name: '',
  model: '',
  order: ''
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setModel: (state, action: PayloadAction<{ model: string }>) => {
      state.model = action.payload.model;
    },
    setOrder: (state, action: PayloadAction<{ order: Order }>) => {
      state.order = action.payload.order;
    }
  }
});

export const { setName, setModel, setOrder } = formSlice.actions;

export default formSlice.reducer;
