import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Router history={browserHistory}>
            <Route path="/Home" component={Home} />
            <Route path="/transactions" component={Transactions} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
