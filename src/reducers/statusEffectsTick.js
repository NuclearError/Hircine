import _ from 'lodash';

import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED, FEEL_WIRED } from '../actions/tired';
import { BE_STARVING, FEEL_WELLFED } from '../actions/starving';

// duped from stats
const clamp = value => Math.max(Math.min(value, 100), 0);

const adjustmentsByEffect = {
  // Debuffs
  [BLEED_OUT]: {
    stat: 'health',
    buff: false,
    removedBy: 'HEAL_DAMAGE',
  },
  [FEEL_TIRED]: {
    stat: 'spirit',
    buff: false,
    removedBy: 'GAIN_ENERGY',
    prerequisite: 'energy',
  },
  [BE_STARVING]: {
    stat: 'energy',
    buff: false,
    removedBy: 'LOSE_HUNGER',
    prerequisite: 'nourishment',
  },

  // Buffs
  [FEEL_WIRED]: {
    stat: 'spirit',
    buff: true,
    removedBy: 'LOSE_SPIRIT',
    prerequisite: 'energy',
  },
  [FEEL_WELLFED]: {
    stat: 'energy',
    buff: true,
    removedBy: 'GAIN_HUNGER',
    prerequisite: 'nourishment',
  },
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

  const amount = adjustment.buff ? effect.amount : -effect.amount;
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
