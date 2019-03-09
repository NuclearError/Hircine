// var secondLoop = setInterval(incrementOneSecond, 500);
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tick } from '../../actions/tick';

class GameTick extends Component {
  constructor(props) {
    super(props);
    this.tickHandler = this.tickHandler.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tickHandler, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tickHandler() {
    this.props.tick();
  }

  render() {
    return null;
  }
}

GameTick.propTypes = {
  tick: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(tick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameTick);
