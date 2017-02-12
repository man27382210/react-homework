import Constant from '../common/constant';

export function onCreateFormSubmit(element) {
  return ({
    type: Constant.ON_CREATE_FORM_SUBMIT,
    payload: {
      ...element
    },
  });
}

export function onModalEdit(element) {
  console.log('onModalEdit');
  return ({
    type: Constant.ON_MODAL_EDIT,
    payload: element,
  });
}

export function onElementItemEdit(element) {
  console.log('onElementItemEdit');
  return ({
    type: Constant.ON_ELEMENT_ITEM_EDIT,
    payload: element,
  });
}
