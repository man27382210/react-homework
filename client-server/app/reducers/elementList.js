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
  switch (action.type) {
  case constant.ON_CREATE_FORM_SUBMIT:
    newArray = [...state];
    newArray.push(action.payload);
    return (newArray);
  case constant.ON_MODAL_EDIT:
    // edit element according to index
    const index = action.payload.index;
    const editedElement = {...action.payload};

    // delete unnecessary attribute of index
    delete editedElement.index;
    newArray = [...state];
    newArray[index] = editedElement;
    return (newArray);
  default:
    return state;
  }
};
