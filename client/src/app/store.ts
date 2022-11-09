import { configureStore } from '@reduxjs/toolkit';
import shopCart from './shopCartSlice';


export const store = configureStore({
  reducer: {
    shopCart: shopCart
  },
});

export type RootState = ReturnType<typeof store.getState>;
