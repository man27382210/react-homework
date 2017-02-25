import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Input } from 'react-materialize';
import { EditModal } from '../../app/components/editModal.jsx';
import sinon from 'sinon';
import Constant from '../../app/common/constant';

/* render
 * onFormChange
 * componentWillReceiveProps
 * onSubmit
*/
const mockInputValue = 'test';
const mockElement = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: Constant.STATUS_OPEN,
  priority: Constant.PRIORITY_EMERGENCY,
};
function setup() {
  const props = {
    onModalEdit: sinon.spy(),
    onElementItemEdit: sinon.spy(),
    modalDisplay: mockElement
  };
  const enzymeWrapper = mount(<EditModal {...props}/>);
  return enzymeWrapper;
}

describe('<EditModal />', () => {
  describe('#render', () => {
    it('structure should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#edit-modal').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal .row')).to.have.length(3);
    });
    it('edit-modal-owner should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#edit-modal-owner').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal-owner').name()).to.equals('input');
    });
    it('edit-modal-title should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#edit-modal-title').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal-title').name()).to.equals('input');
    });
    it('edit-modal-category should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#edit-modal-category').exists()).to.be.true;
      expect(enzymeWrapper.find('#edit-modal-category').name()).to.equals('input');
    });
    it('edit-modal-status should be rendered correctly', () => {
      const enzymeWrapper = setup();
      const options = enzymeWrapper.find(Input).at(0).find('option');
      expect(enzymeWrapper.find('#edit-modal-status').exists()).to.be.true;
      expect(options).to.have.length(5);
    });
    it('edit-modal-priority should be rendered correctly', () => {
      const enzymeWrapper = setup();
      const options = enzymeWrapper.find(Input).at(1).find('option');
      expect(enzymeWrapper.find('#edit-modal-priority').exists()).to.be.true;
      expect(options).to.have.length(5);
    });
  });

  describe('#onFormChange', () => {
    let spy;
    let enzymeWrapper;
    before(() => {
      spy = sinon.spy(EditModal.prototype, 'onFormChange');
    });
    beforeEach(() => {
      enzymeWrapper = setup();
    });

    describe('edit-modal-owner', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#edit-modal-owner');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#edit-modal-owner');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('owner')).to.equals(mockInputValue);
      });
    });

    describe('edit-modal-title', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#edit-modal-title');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#edit-modal-title');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('title')).to.equals(mockInputValue);
      });
    });
    describe('edit-modal-category', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#edit-modal-category');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#edit-modal-category');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('category')).to.equals(mockInputValue);
      });
    });

    describe('edit-modal-status', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#edit-modal-status');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#edit-modal-status');
        input.node.value = Constant.STATUS_OPEN;
        input.simulate('change', input);
        expect(enzymeWrapper.state('status')).to.equals(Constant.STATUS_OPEN);
      });
    });
    describe('edit-modal-priority', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#edit-modal-priority');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#edit-modal-priority');
        input.node.value = Constant.PRIORITY_IMPORTANT;
        input.simulate('change', input);
        expect(enzymeWrapper.state('priority')).to.equals(Constant.PRIORITY_IMPORTANT);
      });
    });
  });

  describe('#onSubmit', () => {
    let spy;
    let spyResetForm;
    let enzymeWrapper;

    beforeEach(() => {
      spy = sinon.spy(EditModal.prototype, 'onEditSubmit');
      spyResetForm = sinon.stub(EditModal.prototype, 'resetForm');
      enzymeWrapper = setup();
    });
    afterEach(() => {
      spy.restore();
      spyResetForm.restore();
    });

    it('should be called once when clicked', () => {
      const submitBtn = enzymeWrapper.find('#edit-modal-submit').find('button');
      submitBtn.simulate('click');
      expect(spy.called).to.equal(true);
    });

    it('should not submit successfully if field are empty', () => {
      const submitBtn = enzymeWrapper.find('#edit-modal-submit').find('button');

      enzymeWrapper.setState({category: ''});
      submitBtn.simulate('click');
      expect(spyResetForm.called).to.equal(false);
    });

    it('should submit successfully if field are not empty', () => {
      const submitBtn = enzymeWrapper.find('#edit-modal-submit').find('button');
      enzymeWrapper.setState({...mockElement});
      submitBtn.simulate('click');
      expect(spyResetForm.called).to.equal(true);
    });
  });
});

