import { TAKE_DAMAGE, HEAL_DAMAGE } from '../actions/combat';

// this is just (state, action) => newState
// again, very vanilla, very easy to test
// tests are generally all of the form expect(reduce(initial, action)).toEqual(final)

// if this is an event handler, then the action is the event
const stats = (state = { health: 100, spirit: 0 }, action) => {
  // very common to switch on action type, because Redux actually calls EVERY reducer for EVERY
  // action
  switch (action.type) {
    // import the action type var so we can use it here to identify the actions we're reducing on
    case TAKE_DAMAGE:
      // the responsibility of a reducer, for a given action, is to return the state that results
      // from applying the action to the previous state
      // this can be more complex, but most are just
      // {
      //   ...state,
      //   someField: calcNewValueForField(state, action)
      // }
      // with the ...state standing in for "all the current stuff we're not changing", otherwise
      // you delete all your old data :3
      return {
        // Had to futz with babel + webpack config to get object spread to work, which you sort of
        // need to make reducers not read like ARSE.
        // You should update your babel stuff, it's a couple of years out of date, and isn't using
        // babel's new "let us worry about it".
        // One update and you won't have to worry about it again.
        // all this "babel-preset-es2015" noise just becomes "babel-preset-env", which just assumes
        // you want to compile all the latest ish to something reasonably compatible
        // and if you want control you can do stuff like ">95% of users" and it'll work out what
        // browsers that is and compile to target those
        ...state,
        health: state.health - action.amount,
      };
    case HEAL_DAMAGE:
      return {
        ...state,
        health: state.health + action.amount,
      };
    default: return state;
  }
};

// You'll probably want a "tick" action that is all the stuff that happens over time in your game?
// e.g. this will respond to tick by lowering a stat if it's dependent on stats that are 0/<50%

export default stats;

// the state={blah} is just a default value when state isn't provided (i.e. startup)
// you probably wouldn't want it specified here when things were more complex

// it's not uncommon to have a file that's just like "initialState.js"
// and this would be initialState.stats
// and then initial state might just itself import initialState/stats.js

// for loading I suspect what you'd do is take the same initial state, and have a loadGame reducer?
// and loadGame basically just does
// "(state, action) => if action.type is 'LOAD_GAME' return loadStateFromFile(action.file)"
