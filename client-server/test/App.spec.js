import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from 'App';
import MainSection from 'components/MainSection';

describe('<App />', () => {
  it('should render one <MainSection /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MainSection)).to.have.length(1);
  });
});
