import Constant from '../common/constant';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as Api from './api';

export function* fetchElementList() {
  const elementList = yield call(Api.getTodoElements);

  yield put({
    type: Constant.ELEMENT_LIST_FETCH_SUCCEEDED,
    payload: elementList,
  });
}
export function* onElementCreated(action) {
  const element = yield call(Api.postTodoElements, action);
  if (element) {
    yield put({
      type: Constant.ON_CREATE_FORM_SUBMIT_SUCCEEDED,
      payload: element,
    });
  }
}
export function* onModalEdited(action) {
  const httpStatus = yield call(Api.putTodoElement, action);

  if (httpStatus === Constant.HTTP_STATUS_200) {
    yield put({
      type: Constant.ON_MODAL_EDIT_SUCCEEDED,
      payload: action.payload,
    });
  }
}
export function* onElementDeleted(action) {
  const status = yield call(Api.deleteTodoElement, action);

  if (status === Constant.HTTP_STATUS_200) {
    yield put({
      type: Constant.ON_ELEMENT_ITEM_DELETE_SUCCEEDED,
      payload: action.payload
    });
  }
}

/*
  Starts rootSaga
*/
function* rootSaga() {
  yield takeLatest(Constant.ON_ELEMENT_LIST_INIT, fetchElementList);
  yield takeEvery(Constant.ON_CREATE_FORM_SUBMIT, onElementCreated);
  yield takeEvery(Constant.ON_MODAL_EDIT, onModalEdited);
  yield takeEvery(Constant.ON_ELEMENT_ITEM_DELETE, onElementDeleted);
}

export default rootSaga;
