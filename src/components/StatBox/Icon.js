import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const path = 'src/assets/images/';

const imgStyles = css`
  width: 100%;
`;

// TODO: get SVG images working
const Icon = ({ type }) => {
  // const svgString = `${path}${type}.svg`;
  const pngString = `${path}${type}.png`;

  return (
    <picture title={`${type}`}>
      {/* <source srcSet={svgString} type="image/svg+xml" /> */}
      <img className={imgStyles} src={pngString} alt={`${type}`} />
    </picture>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
