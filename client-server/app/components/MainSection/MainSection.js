import React from 'react';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';
import EditModal from '../Modal/EditModal';
import ComfirmModal from '../Modal/ComfirmModal';
import { MODAL } from '../../constants/ModalNames';

const ESCAPE_KEY = 27;

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
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
    const array = this.props.products.filter((product) => {
      return product.id === id;
    });
    return array.length !== 0 ? array[0] : {};
  }

  render() {
    const { products, actions, modalDisplay } = this.props;
    return (
      <div>
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
                      updateProdcut={actions.addProdcut}
                    />
                    {products.length > 0
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
        <EditModal
          isShown={modalDisplay.modal === MODAL.EDIT_MODAL}
          product={this.findProductById(modalDisplay.itemId)}
          editProdcut={actions.editProdcut}
          closeModal={actions.closeModal}
        />
        <ComfirmModal
          isShown={modalDisplay.modal === MODAL.COMFIRM_MODAL}
          product={this.findProductById(modalDisplay.itemId)}
          deleteProdcut={actions.deleteProdcut}
          closeModal={actions.closeModal}
        />
      </div>
    );
  }
}

MainSection.propTypes = {
  products: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
  modalDisplay: React.PropTypes.object.isRequired
};

export default MainSection;
