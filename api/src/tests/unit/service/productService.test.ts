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
    const productByCode = product.getProductByCode(productsMock[0].code)
    expect(productByCode).to.be.deep.equal(productsMock[0])
  })

  it('Should throw a error if code is not found', () => {
    try {
      product.getProductByCode('TESTE')
    } catch (error: any) {
      expect(error.message).to.be.equal('Not Found!')
    }
  })
})