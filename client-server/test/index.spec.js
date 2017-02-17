import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Index from '../app/components/index.jsx';
import Header from '../app/components/header.jsx';
import ElementList from '../app/components/elementList.jsx';
import EditModal from '../app/components/editModal.jsx';


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

    it('should render one <EditModal> component', ()=> {
      expect(wrapper.find(EditModal)).to.have.length(1);
    });
  });
});
