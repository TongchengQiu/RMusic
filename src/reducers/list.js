import { List, Map } from 'immutable';
import * as constants from '../constants';

const initialState = new Map({
  allList: new List(),
  myList: new List(),
  form: 'my',
  index: 0,
  isGetAlling: false,
  isGetMying: false,
  allError: '',
  myError: ''
});

function list(state = initialState, action) {
  switch (action.type) {

    // all list
    case constants.GET_ALL_LIST_ING:
      return state.set('isGetAlling', true).delete('allError');

    case constants.GET_ALL_LIST_SUCCESS: {
      let allList = state.get('allList');
      action.results.forEach(r => {
        allList = allList.push(r);
      });
      return state.set('isGetAlling', false).set('allList', allList);
    }

    case constants.GET_ALL_LIST_FAILED:
      return state.set('isGetAlling', false).set('allError', action.error);

    // my list
    case constants.GET_MY_LIST_ING:
      return state.set('isGetMying', true).delete('myError');

    case constants.GET_MY_LIST_SUCCESS: {
      let myList = state.get('myList');
      action.results.forEach(r => {
        myList = myList.push(r);
      });
      return state.set('isGetMying', false).set('myList', myList);
    }

    case constants.GET_MY_LIST_FAILED:
      return state.set('isGetMying', false).set('myError', action.error);

    // change music
    case constants.SET_LIST_FORM:
      return state.set('form', action.form);

    case constants.SET_LIST_INDEX:
      return state.set('index', action.index);

    // default
    default:
      return state;
  }
}

export default list;
