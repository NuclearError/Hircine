import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED, FEEL_WIRED } from '../actions/tired';
import { BE_STARVING, FEEL_WELLFED } from '../actions/starving';
import { LOSE_HUNGER } from '../actions/nourishment';

// TODO: duped from stats
const clamp = value => Math.max(Math.min(value, 100), 0);

// consider making an array if you need to do find/filter on stats, eg. for checking the 'removedBy' value
const adjustmentsByEffect = {
  [BLEED_OUT]: { stat: 'health', increase: false }, // removed by healing
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
    if (action.type === LOSE_HUNGER) {
      // TODO: make this logic generic for all actions / removedBy effects
      if (effectApplied(state.statusEffects, 'BE_STARVING')) {
        const thisEffect = effectApplied(state.statusEffects, 'BE_STARVING');
        state.statusEffects.splice(thisEffect);
      }
    }
    return state;
  }
  return {
    ...state,
    stats: state.statusEffects.reduce(statsWithEffectUpdate, state.stats),
  };
};

export default statusEffectsTick;
