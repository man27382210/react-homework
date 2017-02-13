import constant from '../common/constant';

const defaultValue = [{
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
}];

export default (state =  defaultValue, action) => {
  let newArray = [];
  let index;
  switch (action.type) {
  case constant.ON_CREATE_FORM_SUBMIT:
    newArray = [...state];
    newArray.push(action.payload);
    return (newArray);
  case constant.ON_MODAL_EDIT:
    // edit element according to index
    index = action.payload.index;
    const editedElement = {...action.payload};

    // delete unnecessary attribute of index
    delete editedElement.index;
    newArray = [...state];
    newArray[index] = editedElement;
    return (newArray);
  case constant.ON_ELEMENT_ITEM_DELETE:
    index = action.payload.index;

    // remove element with specific index
    newArray = state.filter((value, i) => {
      return (i !== index);
    });
    return newArray;
  default:
    return state;
  }
};
