import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProductItem from 'components/ProductList/ProductItem';

const PRODUCT = {
  id: 1,
  name: 'Audi R8',
  category: 'Cars & Motorcycles',
  price: 12000,
  in_stock: 3,
  status: 'Publish',
  image_url: 'http://bulma.io/images/placeholders/64x64.png'
};

describe('<ProductItem />', () => {
  it('should render one "tr"', () => {
    const wrapper = shallow(<ProductItem product={PRODUCT} />);
    expect(wrapper.find('tr')).to.have.length(1);
  });
});
