import { BLEED_OUT } from '../actions/bleeding';

const initialStatusEffects = [];

const isBleeding = state => state.find(effect => effect.type === BLEED_OUT);

const statusEffects = (state = initialStatusEffects, action) => {
  switch (action.type) {
    case BLEED_OUT:
      // update the array of status effects to record the new effect
      return isBleeding(state) ? state : [...state, action];
    default: return state;
  }
};

export default statusEffects;
