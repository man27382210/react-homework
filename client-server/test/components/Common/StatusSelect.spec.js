import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import StatusSelect from 'components/Common/StatusSelect';

describe('<StatusSelect />', () => {
  it('should render one "select"', () => {
    const wrapper = shallow(<StatusSelect />);
    expect(wrapper.find('select')).to.have.length(1);
  });
});
