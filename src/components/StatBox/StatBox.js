import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { connect } from 'react-redux';

import { takeDamage } from '../../actions/combat';
import { bleedOut } from '../../actions/bleeding';
import { tick } from '../../actions/tick';

import StatDisplay from './StatDisplay';

const StatText = css`
  margin: 0;
  padding: 5px 15px;
  font-family: Baskerville,"Baskerville Old Face",Garamond,serif;
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
  border: 1px solid #ccc;

  &:nth-child(odd) {
    background: #ddd;
  }
  &:nth-child(even) {
    background: #efefef;
  }
`;

// this is a classname, not a styled component :) so you can't do the props thing you have
// you either make it styled.section, or you move this inside the render method (and it's just ${props.zeroHealth })
const statBox = css`
  border: 2px solid;
  padding: 15px;
`;


// imo this should be in the reducers, not the actions
// because you'll probably use it by saying something like "each tick,
// any stats that get penalised are lowered by this amount"
// the "tick" would be the action, but the lowering would be something the reducer
// does in response to the tick action, imo?

class StatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.tickHandler = this.tickHandler.bind(this);
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE
  buttonClickHandler() {
    this.props.takeDamage(5);
    this.props.bleedOut(10);
  }

  tickHandler() {
    this.props.tick();
  }

  render() {
    return (
      <section className={cx(statBox, css`border-color: ${this.props.zeroHealth ? 'red' : 'black'}`)}>
        <h3 className={StatText}>Health: {this.props.health}</h3>
        <h3 className={StatText}>Hydration: {this.props.hydration}</h3>
        <h3 className={StatText}>Nourishment: {this.props.nourishment}</h3>
        <h3 className={StatText}>Energy: {this.props.energy}</h3>
        <h3 className={StatText}>Comfort: {this.props.comfort}</h3>
        <h3 className={StatText}>Spirit: {this.props.spirit}</h3>
        <StatDisplay statType="nourishment" statValue={this.props.nourishment} />
        { this.props.zeroHealth ? null : <button onClick={this.buttonClickHandler}>KILLIT</button> }
        <button onClick={this.tickHandler}>TICK</button>
      </section>
    );
  }
}

// the other conceptual distinction that Redux's abstractions give, which might be good for a game,
// is about what's possible in your data itself? for negative health, it could be that your
// components (UI logic) don't allow you to be hit when you're at zero (cuz ur ded already)
// but if being below zero is *actually impossible* then you can enforce that by having the
// reducer set health to Math.max(stat.stats.health - action.amount, 0) (i.e. not set a health
// below zero) the latter means you keep throwing damage at the player all you like, but the rules
// of the game don't permit negative HP

// no default values for individual stats; that's what the initialState is for
StatBox.defaultProps = {};

// generally everything that's in Redux should be .isRequired, because either it's in Redux or it's
// not, and your code should know which
StatBox.propTypes = {
  health: PropTypes.number.isRequired,
  hydration: PropTypes.number.isRequired,
  nourishment: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  comfort: PropTypes.number.isRequired,
  spirit: PropTypes.number.isRequired,
  takeDamage: PropTypes.func.isRequired,
  zeroHealth: PropTypes.bool.isRequired,
  bleedOut: PropTypes.func.isRequired,
  tick: PropTypes.func.isRequired,
};

// This func receives the ENTIRE global state, and outputs an object that is passed to your
// component as props
const mapStateToProps = state => ({
  health: state.stats.health, // global state { stats: { health: ... } }, <StatBox health={...} />
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
  bleedOut: amount => dispatch(bleedOut(amount)),
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
