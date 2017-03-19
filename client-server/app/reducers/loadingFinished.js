import Constant from '../common/constant';
const INIT_STATE = false;

export default (state = INIT_STATE, action) => {
  switch (action.type) {
  case Constant.ON_INIT_LOADING_FINISHED:
    return action.payload;
  default:
    return state;
  }
};


