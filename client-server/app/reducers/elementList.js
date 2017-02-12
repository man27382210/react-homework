import constant from '../common/constant';

const defaultValue = [{
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
}];

export default (state =  defaultValue, action) => {
  switch (action.type) {
  case constant.ON_CREATE_FORM_SUBMIT:
    const newArray = [...state];
    newArray.push(action.payload);
    return (newArray);
  default:
    return state;
  }
};
