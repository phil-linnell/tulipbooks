import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

import reducers from './reducers';
import App from './containers/app';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.querySelector('.wrapper'));
