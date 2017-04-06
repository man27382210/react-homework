import { API_HOST } from '../../config';
import request from 'superagent';

// constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CLEAR_ERROR_STATE = 'CLEAR_ERROR_STATE';

// actions
export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: {
        isFetching: true
      }
    });
    const url = `${API_HOST}/api/products`;
    request
      .get(url)
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: {
            isFetching: false,
            data: res.body
          }
        });
      },
      (err) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: {
            isFetching: false,
            hasError: true,
            error: err.toString()
          }
        });
      });
  };
};

export const addProdcut = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        isFetching: true
      }
    });
    const url = `${API_HOST}/api/products`;
    request
      .post(url)
      .send(product)
      .then((res) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            isFetching: false,
            data: res.body
          }
        });
      },
      (err) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            isFetching: false,
            hasError: true,
            error: err.toString()
          }
        });
      });
  };
};

// EDIT_PRODUCT
export const editProdcut = (product) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: {
        isFetching: true
      }
    });
    const url = `${API_HOST}/api/products/${product.id}`;
    request
      .put(url)
      .send(product)
      .then(() => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            isFetching: false,
            data: product
          }
        });
      },
      (err) => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            isFetching: false,
            hasError: true,
            error: err.toString()
          }
        });
      });
  };
};

export const deleteProdcut = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        isFetching: true
      }
    });
    const url = `${API_HOST}/api/products/${id}`;
    request
      .del(url)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            isFetching: false,
            data: { id }
          }
        });
      },
      (err) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            isFetching: false,
            hasError: true,
            error: err.toString()
          }
        });
      });
  };
};

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
  case GET_PRODUCTS:
    return Object.assign({}, state, action.payload);
  case ADD_PRODUCT:
    if (isFetchSuccess(action.payload)) newArray.push(action.payload.data);
    return Object.assign({}, state, action.payload, { data: newArray });
  case EDIT_PRODUCT:
    if (isFetchSuccess(action.payload)) {
      newArray = newArray.map(product =>
        product.id === action.payload.data.id ?
          { ...action.payload.data } :
          product
      );
    }
    return Object.assign({}, state, action.payload, { data: newArray });
  case DELETE_PRODUCT:
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
