import { configureStore } from '@reduxjs/toolkit';
import shopCart from './shopCartSlice';
import filter from './filterProductSlice';

export const store = configureStore({
  reducer: {
    shopCart: shopCart,
    filters: filter
  },
});

export type RootState = ReturnType<typeof store.getState>;
