import reducer from '../../app/reducers/modalDisplay';
import Constant from '../../app/common/constant';
import { expect } from 'chai';

const defaultValue = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
};
const mockElement = {
  category: 'mockCategory',
  title: 'mockTitle',
  owner: 'mockOwner',
  status: Constant.STATUS_PENDING,
  priority: Constant.PRIORITY_IMPORTANT,
};
describe('modalDisplay reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(defaultValue);
  });
  it('should handle ON_ELEMENT_ITEM_EDIT', () => {
    const action = {
      type: Constant.ON_ELEMENT_ITEM_EDIT,
      payload: mockElement,
    };
    const result = mockElement;
    expect(reducer(undefined, action)).to.deep.equal(result);
  });
});
