import { combineReducers } from 'redux';
import { newPost } from './newPostReducer';

const rootReducer = combineReducers({
  newPost,
});

export default rootReducer;
