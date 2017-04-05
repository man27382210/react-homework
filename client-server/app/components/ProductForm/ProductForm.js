import React, { Component } from 'react';
import numeral from 'numeral';
import validUrl from 'valid-url';
import CategorySelect from '../Common/CategorySelect';
import StatusSelect from '../Common/StatusSelect';

import styles from './ProductForm.css';

const FIELDS = {
  name: 'name',
  category: 'category',
  price: 'price',
  in_stock: 'inStock',
  status: 'status',
  image_url: 'imageUrl'
};

const INIT_FIELDS_STATE = {
  [FIELDS.name]: '',
  [FIELDS.category]: '',
  [FIELDS.price]: 0,
  [FIELDS.in_stock]: 0,
  [FIELDS.status]: 'Publish',
  [FIELDS.image_url]: ''
};

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: INIT_FIELDS_STATE,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.validateUrl = this.validateUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(propertyName, e) {
    let value = e.target.value;

    if (propertyName === FIELDS.in_stock) {
      value = value ? parseInt(value, 10) : 0;
    } else if (propertyName === FIELDS.price) {
      value = parseFloat(numeral(value).format('0[.]00'));
    }

    this.validate(propertyName, value);

    const prevFields = this.state.fields;
    this.setState({
      fields: {
        ...prevFields,
        [propertyName]: value
      }
    });
  }

  validate(propertyName, value) {
    let errors = this.state.errors;
    delete errors[propertyName];
    if (!value) {
      errors[propertyName] = `The ${propertyName} is required`;
    } else if (propertyName === FIELDS.image_url) {
      errors = this.validateUrl(propertyName, value, errors);
    }
    this.setState({ errors });
  }

  validateUrl(propertyName, value, errors) {
    if (!validUrl.isUri(value)) {
      errors[propertyName] = `This ${propertyName} is invalid`;
    }
    return errors;
  }

  onSubmit(e) {
    e.preventDefault();
    const state = this.state;
    for (const key in FIELDS) {
      if (Object.prototype.hasOwnProperty.call(FIELDS, key)) {
        const field = FIELDS[key];
        this.validate(field, state.fields[field]);
      }
    }
    if (Object.keys(state.errors).length !== 0) return;
    this.props.addProdcut(state.fields);
    this.setState({ fields: INIT_FIELDS_STATE });
  }

  render() {
    const { handleChange, onSubmit } = this;
    const { errors } = this.state;
    const { name, category, price, inStock, status, imageUrl } = this.state.fields;
    return (
      <form onSubmit={onSubmit}>
        <div className="columns is-multiline">
          <div className="column is-8">
            <label className="label">Product Name</label>
            <p className="control">
              <input
                className={`input ${errors[FIELDS.name] && 'is-danger'}`}
                type="text"
                value={name}
                onChange={(e) => handleChange(FIELDS.name, e)}
                placeholder="Product Name"
              />
            </p>
            <p className="help is-danger">
              {errors[FIELDS.name]}
            </p>
          </div>
          <div className="column is-4">
            <label className="label">Category</label>
            <p className="control">
              <span className="select is-fullwidth">
                <CategorySelect
                  className={`input ${errors[FIELDS.category] && styles.is_danger}`}
                  value={category}
                  onChange={(e) => handleChange(FIELDS.category, e)}
                />
              </span>
            </p>
            <p className="help is-danger">
              {errors[FIELDS.category]}
            </p>
          </div>
          <div className="column is-4">
            <label className="label">Price</label>
            <p className="control">
              <input
                className={`input ${errors[FIELDS.price] && 'is-danger'}`}
                type="number"
                value={price}
                onChange={(e) => handleChange(FIELDS.price, e)}
              />
            </p>
            <p className="help is-danger">
              {errors[FIELDS.price]}
            </p>
          </div>
          <div className="column is-4">
            <label className="label">In Stock</label>
            <p className="control">
              <input
                className={`input ${errors[FIELDS.in_stock] && 'is-danger'}`}
                type="number"
                value={inStock}
                onChange={(e) => handleChange(FIELDS.in_stock, e)}
              />
            </p>
            <p className="help is-danger">
              {errors[FIELDS.in_stock]}
            </p>
          </div>
          <div className="column is-4">
            <label className="label">Status</label>
            <p className="control">
              <span className="select is-fullwidth">
                <StatusSelect
                  value={status}
                  onChange={(e) => handleChange(FIELDS.status, e)}
                />
              </span>
            </p>
          </div>
          <div className="column">
            <label className="label">Image URL</label>
            <p className="control">
              <input
                className={`input ${errors[FIELDS.image_url] && 'is-danger'}`}
                type="text"
                value={imageUrl}
                onChange={(e) => handleChange(FIELDS.image_url, e)}
                placeholder="http://bulma.io/images/placeholders/64x64.png"
              />
            </p>
            <p className="help is-danger">
              {errors[FIELDS.image_url]}
            </p>
          </div>
        </div>
        <p className="control">
          <button
            className="button is-primary is-fullwidth"
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            Add Product
          </button>
        </p>
      </form>
    );
  }
}

ProductForm.propTypes = {
  addProdcut: React.PropTypes.func.isRequired
};

export default ProductForm;
