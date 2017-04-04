import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProductForm from 'components/ProductForm';
import CategorySelect from 'components/Common/CategorySelect';
import StatusSelect from 'components/Common/StatusSelect';

describe('<ProductForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProductForm />);
  });

  it('should render an <CategorySelect /> component', () => {
    expect(wrapper.find(CategorySelect)).to.have.length(1);
  });

  it('should render an <StatusSelect /> component', () => {
    expect(wrapper.find(StatusSelect)).to.have.length(1);
  });
});
