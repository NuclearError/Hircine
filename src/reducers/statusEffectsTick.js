import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';

// This came from the status effects file. TODO: abstract this somewhere else
const isBleeding = effects => effects.find(effect => effect.type === BLEED_OUT) || { amount: 0 };

const statusEffectsTick = (state, action) => {
  if (action.type !== TICK) {
    return state;
  }
  return {
    ...state,
    stats: {
      ...state.stats,
      health: Math.max(state.stats.health - isBleeding(state.statusEffects).amount, 0),
    },
  };
};

export default statusEffectsTick;
