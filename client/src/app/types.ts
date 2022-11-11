export interface IProduct {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
  qty?: number,
}

export interface IShopCartSlice {
  productsList: IProduct[],
}

export interface IFilterProductSlice {
  productsList: IProduct[],
  productsFilter: IProduct[],
  allCategories: string[],
}