import { IProduct } from './IProducts';

export interface IProductService {
  getAllProducts(): IProduct[]
  getProductByCode(code:String): IProduct | null
}