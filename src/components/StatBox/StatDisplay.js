import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import theme from '../../theme';
import Icon from './Icon';
import Bar from './Bar';

const DisplayBoxStyles = css`
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 0;
  display: inline-block;
  width: 50%;

  &:nth-child(odd) {
    background: #ddd;
  }
  &:nth-child(even) {
    background: #efefef;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 50%;
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    width: 33%;
  }
  @media (min-width: ${theme.breakpoints.xl}px) {
    flex: 1;
    width: auto;
  }
`;

const ContainerStyles = css`
  display: inline-block;
  margin: 0;
  padding: 0;
  vertical-align: top;
`;

const IconContainerStyles = css`
  ${ContainerStyles}
  padding-right: 5px;
  font-size: 20px;
  width: 20%;
  float: left;
  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 15%;
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    width: 20%;
  }
  @media (min-width: ${theme.breakpoints.xl}px) {
    width: 25%;
  }
`;

const BarContainerStyles = css`
  ${ContainerStyles}
  float: right;
  text-align: center;
  width: 80%;
  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 85%;
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    width: 80%;
  }
  @media (min-width: ${theme.breakpoints.xl}px) {
    width: 75%;
  }
`;

const StatDisplay = ({ statType, statValue }) => (
  <div className={DisplayBoxStyles}>
    <div className={IconContainerStyles}>
      <Icon type={statType} />
    </div>
    <div className={BarContainerStyles}>
      <Bar value={statValue} />
    </div>
  </div>
);

StatDisplay.propTypes = {
  statType: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};

export default StatDisplay;
