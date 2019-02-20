import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// import theme from '../../theme';
import Icon from './Icon';

const containerStyles = css`
  margin: 0 0 15px;
  padding: 5px;
  display: inline-block;
  width: 100%;
  border: 1px solid #ccc;
  font-size: 0;
`;

const iconContainerStyles = css`
  display: inline-block;
  margin: 0;
  padding: 0;
  vertical-align: top;
  padding-right: 5px;
  font-size: 20px;
  width: 32px;
  height: 32px;
`;

const EffectsDisplay = ({ currentEffects }) => (
  <div className={containerStyles}>
    {currentEffects.map(effect =>
      <div className={iconContainerStyles}><Icon type={effect.label} /></div>)
    }
  </div>
);

EffectsDisplay.propTypes = {
  currentEffects: PropTypes.array.isRequired,
};

export default EffectsDisplay;
