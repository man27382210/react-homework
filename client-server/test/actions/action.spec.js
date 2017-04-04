import * as actions from 'actions';
import Constant from 'common/constant';
import { expect } from 'chai';

const mockElement = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: Constant.STATUS_OPEN,
  priority: Constant.PRIORITY_EMERGENCY,
};

describe('actions', () => {
  describe('#onElementListInit', () => {
    it('should create an action to init element lists', ()=> {
      const expectedAction = {
        type: Constant.ON_ELEMENT_LIST_INIT,
      };
      expect(actions.onElementListInit()).to.deep.equal(expectedAction);
    });
  });
  describe('#onCreateFormSubmit', () => {
    it('should create an action to submit form', ()=> {
      const expectedAction = {
        type: Constant.ON_CREATE_FORM_SUBMIT,
        payload: { ...mockElement }
      };
      expect(actions.onCreateFormSubmit(mockElement)).to.deep.equal(expectedAction);
    });
  });

  describe('#onModalEdit', () => {
    it('should create an action when modal has been edited', ()=> {
      const expectedAction = {
        type: Constant.ON_MODAL_EDIT,
        payload: mockElement
      };
      expect(actions.onModalEdit(mockElement)).to.deep.equal(expectedAction);
    });
  });
  describe('#onElementItemDelete', () => {
    it('should create an action when element item has been deleted', ()=> {
      const expectedAction = {
        type: Constant.ON_ELEMENT_ITEM_DELETE,
        payload: mockElement
      };
      expect(actions.onElementItemDelete(mockElement)).to.deep.equal(expectedAction);
    });
  });
});


