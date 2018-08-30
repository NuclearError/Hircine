import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';

// TODO: Seasons, weather, time calculations

const sky = css`
  width: inherit;
  height: inherit;
`;

const dayTime = css`
  background-color: skyblue;
`;

const nightTime = css`
  background-color: indigo;
`;

class Sky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dayTime: this.props.dayTime,
    };

    // METHOD BINDINGS HERE
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE

  render() {
    return (
      <div
        className={cx(sky, this.state.dayTime ? dayTime : nightTime)}
      />
    );
  }
}

Sky.defaultProps = {
  dayTime: true,
};

Sky.propTypes = {
  dayTime: PropTypes.bool, // TODO: pass in "the time" and let sky.js decide on status re: day/night
};

export default Sky;
