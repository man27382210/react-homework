import request from 'supertest';
import sinon from 'sinon';

import app from '../../src';
import Product from '../../src/models/product';

// fake data
import mockProductList from '../../src/models/sampleData.json';
const mockProduct = mockProductList[0];
const mockProductModel = new Product(mockProduct);
const mockId = mockProductModel.id;

const PRODUCTS_API_URL = '/api/products';
const PRODUCTS_API_URL_WITH_ID = `${PRODUCTS_API_URL}/${mockId}`;
const METHOD_NAMES = {
  find: 'find',
  findById: 'findById',
  findByIdAndUpdate: 'findByIdAndUpdate',
  findByIdAndRemove: 'findByIdAndRemove',
  save: 'save'
}

describe('Products API', () => {
  describe('#GET - List all entities', () => {
    afterEach(() => {
      // object.method.restore(); can be used to restore the original method.
      Product.find.restore();
    });

    it('should respond with products list and 200 status', (done) => {
      sinon.stub(Product, METHOD_NAMES.find)
        .withArgs({})
        .resolves(mockProductList);

      request(app)
        .get(PRODUCTS_API_URL)
        .expect('Content-Type', /json/)
        .expect(200, mockProductList, done);
    });

    it('should respond with 500 status when failed', (done) => {
      sinon.stub(Product, METHOD_NAMES.find)
        .withArgs({})
        .rejects();

      request(app)
        .get(PRODUCTS_API_URL)
        .expect('Content-Type', /json/)
        .expect(500, done);
    });
  });

  describe('#POST - Create a new entity', () => {
    afterEach(() => {
      Product.prototype.save.restore();
    });

    it('should respond with new product data and 200 status', (done) => {
      sinon.stub(Product.prototype, METHOD_NAMES.save).resolves(mockProductModel);
      request(app)
        .post(PRODUCTS_API_URL)
        .send(mockProduct)
        .expect('Content-Type', /json/)
        .expect(200, JSON.stringify(mockProductModel), done);
    });

    it('should respond with 500 status when failed', (done) => {
      sinon.stub(Product.prototype, METHOD_NAMES.save).rejects();
      request(app)
        .post(PRODUCTS_API_URL)
        .send(mockProduct)
        .expect('Content-Type', /json/)
        .expect(500, done);
    });
  });

  describe('#GET /:id - Return a given entity', () => {
    afterEach(() => {
      Product.findById.restore();
    });

    it('should respond with given product data and 200 status', (done) => {
      sinon.stub(Product, METHOD_NAMES.findById)
        .withArgs(mockId)
        .resolves(mockProductModel);

      request(app)
        .get(PRODUCTS_API_URL_WITH_ID)
        .expect('Content-Type', /json/)
        .expect(200, JSON.stringify(mockProductModel), done);
    });

    it('should respond with 404 status when not found', (done) => {
      sinon.stub(Product, METHOD_NAMES.findById)
        .withArgs(mockId)
        .rejects();

      request(app)
        .get(PRODUCTS_API_URL_WITH_ID)
        .expect(404, done);
    });
  });

  describe('#PUT /:id - Update a given entity', () => {
    context('when find out the product with given id', () => {
      before(() => {
        sinon.stub(Product, METHOD_NAMES.findById)
          .withArgs(mockId)
          .resolves(mockProductModel);
      });

      afterEach(() => {
        Product.findByIdAndUpdate.restore();
      });

      after(() => {
        Product.findById.restore();
      });

      it('should respond with 200 status', (done) => {
        sinon.stub(Product, METHOD_NAMES.findByIdAndUpdate)
          .withArgs(mockId, mockProduct)
          .resolves();

        request(app)
          .put(PRODUCTS_API_URL_WITH_ID)
          .send(mockProduct)
          .expect(200, done);
      });

      it('should respond with 500 status when failed', (done) => {
        sinon.stub(Product, METHOD_NAMES.findByIdAndUpdate)
          .withArgs(mockId, mockProduct)
          .rejects();

        request(app)
          .put(PRODUCTS_API_URL_WITH_ID)
          .send(mockProduct)
          .expect(500, done);
      });
    });

    context('when faild to find out the product with given id', () => {
      before(() => {
        sinon.stub(Product, METHOD_NAMES.findById)
          .withArgs(mockId)
          .rejects();
      });

      after(() => {
        Product.findById.restore();
      });

      it('should respond with 404 status when failed', (done) => {
        request(app)
          .put(PRODUCTS_API_URL_WITH_ID)
          .send(mockProduct)
          .expect(404, done);
      });
    });
  });

  describe('#DELETE /:id - Delete a given entity', () => {
    context('when find out the product with given id', () => {
      before(() => {
        sinon.stub(Product, METHOD_NAMES.findById)
          .withArgs(mockId)
          .resolves(mockProductModel);
      });

      afterEach(() => {
        Product.findByIdAndRemove.restore();
      });

      after(() => {
        Product.findById.restore();
      });

      it('should respond with 200 status', (done) => {
        sinon.stub(Product, METHOD_NAMES.findByIdAndRemove)
          .withArgs(mockId)
          .resolves();

        request(app)
          .del(PRODUCTS_API_URL_WITH_ID)
          .expect(200, done);
      });

      it('should respond with 500 status when failed', (done) => {
        sinon.stub(Product, METHOD_NAMES.findByIdAndRemove)
          .withArgs(mockId)
          .rejects();

        request(app)
          .del(PRODUCTS_API_URL_WITH_ID)
          .expect(500, done);
      });
    });

    context('when faild to find out the product with given id', () => {
      before(() => {
        sinon.stub(Product, METHOD_NAMES.findById)
          .withArgs(mockId)
          .rejects();
      });

      after(() => {
        Product.findById.restore();
      });

      it('should respond with 404 status when failed', (done) => {
        request(app)
          .del(PRODUCTS_API_URL_WITH_ID)
          .expect(404, done);
      });
    });
  });
});
