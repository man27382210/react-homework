import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Index from 'components/page_index/index.jsx';
import Header from 'components/page_index/header.jsx';
import ElementList from 'components/page_index/elementList.jsx';


describe('<Index />', () => {
  describe('render DOM correctly', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Index />);
    });
    it('should render one <Header /> component', () => {
      expect(wrapper.find(Header)).to.have.length(1);
    });

    it('should render one <ElementList /> component', () => {
      expect(wrapper.find(ElementList)).to.have.length(1);
    });
  });
});
