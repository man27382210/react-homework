import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from 'components/page_index/header.jsx';
import CreateForm from 'components/page_index/createForm.jsx';

describe('<Header />', () => {
  describe('render DOM correctly', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('should render one <CreateForm /> component', () => {
      expect(wrapper.find(CreateForm)).to.have.length(1);
    });
  });
});

