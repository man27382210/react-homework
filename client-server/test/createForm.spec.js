import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Input } from 'react-materialize';
import { CreateForm } from '../app/components/createForm.jsx';

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

});
