import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const path = 'src/assets/images/';

// TODO: get SVG images working
const Icon = ({ type }) => {
  const svgString = `${path}${type}.svg`;
  const pngString = `${path}${type}.png`;

  return (
    <picture>
      {/* <source srcSet={svgString} type="image/svg+xml" /> */}
      <img src={pngString} alt={`Player ${type}`} />
    </picture>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
