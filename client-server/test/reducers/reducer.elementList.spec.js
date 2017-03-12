import reducer from 'reducers/elementList';
import Constant from 'common/constant';
import { expect } from 'chai';

const defaultValue = [];
const mockElement = {
  category: 'mockCategory',
  title: 'mockTitle',
  owner: 'mockOwner',
  status: Constant.STATUS_PENDING,
  priority: Constant.PRIORITY_IMPORTANT,
};
const mockIndex = 0;

describe('elementList reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(defaultValue);
  });

  it('should handle ON_CREATE_FORM_SUBMIT_SUCCEEDED', () => {
    const action = {
      type: Constant.ON_CREATE_FORM_SUBMIT_SUCCEEDED,
      payload: mockElement,
    };
    const result = [...defaultValue, mockElement];
    expect(reducer(undefined, action)).to.deep.equal(result);
  });

  it('should handle ON_MODAL_EDIT_SUCCEEDED', () => {
    // change value of array[index] to mockElement

    const action = {
      type: Constant.ON_MODAL_EDIT_SUCCEEDED,
      payload: {...mockElement, index: mockIndex},
    };
    const result = [...defaultValue];
    result[mockIndex] = mockElement;

    expect(reducer(undefined, action)).to.deep.equal(result);
  });

  it('should handle ON_ELEMENT_ITEM_DELETE_SUCCEEDED', () => {
    // delete element at array[index]

    const action = {
      type: Constant.ON_ELEMENT_ITEM_DELETE_SUCCEEDED,
      payload: {...mockElement, index: mockIndex},
    };
    let result = [...defaultValue];
    delete result[mockIndex];
    result = result.filter((value) => value);

    expect(reducer(undefined, action)).to.deep.equal(result);
  });
  it('should handle ELEMENT_LIST_FETCH_SUCCEEDED', () => {
    // mock elementList which ask from api-server.
    const mockElementList = Array.apply(null, new Array(2)).map(() => mockElement);
    const action = {
      type: Constant.ELEMENT_LIST_FETCH_SUCCEEDED,
      payload: mockElementList,
    };
    const result = [...defaultValue, ...mockElementList];
    expect(reducer(undefined, action)).to.deep.equal(result);
  });
});
