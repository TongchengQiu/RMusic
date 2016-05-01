import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import roucers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      roucers,
      routing: routerReducer
    }),
    initialState
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = roucers;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
