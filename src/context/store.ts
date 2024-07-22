import { configureStore } from '@reduxjs/toolkit';

import { formReducer, productsReducer } from './features';

const store = configureStore({
  reducer: {
    products: productsReducer,
    form: formReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
