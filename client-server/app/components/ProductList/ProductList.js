import React from 'react';
import ProductItem from './ProductItem';

const renderProductList = (products) => (
  products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        product={product}
      />
    );
  })
);

const ProductList = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th><p className="has-text-right">Price</p></th>
            <th><p className="has-text-right">In Stock</p></th>
            <th><p className="has-text-centered">Status</p></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderProductList(props.products)}
        </tbody>
      </table>
    </div>
  );
};

ProductList.propTypes = {
  products: React.PropTypes.array
};

export default ProductList;
