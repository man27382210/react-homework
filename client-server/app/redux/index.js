import { combineReducers } from 'redux';
import products from './modules/products';
import activateModal from './modules/activateModal';

const App = combineReducers({
  products,
  activateModal
});

export default App;
