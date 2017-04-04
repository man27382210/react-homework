import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CategorySelect from 'components/Common/CategorySelect';

describe('<CategorySelect />', () => {
  it('should render one "select"', () => {
    const wrapper = shallow(<CategorySelect />);
    expect(wrapper.find('select')).to.have.length(1);
  });
});
