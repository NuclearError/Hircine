import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loop, Stage } from 'react-game-kit';

export default class App extends Component {

  render() {
    return (
      <Loop>
        <Stage>
          // Game specific components go here
        </Stage>
      </Loop>
    );
  }

}
