import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ElementList } from 'components/page_index/elementList.jsx';
import ElementListItem from 'components/page_index/elementListItem.jsx';

const mockElementListItem = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
};
const mockElementListCount = 5;
const mockElementList = Array.apply(null, new Array(mockElementListCount)).map(() => {
  return mockElementListItem;
});
function setup() {
  const props = {
    elementList: mockElementList,
  };
  const enzymeWrapper = shallow(<ElementList {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

// test milestone
// 1. DOM strcuture.
// 2. number of rendering <ElementListItem /> should equal to given count.
describe('<ElementList />', () => {
  describe('render DOM correctly', () => {
    it('#element-list should exist', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#element-list').exists()).to.be.true;
    });

    it('table should exist', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#element-list > table').exists()).to.be.true;
    });

    it('thead should exist', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#element-list > table > thead').exists()).to.be.true;
    });

    it('tr should exist', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#element-list > table > thead > tr').exists()).to.be.true;
    });

    it('title of th should be correct', () => {
      const { enzymeWrapper } = setup();
      const tr = enzymeWrapper.find('#element-list > table > thead > tr');
      expect(tr.childAt(0).text()).to.equal('sequence');
      expect(tr.childAt(1).text()).to.equal('status');
      expect(tr.childAt(2).text()).to.equal('category name');
      expect(tr.childAt(3).text()).to.equal('title');
      expect(tr.childAt(4).text()).to.equal('owner');
      expect(tr.childAt(5).text()).to.equal('priority');
      expect(tr.childAt(6).text()).to.equal('edit');
    });
  });

  describe('render <ElementListItem /> correctly', () => {
    it('length of <ElementListItem /> should be ElementList.length', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find(ElementListItem)).to.have.length(mockElementListCount);
    });
  });
});
