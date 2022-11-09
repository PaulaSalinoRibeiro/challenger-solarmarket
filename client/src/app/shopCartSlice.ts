import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShopCartSlice, IProduct } from './types';

const initialState: IShopCartSlice = {
  productsList: []
};

const handleLocalStorage = (list: IProduct[]) => {
  localStorage.setItem('@shopCart', JSON.stringify(list))
}

export const shopCartSlice = createSlice({
  name: 'shop-cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const exist = state.productsList
      .some(item => item.code === action.payload.code)

      if(!exist) {
        state.productsList = [...state.productsList, {...action.payload, qty: 1 } ]
      }

      if(exist) {
        state.productsList = state.productsList.map(product => {
          if( product.code === action.payload.code) {
            product.qty = Number(product.qty) + 1
          }
          return product 
        })
      };
      
      handleLocalStorage(state.productsList)
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const existOne = state.productsList
      .some(product => product.code === action.payload.code && product.qty === 1)

      if(existOne) {
        state.productsList = state.productsList
        .filter(product => product.code !== action.payload.code)
      }

      if (!existOne) {
        state.productsList = state.productsList.map(product => {
          if( product.code === action.payload.code) {
            product.qty = Number(product.qty) - 1
          }
          return product 
        })
      };

      handleLocalStorage(state.productsList)
    },
    deleteProduct: (state, action: PayloadAction<IProduct>) => {
      state.productsList = state.productsList.filter(product => product.code !== action.payload.code)

      handleLocalStorage(state.productsList);
    },
    deleteShopCart: (state ) => {
      state.productsList = []
      handleLocalStorage(state.productsList);
    }
  }
});

export const { addProduct, removeProduct, deleteProduct, deleteShopCart } = shopCartSlice.actions;

export default shopCartSlice.reducer;