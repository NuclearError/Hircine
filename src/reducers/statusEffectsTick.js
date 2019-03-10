import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED, FEEL_WIRED } from '../actions/tired';
import { BE_STARVING, FEEL_WELLFED } from '../actions/starving';

// TODO: duped from stats
const clamp = value => Math.max(Math.min(value, 100), 0);

const adjustmentsByEffect = {
  [BLEED_OUT]: { stat: 'health', increase: false },
  [FEEL_TIRED]: { stat: 'energy', increase: false },
  [FEEL_WIRED]: { stat: 'energy', increase: true },
  [BE_STARVING]: { stat: 'nourishment', increase: false },
  [FEEL_WELLFED]: { stat: 'nourishment', increase: true },
};

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
    return state;
  }

  return {
    ...state,
    stats: state.statusEffects.reduce(statsWithEffectUpdate, state.stats),
  };
};

export default statusEffectsTick;
