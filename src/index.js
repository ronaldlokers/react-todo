import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

import './styles/App.css';

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <App {...this.props} />} />
        <Route path="/filter/:filter?" render={() => <App {...this.props} />} />
      </Switch>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

registerServiceWorker();
