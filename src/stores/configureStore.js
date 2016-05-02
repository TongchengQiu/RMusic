import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};
    for (const i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  },
});

const createStoreWithMiddleware = applyMiddleware(
  thunk, // 允许我们 dispatch() 函数
  logger // 一个很便捷的 middleware，用来打印 action 日志
)(createStore);

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
