import { IProduct } from '../../interfaces/IProducts';
import { IProductService } from '../../interfaces/IProductService';
import { products } from '../../databases/productsDb';

export class ProductService implements IProductService {

  constructor(private database = products) {
    this.database = database
  }

  getAllProducts(): IProduct[] {
    return this.database
  }

  getProductByCode(code:String): IProduct | null {
    const product = this.database.find(product => product.code === code)
    return product || null;
  }
}