import axios from 'axios';
import Constant from '../common/constant';
import config from '../common/config';

export function onElementListInit() {
  let elementList = [];
  elementList = axios.get(config.API_SERVER_TODOELEMENTS)
    .then((res) => {
      console.log(res.data);
      elementList = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return ({
    type: Constant.ON_ELEMENT_LIST_INIT,
    payload: elementList,
  });
}
export function onCreateFormSubmit(element) {
  // send post api to api server and save element to DB

  // return obj after saving successfully.
  // or send warning message.
  return ({
    type: Constant.ON_CREATE_FORM_SUBMIT,
    payload: {
      ...element
    },
  });
}

export function onModalEdit(element) {
  return ({
    type: Constant.ON_MODAL_EDIT,
    payload: element,
  });
}

export function onElementItemEdit(element) {
  return ({
    type: Constant.ON_ELEMENT_ITEM_EDIT,
    payload: element,
  });
}
export function onElementItemDelete(element) {
  return ({
    type: Constant.ON_ELEMENT_ITEM_DELETE,
    payload: element,
  });
}
