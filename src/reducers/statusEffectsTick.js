import { TICK } from '../actions/tick';
import { BLEED_OUT } from '../actions/bleeding';

// This came from the status effects file. TODO: abstract this somewhere else
const isBleeding = effects => effects.find(effect => effect.type === BLEED_OUT);

const statusEffectsTick = (state, action) => {
  if (action.type !== TICK) {
    return state;
  }
  return {
    ...state,
    stats: {
      ...state.stats,
      health: state.stats.health - isBleeding(state.statusEffects).amount, // handle case where there are no status effects!!!
    },
  };
};

export default statusEffectsTick;
