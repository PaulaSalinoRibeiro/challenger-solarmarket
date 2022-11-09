import * as sinon from 'sinon';
import chai from 'chai';
import { ProductService } from '../../../services/productService';

const { expect } = chai;

describe('Product Service', () => {

  const product = new ProductService()

  before(() => {
    // 
  })

  after(() => {
    sinon.restore()
  }) 


  it('Should have return a list of products', () => {
    expect(1 + 1).to.be.equal(2)
  })

  it('Should have return a product if code exist', () => {

  })

  it('Should throw a error if code is not found', () => {

  })
})