import reducer from 'reducers/loadingFinished';
import Constant from 'common/constant';
import { expect } from 'chai';

const defaultValue = false;

const mockValue = true;

describe('loadingFinished reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.equal(defaultValue);
  });

  it('should handle ON_INIT_LOADING_FINISHED', () => {
    const action = {
      type: Constant.ON_INIT_LOADING_FINISHED,
      payload: mockValue,
    };
    const result = mockValue;
    expect(reducer(undefined, action)).to.deep.equal(result);
  });
});
