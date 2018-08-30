import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const StatText = css`
  margin: 0 0 5px;
  padding: 0;
  font-family: Baskerville,"Baskerville Old Face",Garamond,serif;
  font-weight: 300;
  font-size: 20px;
`;

const statBox = css`
  border: 1px solid black;
  padding: 15px;
`;

const penaltyModifier = 20;

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      health: this.props.health,
      hydration: this.props.hydration,
      nourishment: this.props.nourishment,
      energy: this.props.energy,
      comfort: this.props.comfort,
      spirit: this.props.spirit,
    };

    // METHOD BINDINGS HERE
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE

  zeroHandler() {
    if (this.state.health <= 0) {
      console.log('Noticed that health is at zero!');
      zeroHealthHandler();
    }
  }

  // TODO: refactor all these 'zero handlers' into one function that takes sensible args etc
  zeroHealthHandler() {
    console.log(`zero health logged ( state.health = ${this.state.health}). Player is dead!`);
  }

  zeroHydrationHandler() {
    console.log('zero hydration logged. Player loses health!');
    const newValue = this.state.health - penaltyModifier;
    this.setState({
      health: newValue,
    });
  }

  zeroNourishmentHandler() {
    console.log('zero nourishment logged. Player loses hydration!');
    const newValue = this.state.hydration - penaltyModifier;
    this.setState({
      hydration: newValue,
    });
  }

  zeroEnergyHandler() {
    console.log('zero energy logged. Player loses nourishment!');
    const newValue = this.state.nourishment - penaltyModifier;
    this.setState({
      nourishment: newValue,
    });
  }

  zeroComfortHandler() {
    console.log('zero comfort logged. Player loses energy!');
    const newValue = this.state.energy - penaltyModifier;
    this.setState({
      energy: newValue,
    });
  }

  zeroSpiritHandler() {
    console.log('zero spirit logged. Player loses comfort!');
    const newValue = this.state.comfort - penaltyModifier;
    this.setState({
      comfort: newValue,
    });
  }

  render() {
    return (
      <section className={statBox}>
        <h3 className={StatText}>Health: {this.state.health}</h3>
        <h3 className={StatText}>Hydration: {this.state.hydration}</h3>
        <h3 className={StatText}>Nourishment: {this.state.nourishment}</h3>
        <h3 className={StatText}>Energy: {this.state.energy}</h3>
        <h3 className={StatText}>Comfort: {this.state.comfort}</h3>
        <h3 className={StatText}>Spirit: {this.state.spirit}</h3>
      </section>
    );
  }
}

Player.defaultProps = {
  health: 100,
  hydration: 80,
  nourishment: 80,
  energy: 100,
  comfort: 40,
  spirit: 0,
};

Player.propTypes = {
  health: PropTypes.number,
  hydration: PropTypes.number,
  nourishment: PropTypes.number,
  energy: PropTypes.number,
  comfort: PropTypes.number,
  spirit: PropTypes.number,
};

export default Player;
