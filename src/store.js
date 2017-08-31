import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// import the root reducer
import todoApp from './reducers';

export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
/* eslint-enable */

export default store;
