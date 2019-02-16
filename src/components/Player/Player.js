import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { connect } from 'react-redux';

import { takeDamage } from '../../actions/combat';

const StatText = css`
  margin: 0 0 5px;
  padding: 0;
  font-family: Baskerville,"Baskerville Old Face",Garamond,serif;
  font-weight: 300;
  font-size: 20px;
`;

// this is a classname, not a styled component :) so you can't do the props thing you have
// you either make it styled.section, or you move this inside the render method (and it's just ${props.zeroHealth })
const statBox = css`
  border: 2px solid;
  padding: 15px;
`;


// imo this should be in the reducers, not the actions
// because you'll probably use it by saying something like "each tick, any stats that get penalised are lowered by this amount"
// the "tick" would be the action, but the lowering would be something the reducer does in response to the tick action, imo?

// a lot of Reduxy peeps just move everything to Redux state rather than think about it, ja.
// it's up to you; if something is genuinely local to a component and nothing else will care, then it saves boilerplate to keep it local
const penaltyModifier = 20;

// TODO: rename to statbox
class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hydration: this.props.hydration,
      nourishment: this.props.nourishment,
      energy: this.props.energy,
      comfort: this.props.comfort,
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  // REACT LIFE CYCLE METHODS HERE

  // PRIVATE FUNCTIONS / EVENT HANDLERS HERE
  buttonClickHandler() {
    this.props.takeDamage(25);
  }

  render() {
    // health and spirit (aka the two I moved into Redux) are .props not .state now!
    // because to our *component* they're props, since Redux manages the state (and passes them in)
    return (
      <section className={cx(statBox, css`border-color: ${this.props.zeroHealth ? 'red' : 'black'}`)}>
        <h3 className={StatText}>Health: {this.props.health}</h3>
        <h3 className={StatText}>Hydration: {this.state.hydration}</h3>
        <h3 className={StatText}>Nourishment: {this.state.nourishment}</h3>
        <h3 className={StatText}>Energy: {this.state.energy}</h3>
        <h3 className={StatText}>Comfort: {this.state.comfort}</h3>
        <h3 className={StatText}>Spirit: {this.props.spirit}</h3>
        { this.props.zeroHealth ? null : <button onClick={this.buttonClickHandler}>KILLIT</button> }
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

// no default values for health/spirit; that's what the initialState is for
Player.defaultProps = {
  hydration: 80,
  nourishment: 80,
  energy: 100,
  comfort: 40,
};

// generally everything that's in Redux should be .isRequired, because either it's in Redux or it's
// not, and your code should know which
Player.propTypes = {
  health: PropTypes.number.isRequired,
  hydration: PropTypes.number,
  nourishment: PropTypes.number,
  energy: PropTypes.number,
  comfort: PropTypes.number,
  spirit: PropTypes.number.isRequired,
  takeDamage: PropTypes.func.isRequired,
  zeroHealth: PropTypes.bool.isRequired,
};

// This func receives the ENTIRE global state, and outputs an object that is passed to your
// component as props
const mapStateToProps = state => ({
  health: state.stats.health, // global state { stats: { health: ... } }, <Player health={...} />
  spirit: state.stats.spirit,
  // if you really wanna do what you've written then I'd say it's a computed value from the state, that only this component needs, so it goes HERE
  zeroHealth: state.stats.health <= 0,
  // but imo you don't even do that, you just use `health <= 0 ? blah` both are options, up to you
  // if it was more complex, I'd still just have const zeroHealth = health <= 0 in render()
  // the main distinction, to my eyes, is what the component conceptually looks like;
  // what you've written here is a component which takes both a health prop and a zeroHealth prop
  // putting Redux aside, that's weird to me just from a React perspective
  // and when you get to testing components, what you'll often do is avoid Redux faffing by
  // exporting the unwrapped Player itself as well? and testing that. That helps give a distinction
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
});

// the way Redux actually gives state to your component (and allows it to fire actions) is `connect`
// first arg (that you'll normally need) is a function that maps the state to the component props
// (because your global structure and internal structure probably want to be different shapes)
// mainly that mapping will be ignoring the piles of state your component dgaf about
// the second argument (which you won't typically need as much) is about providing actions to the
// component to use
// then connect returns a function that you call on your component to wrap it (so it gets all the
// Redux stuff we just mapped)
export default connect(mapStateToProps, mapDispatchToProps)(Player);
