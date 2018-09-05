import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Sky from './components/Sky';
import Player from './components/Player';

// Actions, reducers and stores are vanilla Redux things (unrelated to React)
// Connect is a redux-react thing for tying components into Redux's data
// The final main piece is Provider, which is a React component from redux-react that handles the magic that provides the store to connected components
// We give it a store, which is made using `createStore` (vanilla Redux), which we pass our rootReducer
// the store needs to know about the reducers (since they're what handles incoming actions)
// it doesn't need to know about actions (since they're individual things that get raised on the fly)
// notice we also don't tell it an initial state; that's because the initial state of a store is just all empty
// which is why we do (state = blah, action) in our reducers; they'll see undefined for the state initially
// so whatever default they assume when state is undefined is effectively the initialState

// might want to move the Provider + store out even further to index rather than app.
const store = createStore(rootReducer);

// TODO either write as a functional component
// or find a reason to keep it as a class
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
