// constants
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const GET_PRODUCTS = createRequestTypes('GET_PRODUCTS');
export const ADD_PRODUCT = createRequestTypes('ADD_PRODUCT');
export const EDIT_PRODUCT = createRequestTypes('EDIT_PRODUCT');
export const DELETE_PRODUCT = createRequestTypes('DELETE_PRODUCT');
const CLEAR_ERROR_STATE = 'CLEAR_ERROR_STATE';

// actions
export const getProducts = () => ({
  type: GET_PRODUCTS.REQUEST,
  payload: {
    isFetching: true
  }
});

export const addProdcut = (product) => ({
  type: ADD_PRODUCT.REQUEST,
  payload: {
    isFetching: true,
    data: product
  }
});

// EDIT_PRODUCT
export const editProdcut = (product) => ({
  type: EDIT_PRODUCT.REQUEST,
  payload: {
    isFetching: true,
    data: product
  }
});

export const deleteProdcut = (id) => ({
  type: DELETE_PRODUCT.REQUEST,
  payload: {
    isFetching: true,
    data: { id }
  }
});

export const clearErrorState = () => ({
  type: CLEAR_ERROR_STATE,
  payload: {
    hasError: false,
    error: null
  }
});

export const actions = {
  getProducts,
  addProdcut,
  editProdcut,
  deleteProdcut,
  clearErrorState
};

// reducers
const initialState = {
  data: null,
  isFetching: false,
  hasError: false,
  error: null
};

const isFetchSuccess = (payload) => {
  const { isFetching, hasError } = payload;
  return !(isFetching || hasError);
};

const products = (state = initialState, action) => {
  let newArray = state.data;
  switch (action.type) {
  case GET_PRODUCTS.REQUEST:
  case GET_PRODUCTS.SUCCESS:
  case GET_PRODUCTS.FAILURE:
    return Object.assign({}, state, action.payload);
  case ADD_PRODUCT.REQUEST:
  case ADD_PRODUCT.SUCCESS:
  case ADD_PRODUCT.FAILURE:
    if (isFetchSuccess(action.payload)) newArray.push(action.payload.data);
    return Object.assign({}, state, action.payload, { data: newArray });
  case EDIT_PRODUCT.REQUEST:
  case EDIT_PRODUCT.SUCCESS:
  case EDIT_PRODUCT.FAILURE:
    if (isFetchSuccess(action.payload)) {
      newArray = newArray.map(product =>
        product.id === action.payload.data.id ?
          { ...action.payload.data } :
          product
      );
    }
    return Object.assign({}, state, action.payload, { data: newArray });
  case DELETE_PRODUCT.REQUEST:
  case DELETE_PRODUCT.SUCCESS:
  case DELETE_PRODUCT.FAILURE:
    if (isFetchSuccess(action.payload)) {
      newArray = newArray.filter(product =>
        product.id !== action.payload.data.id
      );
    }
    return Object.assign({}, state, action.payload, { data: newArray });
  case CLEAR_ERROR_STATE:
    return Object.assign({}, state, action.payload);
  default:
    return state;
  }
};

export default products;
