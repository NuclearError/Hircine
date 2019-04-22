import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { connect } from 'react-redux';

import { takeDamage, healDamage } from '../../actions/health';
import { eat } from '../../actions/nourishment';
import { bleedOut } from '../../actions/bleeding';
import { feelTired, feelWired } from '../../actions/tired';
import { beStarving, feelWellfed } from '../../actions/starving';
import { tick } from '../../actions/tick';

import StatDisplay from './StatDisplay';
import EffectsDisplay from './EffectsDisplay';

const statBox = css`
  border: 2px solid;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;

class StatBox extends Component {
  constructor(props) {
    super(props);

    // TODO: refactor as functional component if needed
    this.state = {};

    /*
    this.damageHandler = this.damageHandler.bind(this);
    this.tickHandler = this.tickHandler.bind(this);
    this.bleedHandler = this.bleedHandler.bind(this);
    this.tiredHandler = this.tiredHandler.bind(this);
    */
    this.bleedHandler = this.bleedHandler.bind(this);
    this.hungerHandler = this.hungerHandler.bind(this);
    this.eatHandler = this.eatHandler.bind(this);
    this.healHandler = this.healHandler.bind(this);
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE
  /*
  damageHandler() {
    this.props.takeDamage(15);
  }

  tickHandler() {
    this.props.tick();
  }

  tiredHandler() {
    this.props.feelTired(10);
  }
  */

  bleedHandler() {
    this.props.bleedOut(5);
  }

  hungerHandler() {
    this.props.beStarving(2);
  }

  eatHandler() {
    const food = { nourishment: 15 };
    this.props.eat(food);
  }

  healHandler() {
    this.props.healDamage(15);
  }

  render() {
    return (
      <section className={cx(statBox, css`border-color: ${this.props.zeroHealth ? 'red' : 'black'}`)}>
        {
          this.props.currentEffects.length
          ? <EffectsDisplay currentEffects={this.props.currentEffects} />
          : null
        }
        <StatDisplay statType="health" statValue={this.props.health} />
        <StatDisplay statType="energy" statValue={this.props.energy} />
        <StatDisplay statType="hydration" statValue={this.props.hydration} />
        <StatDisplay statType="nourishment" statValue={this.props.nourishment} />
        <StatDisplay statType="comfort" statValue={this.props.comfort} />
        <StatDisplay statType="spirit" statValue={this.props.spirit} />

        <button onClick={this.bleedHandler}>Apply Bleed</button>
        <button onClick={this.hungerHandler}>Apply Starvation</button>
        <button onClick={this.healHandler}>Heal</button>
        <button onClick={this.eatHandler}>Eat Food</button>

      </section>
    );
  }
}

// no default values for individual stats; that's what the initialState is for
StatBox.defaultProps = {};

StatBox.propTypes = {
  currentEffects: PropTypes.array.isRequired,
  health: PropTypes.number.isRequired,
  hydration: PropTypes.number.isRequired,
  nourishment: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  comfort: PropTypes.number.isRequired,
  spirit: PropTypes.number.isRequired,
  healDamage: PropTypes.func.isRequired,
  takeDamage: PropTypes.func.isRequired,
  zeroHealth: PropTypes.bool.isRequired,
  bleedOut: PropTypes.func.isRequired,
  feelTired: PropTypes.func.isRequired,
  feelWired: PropTypes.func.isRequired,
  beStarving: PropTypes.func.isRequired,
  feelWellfed: PropTypes.func.isRequired,
  eat: PropTypes.func.isRequired,
  tick: PropTypes.func.isRequired,
};

// This func receives the ENTIRE global state,
// and outputs an object that is passed to your component as props
const mapStateToProps = state => ({
  currentEffects: state.statusEffects,
  health: state.stats.health,
  hydration: state.stats.hydration,
  nourishment: state.stats.nourishment,
  energy: state.stats.energy,
  comfort: state.stats.comfort,
  spirit: state.stats.spirit,
  // if you really wanna do what you've written then I'd say it's a computed value from the state,
  // that only this component needs, so it goes HERE
  zeroHealth: state.stats.health <= 0,
  // but imo you don't even do that, you just use `health <= 0 ? blah` both are options, up to you
  // if it was more complex, I'd still just have const zeroHealth = health <= 0 in render()
  // the main distinction, to my eyes, is what the component conceptually looks like;
  // what you've written here is a component which takes both a health prop and a zeroHealth prop
  // putting Redux aside, that's weird to me just from a React perspective
  // and when you get to testing components, what you'll often do is avoid Redux faffing by
  // exporting the unwrapped StatBox itself as well? and testing that. That helps give a distinction
  // between things that you're doing to translate Redux to your comp, vs things your comp does.
  // Imo this is the latter (and as a general rule you want to do as little as possible in mapState)
});

// This func receives the magical `dispatch` func that tells Redux to raise an action
// We import any action creators we care about (in this case `takeDamage`), and in here we create a
// function that, when called with an amount, dispatches a `takeDamage` action with that amount
// React then exposes that function to our component via props.
const mapDispatchToProps = dispatch => ({
  takeDamage: amount => dispatch(takeDamage(amount)),
  // ^ prop name in component       ^ action creator
  healDamage: amount => dispatch(healDamage(amount)),
  bleedOut: amount => dispatch(bleedOut(amount)),
  feelTired: amount => dispatch(feelTired(amount)),
  feelWired: amount => dispatch(feelWired(amount)),
  beStarving: amount => dispatch(beStarving(amount)),
  feelWellfed: amount => dispatch(feelWellfed(amount)),
  eat: amount => dispatch(eat(amount)),
  tick: () => dispatch(tick()),
});

// the way Redux actually gives state to your component (and allows it to fire actions) is `connect`
// first arg (that you'll normally need) is a function that maps the state to the component props
// (because your global structure and internal structure probably want to be different shapes)
// mainly that mapping will be ignoring the piles of state your component dgaf about
// the second argument (which you won't typically need as much) is about providing actions to the
// component to use
// then connect returns a function that you call on your component to wrap it (so it gets all the
// Redux stuff we just mapped)
export default connect(mapStateToProps, mapDispatchToProps)(StatBox);
