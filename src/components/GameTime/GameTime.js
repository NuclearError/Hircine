// var secondLoop = setInterval(incrementOneSecond, 500);
// import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tick } from '../../actions/tick';

function doATick() {
  console.log('doATick called');
  this.props.tick();
}

const GameTime = () => {
  console.log("Hello from GameTime");
  setInterval(doATick, 1000);
};

GameTime.propTypes = {
  tick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(tick()),
});

export default connect(mapDispatchToProps)(GameTime);
