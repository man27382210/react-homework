import React from 'react';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';

import EditModal from '../Modal/EditModal';
import ComfirmModal from '../Modal/ComfirmModal';
import ImageModal from '../Modal/ImageModal';

import { MODAL } from '../../constants/ModalNames';

const ESCAPE_KEY = 27;

const renderNotification = (hasError, error, clearErrorState) => {
  if (!hasError) return null;
  return (
    <div
      className="notification is-danger has-text-centered"
      style={{marginBottom: 0}}
    >
      <button className="delete" onClick={clearErrorState}></button>
      <p>Oops! Something went wrong.</p>
      <p><small>{error}</small></p>
    </div>
  );
};

const renderModals = (modalDisplay, findProductById, actions) => {
  if (!modalDisplay.modal) return null;
  const { modal, itemId } = modalDisplay;
  const { editProdcut, deleteProdcut, closeModal} = actions;
  const product = findProductById(itemId);
  return (
    <section>
      <ImageModal
        isShown={modal === MODAL.IMAGE_MODAL}
        imageUrl={product.imageUrl}
        closeModal={closeModal}
      />
      <EditModal
        isShown={modal === MODAL.EDIT_MODAL}
        product={product}
        editProdcut={editProdcut}
        closeModal={closeModal}
      />
      <ComfirmModal
        isShown={modal === MODAL.COMFIRM_MODAL}
        product={product}
        deleteProdcut={deleteProdcut}
        closeModal={closeModal}
      />
    </section>
  );
};

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.findProductById = this.findProductById.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentDidMount() {
    this.props.actions.getProducts();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    switch (e.keyCode) {
    case ESCAPE_KEY:
      this.props.actions.closeModal();
      break;
    default:
      break;
    }
  }

  findProductById(id) {
    const array = this.props.products.data.filter((product) => {
      return product.id === id;
    });
    return array.length !== 0 ? array[0] : {};
  }

  render() {
    const { products, actions, modalDisplay } = this.props;
    const { data, hasError, error } = products;
    const { addProdcut, clearErrorState } = actions;
    return (
      <div>
        {renderNotification(hasError, error, clearErrorState)}
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
                      updateProdcut={addProdcut}
                    />
                    {(data && data.length > 0)
                      &&
                      <div>
                        <hr />
                        <ProductList {...this.props} />
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {renderModals(modalDisplay, this.findProductById, actions)}
      </div>
    );
  }
}

MainSection.propTypes = {
  products: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  modalDisplay: React.PropTypes.object.isRequired
};

export default MainSection;
