import Constant from '../common/constant';
const INIT_STATE = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
  case Constant.ON_ELEMENT_ITEM_EDIT:
    return action.payload;
  default:
    return state;
  }
};


