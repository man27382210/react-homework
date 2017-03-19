import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Link } from 'react-router';
import { ElementListItem } from 'components/page_index/elementListItem.jsx';
import mockRouterContext from 'helpers/mockRouterContext';

const mockElementListItem = {
  sequenceNumber: 0,
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
};
function setup() {
  const props = {
    element: mockElementListItem,
    index: 0,
  };
  const context = {
    router: {
      ...mockRouterContext,
    }
  };
  return shallow(<ElementListItem {...props} />, { context});
}

describe('<ElementListItem />', () => {
  describe('when render DOM,', () => {
    it('should render sequenceNumber correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td').at(0).text()).to.equals(mockElementListItem.sequenceNumber.toString());
    });

    it('should render status correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td').at(1).text()).to.equals(mockElementListItem.status);
    });

    it('should render category correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td').at(2).text()).to.equals(mockElementListItem.category);
    });

    it('should render title correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td').at(3).text()).to.equals(mockElementListItem.title);
    });

    it('should render owner correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td').at(4).text()).to.equals(mockElementListItem.owner);
    });

    it('should render priority correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td').at(5).text()).to.equals(mockElementListItem.priority);
    });
    it('should render btn#Edit correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find(Link).at(0).hasClass('indigo')).to.be.true;
    });
    it('should render btn#Delete correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('td a').at(0).hasClass('red')).to.be.true;
    });
  });
  describe('when Delete btn was click', () => {
    it('onDeleteBtnClick should be called once', () => {
      sinon.stub(ElementListItem.prototype, 'onDeleteBtnClick');
      const enzymeWrapper = setup();
      enzymeWrapper.find('td a').at(0).simulate('click');
      expect(ElementListItem.prototype.onDeleteBtnClick.calledOnce).to.equal(true);
    });
  });
});


