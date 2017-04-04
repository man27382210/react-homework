import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MainSection from 'components/MainSection';
import ProductForm from 'components/ProductForm';
import ProductList from 'components/ProductList';

const PRODUCTS = [{
  id: 1,
  name: 'Audi R8',
  category: 'Cars & Motorcycles',
  price: 12000,
  in_stock: 3,
  status: 'Publish',
  image_url: 'http://bulma.io/images/placeholders/64x64.png'
}];

describe('<MainSection />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainSection products={PRODUCTS} />);
  });

  it('should render one <ProductForm /> component', () => {
    expect(wrapper.find(ProductForm)).to.have.length(1);
  });

  it('should render one <ProductList /> component', () => {
    expect(wrapper.find(ProductList)).to.have.length(1);
  });
});
