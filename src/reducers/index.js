import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import list from './list';

export default combineReducers({
  user,
  list,
  routing: routerReducer
});
