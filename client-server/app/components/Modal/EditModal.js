import React from 'react';
import ProductForm from '../ProductForm';

const EditModal = (props) => {
  const { isShown, product, editProdcut, closeModal } = props;

  return (
    <div className={`modal ${isShown && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit the product</p>
          <button className="delete" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          {Object.keys(product).length > 0
            &&
            <div className="content">
              <ProductForm
                product={product}
                updateProdcut={editProdcut}
                closeModal={closeModal}
              />
            </div>
          }
        </section>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  isShown: React.PropTypes.bool.isRequired,
  product: React.PropTypes.object.isRequired,
  editProdcut: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired
};

export default EditModal;
