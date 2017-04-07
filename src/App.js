import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { settings } from './utils/settings';

import Home from './components/Home/Home';
import Page from './components/shared/Page';
import NotFound from './components/shared/NotFound';

import sagas from './sagas';
import rootReducer from './reducers/rootReducer';

import './index.styl';

const sagaMiddleware = createSagaMiddleware();

const middleware = ((middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      return compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }
  return applyMiddleware(...middlewares);
})([sagaMiddleware]);

const store = createStore(rootReducer, {}, middleware);

sagaMiddleware.run(sagas);

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={`${settings.baseUrl}`} component={Page}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);
