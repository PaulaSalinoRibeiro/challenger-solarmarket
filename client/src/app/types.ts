export interface IProduct {
  name: String,
  category: String,
  code: String,
  description: String,
  price: String,
  image: String,
  qty?: Number,
}

export interface IShopCartSlice {
  productsList: IProduct[]
}