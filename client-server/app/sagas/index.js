import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from '../redux/modules/products';

import * as Api from '../services/api';

export function* fetchProducts() {
  try {
    const products = yield call(Api.getProducts);
    yield put({
      type: GET_PRODUCTS.SUCCESS,
      payload: {
        isFetching: false,
        data: products
      }
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCTS.FAILURE,
      payload: {
        isFetching: false,
        hasError: true,
        error
      }
    });
  }
}

export function* onAddProdcut(action) {
  try {
    const newProduct = yield call(Api.addProdcut, action.payload.data);
    yield put({
      type: ADD_PRODUCT.SUCCESS,
      payload: {
        isFetching: false,
        data: newProduct
      }
    });
  } catch (error) {
    yield put({
      type: ADD_PRODUCT.FAILURE,
      payload: {
        isFetching: false,
        hasError: true,
        error
      }
    });
  }
}

export function* onEditProdcut(action) {
  const product = action.payload.data;
  try {
    yield call(Api.editProdcut, product);
    yield put({
      type: EDIT_PRODUCT.SUCCESS,
      payload: {
        isFetching: false,
        data: product
      }
    });
  } catch (error) {
    yield put({
      type: EDIT_PRODUCT.FAILURE,
      payload: {
        isFetching: false,
        hasError: true,
        error
      }
    });
  }
}

export function* onDeleteProdcut(action) {
  const id = action.payload.data.id;
  try {
    yield call(Api.deleteProdcut, id);
    yield put({
      type: DELETE_PRODUCT.SUCCESS,
      payload: {
        isFetching: false,
        data: { id }
      }
    });
  } catch (error) {
    yield put({
      type: DELETE_PRODUCT.FAILURE,
      payload: {
        isFetching: false,
        hasError: true,
        error
      }
    });
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(GET_PRODUCTS.REQUEST, fetchProducts),
    takeEvery(ADD_PRODUCT.REQUEST, onAddProdcut),
    takeEvery(EDIT_PRODUCT.REQUEST, onEditProdcut),
    takeEvery(DELETE_PRODUCT.REQUEST, onDeleteProdcut)
  ];
}
