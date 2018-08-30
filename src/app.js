import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Sky from './Sky';
import Player from './Player';

// TODO either write as a functional component
// or find a reason to keep it as a class
export default class App extends Component {
  render() {
    return (
      <React.fragment>
        <h1>Hello World Hircine</h1>
        <Sky dayTime />
        <Player />
      </React.fragment>
    );
  }
}
