import * as sinon from 'sinon';
import chai from 'chai';
import { ProductService } from '../../../services/productService';
import { productsMock } from '../../mock/products';

const { expect } = chai;

describe('Product Service', () => {

  const product = new ProductService()

  it('Should have return a list of products', () => {
    const productList = product.getAllProducts()
    expect(productList).to.be.deep.equal(productsMock)
  })

  it('Should have return a product if code exist', () => {
    //
  })

  it('Should throw a error if code is not found', () => {
    //
  })
})