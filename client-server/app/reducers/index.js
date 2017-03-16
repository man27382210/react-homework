import { combineReducers } from 'redux';
import elementList from './elementList';
import modalDisplay from './modalDisplay';

const rootReducer = combineReducers({
  elementList,
  modalDisplay
});

export default rootReducer;
