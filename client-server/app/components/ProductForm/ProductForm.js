import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="columns is-multiline">
          <div className="column is-8">
            <label className="label">Product Name</label>
            <p className="control">
              <input className="input" type="text" placeholder="Product Name" />
            </p>
          </div>
          <div className="column is-4">
            <label className="label">Category</label>
            <p className="control">
              <span className="select is-fullwidth">
                <select>
                  <option>Select category</option>
                  <option>Sports & Outdoors</option>
                  <option>Kids & Baby</option>
                  <option>Shoes</option>
                  <option>Bags & Accessories</option>
                  <option>Beauty & Health</option>
                  <option>Clothing</option>
                  <option>Food & Drinks</option>
                  <option>Toys & Hobbies</option>
                  <option>Electronics</option>
                  <option>Cars & Motorcycles</option>
                  <option>Others</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column is-4">
            <label className="label">Price</label>
            <p className="control">
              <input className="input" type="number" placeholder="Price" />
            </p>
          </div>
          <div className="column is-4">
            <label className="label">In Stock</label>
            <p className="control">
              <input className="input" type="number" placeholder="In Stock" />
            </p>
          </div>
          <div className="column is-4">
            <label className="label">Status</label>
            <p className="control">
              <span className="select is-fullwidth">
                <select>
                  <option>Publish</option>
                  <option>Draft</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column">
            <label className="label">Image URL</label>
            <p className="control">
              <input className="input" type="text" placeholder="http://bulma.io/images/placeholders/64x64.png" />
            </p>
          </div>
        </div>
        <p className="control">
          <button className="button is-primary is-fullwidth">Add Product</button>
        </p>
      </div>
    );
  }
}

export default ProductForm;
