import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED } from '../actions/tired';

// This came from the status effects file. TODO: abstract this somewhere else
const isBleeding = effects => effects.find(effect => effect.type === BLEED_OUT) || { amount: 0 };
const isTired = effects => effects.find(effect => effect.type === FEEL_TIRED) || { amount: 0 };

const statusEffectsTick = (state, action) => {
  if (action.type !== TICK) {
    return state;
  }
  return {
    ...state,
    stats: {
      ...state.stats,
      health: Math.max(state.stats.health - isBleeding(state.statusEffects).amount, 0),
      energy: Math.max(state.stats.energy - isTired(state.statusEffects).amount, 0),
    },
  };
};

export default statusEffectsTick;
