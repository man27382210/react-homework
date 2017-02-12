import Constant from '../common/constant';

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
