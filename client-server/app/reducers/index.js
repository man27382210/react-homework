import { combineReducers } from 'redux';
import elementList from './elementList';
import modalDisplay from './modalDisplay';
import loadingFinished from './loadingFinished';

const rootReducer = combineReducers({
  elementList,
  modalDisplay,
  loadingFinished
});

export default rootReducer;
