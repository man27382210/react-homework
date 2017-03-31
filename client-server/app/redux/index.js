import { combineReducers } from 'redux';
import products from './modules/products';

const App = combineReducers({
  products
});

export default App;
