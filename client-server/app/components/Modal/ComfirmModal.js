import React from 'react';
import numeral from 'numeral';

const ConfirmModal = (props) => {
  const { isShown, product, deleteProdcut, closeModal } = props;

  const onDelete = () => {
    deleteProdcut(product.id);
    closeModal();
  };

  return (
    <div className={`modal ${isShown && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Are you sure you want to delete this product?</p>
          <button className="delete" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          {Object.keys(product).length > 0
            &&
            <div className="content">
              <table className="table" style={{ marginBottom: 0 }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{numeral(product.price).format('$ 0,0[.]00')}</td>
                    <td>{numeral(product.inStock).format('0,0')}</td>
                    <td>{product.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        </section>
        <footer className="modal-card-foot">
          <a className="button is-danger" onClick={onDelete}>Delete</a>
          <a className="button" onClick={closeModal}>Cancel</a>
        </footer>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  isShown: React.PropTypes.bool.isRequired,
  product: React.PropTypes.object.isRequired,
  deleteProdcut: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired
};

export default ConfirmModal;
