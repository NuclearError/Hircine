import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED } from '../actions/tired';

// TODO: duped from stats
const clamp = value => Math.max(Math.min(value, 100), 0);

const adjustmentsByEffect = {
  [BLEED_OUT]: { stat: 'health', increase: false },
  [FEEL_TIRED]: { stat: 'energy', increase: false },
};

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
