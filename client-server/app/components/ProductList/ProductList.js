import React from 'react';
import styles from './ProductList.css';

const ProductList = () => {
  return (
    <div className={styles.text_center}>
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
          <tr>
            <td>
              <figure className="image is-64x64">
                <img src="http://bulma.io/images/placeholders/64x64.png" />
              </figure>
            </td>
            <td className={styles.vertical_middle}>Audi R8</td>
            <td className={styles.vertical_middle}>Car</td>
            <td className={styles.number}>12,000</td>
            <td className={styles.number}>3</td>
            <td className={styles.status}><span className="tag is-success">Publish</span></td>
            <td className={styles.vertical_middle}>
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info is-outlined">
                    <span className="icon">
                      <i className="fa fa-pencil"></i>
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-danger is-outlined">
                    <span className="icon">
                      <i className="fa fa-trash-o"></i>
                    </span>
                  </a>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
