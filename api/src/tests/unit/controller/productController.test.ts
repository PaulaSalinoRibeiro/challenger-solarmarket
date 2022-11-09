import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../../../services/productService';
import { ProductController } from '../../../controllers/productController';
import { productsMock } from '../../mock/products';

const { expect } = chai;

describe('Product Controller', () => {

  const req = {} as Request;
  const res = {} as Response;
  const next: NextFunction = () => {};

  const productService = new ProductService();
  const productController = new ProductController(productService)

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  it('Should have return status 200 with a product list', () => {
    productController.getAllProducts(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(productsMock)).to.be.true;
  });

  it('Should have return status 200 with one product', () => {
    req.params = { code: 'MFVJI-MO-120-460W' }
    productController.getProductByCode(req, res, next);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(productsMock[0])).to.be.true;
  });
})