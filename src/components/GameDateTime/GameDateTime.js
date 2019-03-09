import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { minutes, hours, days } from '../../helpers/gameDateTime';

const GameDateTime = ({ ticks, year }) => (
  <React.Fragment>
    <p>Minutes: {minutes(ticks)}</p>
    <p>Hours: {hours(ticks)}</p>
    <p>Day: {days(ticks)}</p>
    <p>Year: {year}</p>
  </React.Fragment>
);

GameDateTime.propTypes = {
  ticks: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ticks: state.time.ticks,
  year: state.time.year,
});

export default connect(mapStateToProps)(GameDateTime);
