import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const WrapperStyles = css`
    margin: 0 auto;
    min-width: 320px;
    max-width: 1024px;
    min-height: 25px;
    border: 6px double goldenrod;
`;

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };

    // METHOD BINDINGS HERE
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE

  render() {
    return (
      <section className={WrapperStyles}>
        {this.props.children}
      </section>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
