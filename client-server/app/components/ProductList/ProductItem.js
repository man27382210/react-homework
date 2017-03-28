import React from 'react';
import styles from './ProductItem.css';

const ProductItem = (props) => {
  const product = props.product;
  return (
    <tr>
      <td>
        <figure className="image is-64x64">
          <img src={product.image_url} />
        </figure>
      </td>
      <td className={styles.vertical_middle}>{product.name}</td>
      <td className={styles.vertical_middle}>{product.category}</td>
      <td className={styles.number}>{product.price}</td>
      <td className={styles.number}>{product.in_stock}</td>
      <td className={styles.status}><span className="tag is-success">{product.status}</span></td>
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
  );
};

ProductItem.propTypes = {
  product: React.PropTypes.object
};

export default ProductItem;
