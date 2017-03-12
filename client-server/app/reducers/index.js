import { combineReducers } from 'redux';
import elementList from './elementList';
import loadingFinished from './loadingFinished';

const rootReducer = combineReducers({
  elementList,
  loadingFinished
});

export default rootReducer;
