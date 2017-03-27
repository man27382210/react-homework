import React from 'react';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';

const MainSection = () => {
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
                <ProductForm />
                <hr />
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
