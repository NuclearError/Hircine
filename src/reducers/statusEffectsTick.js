import _ from 'lodash';

import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED, FEEL_WIRED } from '../actions/tired';
import { BE_STARVING, FEEL_WELLFED } from '../actions/starving';

// TODO: duped from stats
const clamp = value => Math.max(Math.min(value, 100), 0);

// consider making an array if you need to do find/filter on stats, eg. for checking the 'removedBy' value
const adjustmentsByEffect = {
  [BLEED_OUT]: { stat: 'health', increase: false, removedBy: 'HEAL_DAMAGE' },
  [FEEL_TIRED]: { stat: 'spirit', increase: false }, // removed by resting
  [BE_STARVING]: { stat: 'energy', increase: false, removedBy: 'LOSE_HUNGER' },

  [FEEL_WIRED]: { stat: 'spirit', increase: true, prerequisite: 'energy' }, // 100% energy required
  [FEEL_WELLFED]: { stat: 'energy', increase: true, prerequisite: 'nourishment' }, // 100% nourishment required
};

// Copied from statusEffects
const effectApplied = (state, type) => state.find(effect => effect.type === type);

/*
* Original stat manipulation, prior to refactoring, looked like this:
* const isTired = effects => effects.find(effect => effect.type === FEEL_TIRED) || { amount: 0 };
* energy: Math.max(state.stats.energy - isTired(state.statusEffects).amount, 0),
*/
function statsWithEffectUpdate(stats, effect) {
  const adjustment = adjustmentsByEffect[effect.type];

  // Skip effects that aren't simple stat adjustment
  if (!adjustment) {
    return stats;
  }

  const amount = adjustment.increase ? effect.amount : -effect.amount;
  const updatedValue = clamp(stats[adjustment.stat] + amount);
  return { ...stats, [adjustment.stat]: updatedValue };
}

const statusEffectsTick = (state, action) => {
  if (action.type !== TICK) {
    ////////////////////////////////////////////
    // this file is called "statusEffectsTick" but this bit of code is all about
    // what happens when an action occurs which is NOT a tick.
    // It's important but should it be its own file completely?
    const removableEffect = _.findKey(adjustmentsByEffect, { removedBy: action.type });
    if (removableEffect) {
      if (effectApplied(state.statusEffects, removableEffect)) {
        const thisEffect = effectApplied(state.statusEffects, removableEffect);
        const thisEffectIndex = state.statusEffects.indexOf(thisEffect);
        state.statusEffects.splice(thisEffectIndex, 1);
      }
    }
    ////////////////////////////////////////////
    return state;
  }
  return {
    ...state,
    stats: state.statusEffects.reduce(statsWithEffectUpdate, state.stats),
  };
};

export default statusEffectsTick;
