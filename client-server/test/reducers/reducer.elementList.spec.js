import reducer from '../../app/reducers/elementList';
import Constant from '../../app/common/constant';
import { expect } from 'chai';

const defaultValue = [{
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
}];
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

  it('should handle ON_CREATE_FORM_SUBMIT', () => {
    const action = {
      type: Constant.ON_CREATE_FORM_SUBMIT,
      payload: mockElement,
    };
    const result = [...defaultValue, mockElement];
    expect(reducer(undefined, action)).to.deep.equal(result);
  });

  it('should handle ON_MODAL_EDIT', () => {
    // change value of array[index] to mockElement

    const action = {
      type: Constant.ON_MODAL_EDIT,
      payload: {...mockElement, index: mockIndex},
    };
    const result = [...defaultValue];
    result[mockIndex] = mockElement;

    expect(reducer(undefined, action)).to.deep.equal(result);
  });

  it('should handle ON_ELEMENT_ITEM_DELETE', () => {
    // delete element at array[index]

    const action = {
      type: Constant.ON_ELEMENT_ITEM_DELETE,
      payload: {...mockElement, index: mockIndex},
    };
    let result = [...defaultValue];
    delete result[mockIndex];
    result = result.filter((value) => value);

    expect(reducer(undefined, action)).to.deep.equal(result);
  });
});
