import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProductList from 'components/ProductList';
import ProductItem from 'components/ProductList/ProductItem';

const PRODUCTS = [{
  id: 1,
  name: 'Audi R8',
  category: 'Cars & Motorcycles',
  price: 12000,
  in_stock: 3,
  status: 'Publish',
  image_url: 'http://bulma.io/images/placeholders/64x64.png'
}];

describe('<ProductList />', () => {
  it('should render at least one <ProductItem /> component', () => {
    const wrapper = shallow(<ProductList products={PRODUCTS} />);
    expect(wrapper.find(ProductItem)).to.have.length.above(0);
  });
});
