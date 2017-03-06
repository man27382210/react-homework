/* eslint  no-undef: 0*/
import { expect } from 'chai';
import request from 'supertest';
import sinon from 'sinon';
import app from '../src/';
import TodoElement from '../src/models/todoElement';

// fakeData
import mockTodoElementList from '../src/models/fakeData.json';
const mockTodoElement = mockTodoElementList[0];
const mockCollection = new TodoElement(mockTodoElement);

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
        sinon.stub(TodoElement.prototype, 'save').returns(Promise.resolve(mockCollection));

        request(app)
          .post(TODOELEMENTS_URL)
          .send(mockTodoElement)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(JSON.stringify(res.body)).to.eql(JSON.stringify(mockCollection));
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
  describe('PUT /:id', () => {
    afterEach(() => {
      TodoElement.findById.restore();
    });
    describe('when find out designated element with id', () => {
      afterEach(() => {
        TodoElement.findOneAndUpdate.restore();
      });
      describe('update element successfully,', () => {
        it('should return status 200', (done) => {
          // be careful, mockId is String,
          // mockCollection._id = ObjectID of mongoDB
          const mockId = mockCollection._id.toString();
          sinon.stub(TodoElement, 'findById').withArgs(mockId).returns(Promise.resolve(mockCollection));
          sinon.stub(TodoElement, 'findOneAndUpdate')
            .withArgs(mockCollection._id, mockTodoElement, { runValidators: true , new: true})
            .returns(Promise.resolve());

          request(app)
            .put(TODOELEMENTS_URL + '/' + mockId)
            .send(mockTodoElement)
            .expect(200, done);
        });

      });
      describe('but update element failed,', () => {
        it('should return status 500', (done) => {
          const mockId = mockCollection._id.toString();
            sinon.stub(TodoElement, 'findById').withArgs(mockId).returns(Promise.resolve(mockCollection));
            sinon.stub(TodoElement, 'findOneAndUpdate')
              .withArgs(mockCollection._id, mockTodoElement, { runValidators: true , new: true})
              .returns(Promise.reject());

            request(app)
              .put(TODOELEMENTS_URL + '/' + mockId)
              .send(mockTodoElement)
              .expect(500, done);
        });
      });
    });
    describe('when failed to find out the element in DB, ', () => {
      it('should return status 404 and error message', (done) => {
        const mockId = mockCollection._id.toString();

        sinon.stub(TodoElement, 'findById').withArgs(mockId).returns(Promise.reject());
        request(app)
          .put(TODOELEMENTS_URL + '/' + mockId)
          .send(mockTodoElement)
          .expect(404)
          .end((err, res) => {
            expect(res.error.text).to.equal('todoElement Not found');
            done();
          })
      });
    });
  });
  describe('DELETE /:id', () => {
    afterEach(() => {
      TodoElement.findById.restore();
    });
    describe('when find out designated element with id', () => {
      afterEach(() => {
        TodoElement.findByIdAndRemove.restore();
      });
      describe('delete element successfully,', () => {
        it('should return status 200', (done) => {
          const mockId = mockCollection._id.toString();
          sinon.stub(TodoElement, 'findById').withArgs(mockId).returns(Promise.resolve(mockCollection));
          sinon.stub(TodoElement, 'findByIdAndRemove')
            .withArgs(mockCollection._id)
            .returns(Promise.resolve());

          request(app)
            .delete(TODOELEMENTS_URL + '/' + mockId)
            .send(mockTodoElement)
            .expect(200, done);
        });
      });
      describe('but delete element failed,', () => {
        it('should return status 500', (done) => {
          const mockId = mockCollection._id.toString();
            sinon.stub(TodoElement, 'findById').withArgs(mockId).returns(Promise.resolve(mockCollection));
            sinon.stub(TodoElement, 'findByIdAndRemove')
              .withArgs(mockCollection._id)
              .returns(Promise.reject());

            request(app)
              .delete(TODOELEMENTS_URL + '/' + mockId)
              .send(mockTodoElement)
              .expect(500, done);
        });
      });
    });
    describe('when failed to find out the element in DB, ', () => {
      it('should return status 404 and error message', (done) => {
        const mockId = mockCollection._id.toString();

        sinon.stub(TodoElement, 'findById').withArgs(mockId).returns(Promise.reject());
        request(app)
          .delete(TODOELEMENTS_URL + '/' + mockId)
          .send(mockTodoElement)
          .expect(404)
          .end((err, res) => {
            expect(res.error.text).to.equal('todoElement Not found');
            done();
          })
      });
    });
  });
});