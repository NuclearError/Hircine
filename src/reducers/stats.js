import { TAKE_DAMAGE, HEAL_DAMAGE } from '../actions/combat';
import { HYDRATE, DEHYDRATE } from '../actions/hydration';
import initialPlayerStats from './initialPlayerStats';

const stats = (state = initialPlayerStats, action) => {
  switch (action.type) {
    case TAKE_DAMAGE:
      return {
        // TODO update babel etc
        ...state,
        health: state.health - action.amount,
      };
    case HEAL_DAMAGE:
      return {
        ...state,
        health: state.health + action.amount,
      };
    case HYDRATE:
      return {
        ...state,
        hydration: state.hydration + action.amount,
      };
    case DEHYDRATE:
      return {
        ...state,
        hydration: state.hydration - action.amount,
      };
    default: return state;
  }
};

// TODO: write a tick action

export default stats;

// TODO: set up initial state vs load state
// the state={blah} is just a default value when state isn't provided (i.e. startup)
// you probably wouldn't want it specified here when things were more complex

// it's not uncommon to have a file that's just like "initialState.js"
// and this would be initialState.stats
// and then initial state might just itself import initialState/stats.js

// for loading I suspect what you'd do is take the same initial state, and have a loadGame reducer?
// and loadGame basically just does
// "(state, action) => if action.type is 'LOAD_GAME' return loadStateFromFile(action.file)"
