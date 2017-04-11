// constants
const SET_MODAL_DISPLAY = 'SET_MODAL_DISPLAY';
const CLOSE_MODAL = 'CLOSE_MODAL';

// actions
export const showModal = (modalName, itemId) => ({
  type: SET_MODAL_DISPLAY,
  modalName,
  itemId
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const actions = {
  showModal,
  closeModal
};

// reducers
const initialState = {
  modal: null,
  itemId: null
};

const activateModal = (state = initialState, action) => {
  switch (action.type) {
  case SET_MODAL_DISPLAY:
    return {
      ...state,
      modal: action.modalName,
      itemId: action.itemId
    };
  case CLOSE_MODAL:
    return initialState;
  default:
    return state;
  }
};

export default activateModal;
