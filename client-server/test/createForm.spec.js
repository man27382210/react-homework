import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Input } from 'react-materialize';
import { CreateForm } from '../app/components/createForm.jsx';
import sinon from 'sinon';
import Constant from '../app/common/constant';

const mockInputValue = 'test';
function setup() {
  const enzymeWrapper = mount(<CreateForm />);
  return enzymeWrapper;
}
/* render
 * onFormChange
 * onSubmit
 *  1. checkValueExist
 *  2. resetForm
*/

describe('<CreateForm />', () => {
  describe('when render DOM,', () => {
    it('structure should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#create-form').exists()).to.be.true;
      expect(enzymeWrapper.find('#create-form form')).to.have.length(1);
      expect(enzymeWrapper.find('#create-form div.row')).to.have.length(3);
    });
    it('create-form-owner should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#create-form-owner').exists()).to.be.true;
      expect(enzymeWrapper.find('#create-form-owner').name()).to.equals('input');
    });
    it('create-form-title should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#create-form-title').exists()).to.be.true;
      expect(enzymeWrapper.find('#create-form-title').name()).to.equals('input');
    });
    it('create-form-category should be rendered correctly', () => {
      const enzymeWrapper = setup();
      expect(enzymeWrapper.find('#create-form-category').exists()).to.be.true;
      expect(enzymeWrapper.find('#create-form-category').name()).to.equals('input');
    });
    it('create-form-status should be rendered correctly', () => {
      const enzymeWrapper = setup();
      const options = enzymeWrapper.find(Input).at(0).find('option');
      expect(enzymeWrapper.find('#create-form-status').exists()).to.be.true;
      expect(options).to.have.length(5);
    });
    it('create-form-priority should be rendered correctly', () => {
      const enzymeWrapper = setup();
      const options = enzymeWrapper.find(Input).at(1).find('option');
      expect(enzymeWrapper.find('#create-form-priority').exists()).to.be.true;
      expect(options).to.have.length(5);
    });
  });

  describe('when form field has been changed,', () => {
    let spy;
    let enzymeWrapper;
    before(() => {
      spy = sinon.spy(CreateForm.prototype, 'onFormChange');
    });
    beforeEach(() => {
      enzymeWrapper = setup();
    });

    describe('create-form-owner', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#create-form-owner');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });
      it('state should be input value', () => {
        const input = enzymeWrapper.find('#create-form-owner');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('owner')).to.equals(mockInputValue);        
      });
    });

    describe('create-form-title', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#create-form-title');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#create-form-title');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('title')).to.equals(mockInputValue);        
      });
    });
    describe('create-form-category', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#create-form-category');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#create-form-category');
        input.node.value = mockInputValue;
        input.simulate('change', input);
        expect(enzymeWrapper.state('category')).to.equals(mockInputValue);        
      });
    });

    describe('create-form-status', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#create-form-status');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#create-form-status');
        input.node.value = Constant.STATUS_OPEN;
        input.simulate('change', input);
        expect(enzymeWrapper.state('status')).to.equals(Constant.STATUS_OPEN);        
      });
    });
    describe('create-form-priority', () => {
      it('onFormChange should call once', () => {
        const input = enzymeWrapper.find('#create-form-priority');
        input.simulate('change');
        expect(spy.called).to.equal(true);
      });

      it('state should be input value', () => {
        const input = enzymeWrapper.find('#create-form-priority');
        input.node.value = Constant.PRIORITY_IMPORTANT;
        input.simulate('change', input);
        expect(enzymeWrapper.state('priority')).to.equals(Constant.PRIORITY_IMPORTANT);        
      });
    });
  });
});
