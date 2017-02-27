import axios from 'axios';
import Constant from '../common/constant';
import config from '../common/config';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchElementList() {
  const elementList = yield call(() => {
    return axios.get(config.API_SERVER_TODOELEMENTS)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  });

  yield put({
    type: Constant.ELEMENT_LIST_FETCH_SUCCEEDED,
    payload: elementList,
  });
}
function* onElementCreated(action) {
  const element = yield call(() => {
    return axios.post(config.API_SERVER_TODOELEMENTS, action.payload)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  if (element) {
    yield put({
      type: Constant.ON_CREATE_FORM_SUBMIT_SUCCEEDED,
      payload: element,
    });
  }
}
function* onModalEdited(action) {
  const httpStatus = yield call(() => {
    const {category, title, owner, status, priority} = action.payload;
    return axios.put(config.API_SERVER_TODOELEMENTS + action.payload._id, {category, title, owner, status, priority})
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  if (httpStatus === Constant.HTTP_STATUS_200) {
    yield put({
      type: Constant.ON_MODAL_EDIT_SUCCEEDED,
      payload: action.payload,
    });
  }
}
function* onElementDeleted(action) {
  const status = yield call(() => {
    return axios.delete(config.API_SERVER_TODOELEMENTS + action.payload._id)
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  if (status === Constant.HTTP_STATUS_200) {
    yield put({
      type: Constant.ON_ELEMENT_ITEM_DELETE_SUCCEEDED,
      payload: action.payload
    });
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeLatest(Constant.ON_ELEMENT_LIST_INIT, fetchElementList);
  yield takeEvery(Constant.ON_CREATE_FORM_SUBMIT, onElementCreated);
  yield takeEvery(Constant.ON_MODAL_EDIT, onModalEdited);
  yield takeEvery(Constant.ON_ELEMENT_ITEM_DELETE, onElementDeleted);
}

export default rootSaga;
