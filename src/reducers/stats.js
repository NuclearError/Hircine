import { TAKE_DAMAGE, HEAL_DAMAGE } from '../actions/health';
import { HYDRATE, DEHYDRATE } from '../actions/hydration';
import { GAIN_HUNGER, LOSE_HUNGER } from '../actions/nourishment';
import initialPlayerStats from './initialPlayerStats';

/*
  High level action (e.g. "drink water") =>
  actionToAdjustments (e.g. "drink => hydration up by
  drink.value, bladderFullness up by drink.fullness") =>
  apply all adjustments to stats
*/

const adjustmentsByType = {
  [TAKE_DAMAGE]: { stat: 'health', increase: false },
  [HEAL_DAMAGE]: { stat: 'health', increase: true },
  [HYDRATE]: { stat: 'hydration', increase: true },
  [DEHYDRATE]: { stat: 'hydration', increase: false },
  [GAIN_HUNGER]: { stat: 'nourishment', increase: false },
  [LOSE_HUNGER]: { stat: 'nourishment', increase: true },
};

const clamp = value => Math.max(Math.min(value, 100), 0);

const stats = (state = initialPlayerStats, action) => {
  const adjustment = adjustmentsByType[action.type];
  if (!adjustment) {
    return state;
  }

  const oldValue = state[adjustment.stat];
  const change = adjustment.increase ? action.amount : -action.amount;

  return {
    ...state,
    [adjustment.stat]: clamp(oldValue + change),
  };
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
