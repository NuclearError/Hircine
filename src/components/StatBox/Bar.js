import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const BarStyles = css`
  margin: 0 5px 0 0;
  width: 100%;
  height: 15px;
  border: 2px solid black;
  background: none;
  background-color: transparent;
  position: relative;
  top: 4px;

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

const StatText = css`
  margin: 0;
  padding: 0;
  font-family: Baskerville,"Baskerville Old Face",Garamond,serif;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  position: relative;
  top: 3px;
`;

const Bar = ({ value }) => (
  <React.Fragment>
    <progress className={BarStyles} max="100" value={value} />
    <h3 className={StatText}>
      {Math.round(value)}%
    </h3>
  </React.Fragment>
);

Bar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Bar;
