import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const BarStyles = css`
  margin: 0 5px 0 0;
  width: 150px;
  height: 15px;
  border: 2px solid black;
  background: none;
  background-color: transparent;

  /* Firefox inner bar */
  &::-moz-progress-bar {
    background-color: #17AA8A;
  }

  /* Chrome bar background */
  &::-webkit-progress-bar {
    background: none;
    background-color: transparent;
  }

  /* Chrome inner bar */
  &::-webkit-progress-value {
    background-color: #17AA8A;
  }
`;

const Bar = ({ value }) => (
  <progress className={BarStyles} max="100" value={value} />
);

Bar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Bar;
