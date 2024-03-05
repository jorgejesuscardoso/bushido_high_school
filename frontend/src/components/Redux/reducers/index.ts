import { combineReducers } from 'redux';
import { newPost } from './newPostReducer';
import { toggleMenu } from './handleMenus';

const rootReducer = combineReducers({
  newPost,
  homeMenuNav: toggleMenu
});

export default rootReducer;
