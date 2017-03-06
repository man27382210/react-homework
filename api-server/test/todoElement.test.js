/* eslint  no-undef: 0*/
import { expect } from 'chai';
import request from 'supertest';
import sinon from 'sinon';
import app from '../src/';
import TodoElement from '../src/models/todoElement';

// fakeData
import mockTodoElementList from '../src/models/fakeData.json';
const mockTodoElement = mockTodoElementList[0];

// setting 
const TODOELEMENTS_URL = '/api/todoElements';

describe('todoElements', () => {
  describe('GET /', () => {
    afterEach(() => {
      TodoElement.find.restore();
    });
    describe('when query successfully, ', () => {
      it('should return todoElements list in json', (done) => {

        sinon.stub(TodoElement, 'find').withArgs({}).returns(Promise.resolve(mockTodoElementList));
        request(app)
          .get(TODOELEMENTS_URL)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.deep.equal(mockTodoElementList);
            done();
          });
      });
    });
    describe('when query failed, ', () => {
      it('should return status 500', (done) => {
        sinon.stub(TodoElement, 'find').withArgs({}).returns(Promise.reject());
        request(app)
          .get(TODOELEMENTS_URL)
          .expect(500, done)
      });
    });
  });
  describe('POST /', () => {
    afterEach(() => {
      TodoElement.prototype.save.restore();
    });
    describe('when create a new entity successfully, ', () => {
      it('should return todoElements list in json', (done) => {
        // sinon.stub(TodoElement, 'TodoElement').returns(mockTodoElement);
        const todoElement = new TodoElement(mockTodoElement);
        sinon.stub(TodoElement.prototype, 'save').returns(Promise.resolve(todoElement));

        request(app)
          .post(TODOELEMENTS_URL)
          .send(mockTodoElement)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(JSON.stringify(res.body)).to.eql(JSON.stringify(todoElement));
            done();
          });
      });
    });
    describe('when query failed, ', () => {
      it('should return status 500', (done) => {
        sinon.stub(TodoElement.prototype, 'save').returns(Promise.reject());

        request(app)
          .post(TODOELEMENTS_URL)
          .send(mockTodoElement)
          .expect(500, done);
      });
    });
  });
});