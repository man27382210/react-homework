import React from 'react';
import numeral from 'numeral';
import styles from './ProductItem.css';
import { MODAL } from '../../constants/ModalNames';

const ProductItem = (props) => {
  const product = props.product;
  const { showModal } = props;
  return (
    <tr>
      <td>
        <figure className="image is-64x64">
          <img src={product.imageUrl} />
        </figure>
      </td>
      <td className={styles.vertical_middle}>{product.name}</td>
      <td className={styles.vertical_middle}>{product.category}</td>
      <td className={styles.number}>{numeral(product.price).format('$ 0,0[.]00')}</td>
      <td className={styles.number}>{numeral(product.inStock).format('0,0')}</td>
      <td className={styles.status}><span className={`tag ${styles[product.status]}`}>{product.status}</span></td>
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
            <a className="button is-danger is-outlined" onClick={() => showModal(MODAL.COMFIRM_MODAL, product.id)}>
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
  product: React.PropTypes.object,
  showModal: React.PropTypes.func.isRequired
};

export default ProductItem;
