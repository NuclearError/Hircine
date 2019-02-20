import { TAKE_DAMAGE, HEAL_DAMAGE } from '../actions/health';
import { HYDRATE, DEHYDRATE } from '../actions/hydration';
import initialPlayerStats from './initialPlayerStats';

// TODO update babel etc

const stats = (state = initialPlayerStats, action) => {
  switch (action.type) {
    case TAKE_DAMAGE:
      return {
        ...state,
        health: Math.max(state.health - action.amount, 0),
      };
    case HEAL_DAMAGE:
      return {
        ...state,
        health: Math.max(state.health + action.amount, 100),
      };
    case HYDRATE:
      return {
        ...state,
        hydration: Math.max(state.hydration + action.amount, 100),
      };
    case DEHYDRATE:
      return {
        ...state,
        hydration: Math.max(state.hydration - action.amount, 0),
      };
    default: return state;
  }
};

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
