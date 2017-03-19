import { expect } from 'chai';
import * as Api from 'sagas/api';
import { call, put } from 'redux-saga/effects';
import 'babel-polyfill';
import * as saga from 'sagas/';
import Constant from 'common/constant';

const mockElement = {
  category: 'mockCategory',
  title: 'mockTitle',
  owner: 'mockOwner',
  status: Constant.STATUS_PENDING,
  priority: Constant.PRIORITY_IMPORTANT,
};
const mockElementList = Array.apply(null, new Array(3)).map(() => mockElement);
const mockAction = {
  type: 'mockType',
  payload: 'mockPayload',
};

describe('sagas', () => {
  describe('#fetchElementList', () => {
    let iterator;
    before(() => {
      iterator = saga.fetchElementList();
    });
    describe('when ask for data successfully, ', () => {
      it('should call an correct Effect description', () => {
        const callExpection = call(Api.getTodoElements);
        expect(iterator.next().value).to.deep.equal(callExpection);
      });

      it('should put an correct Effect description', () => {
        const putExpection = put({
          type: Constant.ELEMENT_LIST_FETCH_SUCCEEDED,
          payload: mockElementList,
        });
        expect(iterator.next(mockElementList).value).to.deep.equal(putExpection);
      });
    });
  });

  describe('#onElementCreated', () => {
    let iterator;
    describe('when access to db successfully', () => {
      before(() => {
        iterator = saga.onElementCreated(mockAction);
      });
      it('should call an correct Effect description', () => {
        const callExpection = call(Api.postTodoElements, mockAction);
        expect(iterator.next().value).to.deep.equal(callExpection);
      });
      it('should put an correct Effect description', () => {
        const putExpection = put({
          type: Constant.ON_CREATE_FORM_SUBMIT_SUCCEEDED,
          payload: mockElementList,
        });
        expect(iterator.next(mockElementList).value).to.deep.equal(putExpection);
      });
    });
    describe('when failed, ', () => {
      it('should not put any Effect description', () => {
        iterator = saga.onElementCreated(mockAction);
        const APIReturn = undefined;
        const failedResult = {
          value: undefined,
          done: true,
        };
        iterator.next();
        expect(iterator.next(APIReturn)).to.deep.equal(failedResult);
      });
    });
  });
  describe('#onModalEdited', () => {
    let iterator;
    describe('when update new element to db successfully, ', () => {
      before(() => {
        iterator = saga.onModalEdited(mockAction);
      });
      it('should call an correct Effect description', () => {
        const callExpection = call(Api.putTodoElement, mockAction);
        expect(iterator.next().value).to.deep.equal(callExpection);
      });
      it('should put an correct Effect description', () => {
        const putExpection = put({
          type: Constant.ON_MODAL_EDIT_SUCCEEDED,
          payload: mockAction.payload,
        });
        expect(iterator.next(Constant.HTTP_STATUS_200).value).to.deep.equal(putExpection);
      });
    });
    describe('when failed, ', () => {
      it('should not put any Effect description', () => {
        iterator = saga.onModalEdited(mockAction);
        const APIReturn = undefined;
        const failedResult = {
          value: undefined,
          done: true,
        };
        iterator.next();
        expect(iterator.next(APIReturn)).to.deep.equal(failedResult);
      });
    });
  });
  describe('#onElementDeleted', () => {
    let iterator;
    describe('when delete an element to db successfully, ', () => {
      before(() => {
        iterator = saga.onElementDeleted(mockAction);
      });
      it('should call an correct Effect description', () => {
        const callExpection = call(Api.deleteTodoElement, mockAction);
        expect(iterator.next().value).to.deep.equal(callExpection);
      });
      it('should put an correct Effect description', () => {
        const putExpection = put({
          type: Constant.ON_ELEMENT_ITEM_DELETE_SUCCEEDED,
          payload: mockAction.payload,
        });
        expect(iterator.next(Constant.HTTP_STATUS_200).value).to.deep.equal(putExpection);
      });
    });
    describe('when failed, ', () => {
      it('should not put any Effect description', () => {
        iterator = saga.onElementDeleted(mockAction);
        const APIReturn = undefined;
        const failedResult = {
          value: undefined,
          done: true,
        };
        iterator.next();
        expect(iterator.next(APIReturn)).to.deep.equal(failedResult);
      });
    });
  });
});
