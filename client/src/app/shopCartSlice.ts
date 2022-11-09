import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShopCartSlice, IProduct } from './types';

const initialState: IShopCartSlice = {
  productsList: []
};

export const shopCartSlice = createSlice({
  name: 'shop-cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      
      const exist = state.productsList.some(item => item.code === action.payload.code)
      console.log(exist)
      if(!exist) {
        state.productsList = [...state.productsList, action.payload ]
      }

      if(exist) {
        state.productsList = state.productsList.filter(item => item.code !== action.payload.code)
        state.productsList = [...state.productsList, action.payload ]
      }
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      state.productsList = [...state.productsList, action.payload ]
      // const existOne = state.productsList.some(product => product.code === action.payload.code && product.qty === 1)

      // if(existOne) {
      //   state.productsList = state.productsList.filter(product => product.code !== action.payload.code)
      // }

      // if (!existOne) {
      //   state.productsList = state.productsList.map(product => {
      //     if( product.code === action.payload.code) {
      //       product.qty = Number(product.qty) - 1
      //     }
      //     return product 
      //   })
      // }
    },
    deleteProduct: (state, action: PayloadAction<IProduct>) => {
      state.productsList = state.productsList.filter(product => product.code !== action.payload.code)
    },
    deleteShopCart: (state ) => {
      state.productsList = []
    }
  }
});

export const { addProduct, removeProduct, deleteProduct, deleteShopCart } = shopCartSlice.actions;

export default shopCartSlice.reducer;