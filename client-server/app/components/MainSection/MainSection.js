import React from 'react';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';

const MainSection = (props) => {
  const { products, actions } = props;
  return (
    <section className="hero is-fullheight is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">
                Product Management System
              </h1>
              <div className="box">
                <ProductForm
                  addProdcut={actions.addProdcut}
                />
                {products.length > 0
                  &&
                  <div>
                    <hr />
                    <ProductList {...props} />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainSection.propTypes = {
  products: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default MainSection;
