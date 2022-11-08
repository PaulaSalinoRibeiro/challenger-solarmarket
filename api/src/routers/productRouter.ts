import { Router } from 'express';
import { ProductService } from '../services/productService';
import { ProductController } from '../controllers/productController';


const productService = new ProductService();
const productController = new ProductController(productService);


const productRouter = Router();

productRouter.get('/', (req, res, next) => productController.getAllProducts(req, res, next));

productRouter.get('/:code', (req, res, next) => productController.getProductByCode(req, res, next));

export { productRouter }