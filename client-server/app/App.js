import React, { Component } from 'react';
import MainSection from './components/MainSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id: 1,
        name: 'Audi R8',
        category: 'Cars & Motorcycles',
        price: 12000,
        in_stock: 3,
        status: 'Publish',
        image_url: 'http://bulma.io/images/placeholders/64x64.png'
      }, {
        id: 2,
        name: 'Toyota 86',
        category: 'Cars & Motorcycles',
        price: 8000,
        in_stock: 3,
        status: 'Draft',
        image_url: 'http://bulma.io/images/placeholders/64x64.png'
      }]
    };
  }
  render() {
    return (
      <div>
        <MainSection
          products={this.state.products}
        />
      </div>
    );
  }
}
