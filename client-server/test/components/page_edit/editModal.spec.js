import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { EditModal } from 'components/page_edit/editModal.jsx';
import { Link } from 'react-router';
import { Input } from 'react-materialize';
import Constant from 'common/constant';
import mockRouterContext from 'helpers/mockRouterContext';

// the following are mock data.
const mockElement = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
};
const mockInputValue = 'Test';
// enzymeWrapper setup
function setup() {
  const props = {
    modalDisplay: mockElement,
    onModalEdit: sinon.spy(),
  };
  const context = {
    router: mockRouterContext
  };
  return mount(<EditModal {...props} />, { context });
}

/*
 * testing milestone
 * 1. render
 * 2. componentWillReceiveProps
 * 3. onFormChange
 * 4. onSubmit
 */
describe('<EditModal />', () => {
  describe('#render', () => {
    it('should render component correctly.', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#edit-modal').exists()).to.be.true;
      expect(enzymeWrapper.find(Link)).to.have.length(1);
      expect(enzymeWrapper.find('#edit-modal .row')).to.have.length(3);

      // owner field
      expect(enzymeWrapper.find('#edit-modal-owner').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal-owner').name()).to.equals('input');

      // title field
      expect(enzymeWrapper.find('#edit-modal-title').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal-title').name()).to.equals('input');

      // category field
      expect(enzymeWrapper.find('#edit-modal-category').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal-category').name()).to.equals('input');

      // tatus field
      expect(enzymeWrapper.find('#edit-modal-status').exists()).to.be.true;
      expect(enzymeWrapper.find(Input).at(0).find('option')).to.have.length(5);

      // priority field
      expect(enzymeWrapper.find('#edit-modal-priority').exists()).to.be.true;
      expect(enzymeWrapper.find(Input).at(1).find('option')).to.have.length(5);
    });
  });

  describe('#componentWillReceiveProps', () => {
    it('receive central state and set local state', () => {
      const enzymeWrapper = setup();
      const mockModalValue = {
        ...mockElement,
        owner: mockInputValue,
      };
      enzymeWrapper.setProps({modalDisplay: mockModalValue});
      expect(enzymeWrapper.state('owner')).to.equal(mockInputValue);
    });
  });

  describe('#onFormChange', () => {
    let spy;
    let enzymeWrapper;
    beforeEach(() => {
      enzymeWrapper = setup();
      spy = sinon.spy(EditModal.prototype, 'onFormChange');
    });
    afterEach(() => {
      // restore stub
      spy.restore();
    });
    describe('when typing on field owner', () => {
      it('state of owner should change', () => {
        const input = enzymeWrapper.find('#edit-modal-owner');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('owner')).to.equals(mockInputValue);
      });
    });
    describe('when typing on field title', () => {
      it('state of title should change', () => {
        const input = enzymeWrapper.find('#edit-modal-title');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('title')).to.equals(mockInputValue);
      });
    });
    describe('when typing on field category', () => {
      it('state of category should change', () => {
        const input = enzymeWrapper.find('#edit-modal-category');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('category')).to.equals(mockInputValue);
      });
    });
    describe('when clicking on field status', () => {
      it('state of status should change', () => {
        const input = enzymeWrapper.find('#edit-modal-status');
        input.node.value = Constant.STATUS_OPEN;
        input.simulate('change', input);
        expect(enzymeWrapper.state('status')).to.equals(Constant.STATUS_OPEN);
      });
    });
    describe('when clicking on field priority', () => {
      it('state of priority should change', () => {
        const input = enzymeWrapper.find('#edit-modal-priority');
        input.node.value = Constant.PRIORITY_IMPORTANT;
        input.simulate('change', input);
        expect(enzymeWrapper.state('priority')).to.equals(Constant.PRIORITY_IMPORTANT);
      });
    });
  });

  describe('#onSubmit', () => {
    let enzymeWrapper;
    beforeEach(() => {
      enzymeWrapper = setup();
    });

    describe('if Btn Submit was clicked ', () => {
      describe('when field was not empty', () => {
        it('method onModalEdit should called once', () => {
          const submitBtn = enzymeWrapper.find('#edit-modal-submit').find('button');
          submitBtn.simulate('click');
          expect(enzymeWrapper.props().onModalEdit.called).to.be.true;
        });
      });
      describe('when field was empty', () => {
        it('method onModalEdit should not be called ', () => {
          const submitBtn = enzymeWrapper.find('#edit-modal-submit').find('button');

          enzymeWrapper.setState({category: ''});
          submitBtn.simulate('click');
          expect(enzymeWrapper.props().onModalEdit.called).to.be.false;
        });
      });
    });
  });
});

