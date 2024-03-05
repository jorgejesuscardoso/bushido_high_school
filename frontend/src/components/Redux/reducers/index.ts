import { combineReducers } from 'redux';
import { toggleMenu } from './handleMenus';

const rootReducer = combineReducers({
  toggleMenu: toggleMenu,
});

export default rootReducer;
