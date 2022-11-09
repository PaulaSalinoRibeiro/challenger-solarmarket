import { IProduct } from '../../interfaces/IProducts';
import { IProductService } from '../../interfaces/IProductService';
import { products } from '../../databases/productsDb';
import { CustomerError } from '../../helpers/CustomerError';

export class ProductService implements IProductService {

  constructor(private database = products) {
    this.database = database
  }

  getAllProducts(): IProduct[] {
    return this.database
  }

  getProductByCode(code:String): IProduct | void {
    const product = this.database.find(product => product.code === code)

    if (!product) throw new CustomerError(404, 'Not Found!')

    return product;
  }
}