import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterProductSlice, IProduct } from './types';

const initialState: IFilterProductSlice = {
  productsList: [],
  productsFilter: [],
  allCategories: [],
};

export const filterProductSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.productsList = [...action.payload]
      state.productsFilter = [...action.payload]
      state.allCategories = [...Array.from(new Set(action.payload.map(item => item.category)))]
    },
    searchByCategory: (state, action: PayloadAction<string>) => {
      state.productsFilter = state.productsList.filter(item => item.category === action.payload)
    },
    removeFilter: (state) => {
      state.productsFilter = [...state.productsList]
    },
  },
})

export const { setProducts, searchByCategory, removeFilter } = filterProductSlice.actions;

export default filterProductSlice.reducer;