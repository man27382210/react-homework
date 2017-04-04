import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Input } from 'react-materialize';
import { CreateForm } from 'components/page_index/createForm.jsx';
import sinon from 'sinon';
import Constant from 'common/constant';

const mockInputValue = 'test';
const mockSubmitValue = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: Constant.STATUS_OPEN,
  priority: Constant.PRIORITY_EMERGENCY,
};

function setup() {
  const props = {
    onCreateFormSubmit: sinon.spy(),
  };
  const enzymeWrapper = mount(<CreateForm {...props}/>);
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

  describe('#onFormChange', () => {
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

  describe('#onSubmit', () => {
    let spy;
    let spyResetForm;
    let enzymeWrapper;
    before(() => {
      spy = sinon.spy(CreateForm.prototype, 'onSubmit');
      spyResetForm = sinon.stub(CreateForm.prototype, 'resetForm');
    });

    beforeEach(() => {
      enzymeWrapper = setup();
    });

    it('should be called once when clicked', () => {
      // const spㄉy = sinon.spy(CreateForm.prototype, 'onSubmit');
      const submitBtn = enzymeWrapper.find('#create-form-submit').find('button');
      submitBtn.simulate('click');
      expect(spy.called).to.equal(true);
    });

    it('should not submit successfully if field are empty', () => {
      const submitBtn = enzymeWrapper.find('#create-form-submit').find('button');
      enzymeWrapper.setState({});
      submitBtn.simulate('click');
      expect(spyResetForm.called).to.equal(false);
    });
    it('should submit successfully if field are not empty', () => {
      const submitBtn = enzymeWrapper.find('#create-form-submit').find('button');
      enzymeWrapper.setState(mockSubmitValue);
      submitBtn.simulate('click');
      expect(spyResetForm.called).to.equal(true);
    });
  });
});
