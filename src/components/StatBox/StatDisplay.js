import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import Icon from './Icon';
import Bar from './Bar';

const DisplayBoxStyles = css`
  padding: 5px 10px;
  flex: 1;
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
  margin: 0 5px 0 0;
  padding: 0;
  display: inline-block;
  font-size: 20px;
  width: 32px;
  height: 32px;
`;

const StatText = css`
  margin: 0;
  padding: 0;
  font-family: Baskerville,"Baskerville Old Face",Garamond,serif;
  font-weight: 300;
  font-size: 18px;
  display: inline-block;
  position: relative;
  top: -2px;
`;

const StatDisplay = ({ statType, statValue }) => (
  <div className={DisplayBoxStyles}>
    <div className={IconContainerStyles}>
      <Icon type={statType}/>
    </div>
    <Bar value={statValue} />
    <h3 className={StatText}>
      {statValue}%
    </h3>

  </div>
);

StatDisplay.propTypes = {
  statType: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};

export default StatDisplay;
