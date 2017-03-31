// constants
const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// actions
export const addProdcut = (product) => ({
  type: ADD_PRODUCT,
  product
});

export const editProdcut = (product) => ({
  type: EDIT_PRODUCT,
  product
});

export const deleteProdcut = (id) => ({
  type: DELETE_PRODUCT,
  id
});

export const actions = {
  addProdcut,
  editProdcut,
  deleteProdcut
};

// reducers
const initialState = [{
  id: 1,
  name: 'Audi R8',
  category: 'Cars & Motorcycles',
  price: 12000,
  inStock: 3,
  status: 'Publish',
  imageUrl: 'http://bulma.io/images/placeholders/64x64.png'
}, {
  id: 2,
  name: 'Toyota 86',
  category: 'Cars & Motorcycles',
  price: 8000,
  inStock: 3,
  status: 'Draft',
  imageUrl: 'http://bulma.io/images/placeholders/64x64.png'
}];

const products = (state = initialState, action) => {
  switch (action.type) {
  case ADD_PRODUCT:
    return [
      {
        id: state.reduce((maxId, product) => Math.max(product.id, maxId), -1) + 1,
        ...action.product
      },
      ...state
    ];
  case EDIT_PRODUCT:
    return state.map(product =>
      product.id === action.product.id ?
        { ...action.product } :
        product
    );
  case DELETE_PRODUCT:
    return state.filter(product =>
      product.id !== action.id
    );
  default:
    return state;
  }
};

export default products;
