import { Request, Response, NextFunction } from 'express';
import { IProductService } from '../../interfaces/IProductService';

export class ProductController {

  constructor(private service: IProductService) {
    this.service = service;
  }

  getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const productList = this.service.getAllProducts();
      return res.status(200).json(productList)
    } catch (error) {
      next(error);
    }
  }

  getProductByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const product = this.service.getProductByCode(req.params.code);
      return res.status(200).json(product)
    } catch (error) {
      next(error);
    }
  }
} 