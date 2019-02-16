import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const DisplayBoxStyles = css`
  padding: 5px 15px;
  display: inline-block;
  border: 1px solid #ccc;
  font-size: 0;

  &:nth-child(odd) {
    background: #ddd;
  }
  &:nth-child(even) {
    background: #efefef;
  }
`;

const IconContainerStyles = css`
  padding: 0 5px 0 0;
  border: 1px solid blue;
  display: inline-block;
  font-size: 20px;
`;

const StatText = css`
  margin: 0;
  padding: 0;
  font-family: Baskerville,"Baskerville Old Face",Garamond,serif;
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
`;

const StatDisplay = ({ statType, statValue }) => (
  <div className={DisplayBoxStyles}>
    <div className={IconContainerStyles}>
      {statType} :
    </div>
    <h3 className={StatText}>
      {statValue}
    </h3>
  </div>
);

StatDisplay.propTypes = {
  statType: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};

export default StatDisplay;
