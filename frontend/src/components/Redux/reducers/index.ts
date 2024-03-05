import { combineReducers } from 'redux';
import { newPost, toggleMenu } from './newPostReducer';

const rootReducer = combineReducers({
  newPost,
  toggleMenu: toggleMenu,
});

export default rootReducer;
