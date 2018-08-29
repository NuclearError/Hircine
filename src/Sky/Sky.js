import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const sky = css`
  width: inherit;
  height: inherit;
  border: 1px solid red;
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
      visible: this.props.visible,
    };

    // METHOD BINDINGS HERE
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE

  render() {
    if (this.state.visible) {
      return (
        <div className={cx(sky,dayTime)}>
          Sky bitches
        </div>
      );
    } return null;
  }
}

Sky.defaultProps = {
  visible: false,
};

Sky.propTypes = {
  visible: PropTypes.bool,
};

export default Sky;
