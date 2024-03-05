import { combineReducers } from 'redux';
import { toggleMenu } from './handleMenus';

const rootReducer = combineReducers({
  toggleMenu,
});

export default rootReducer;
