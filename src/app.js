import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Sky from './components/Sky';
import Player from './components/Player'; // TODO: rename to 'statbox'

// TODO: consider moving the Provider + store out even further to index rather than app.
const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello World Hircine</h1>
          <Sky dayTime />
          <Player />
        </div>
      </Provider>
    );
  }
}
