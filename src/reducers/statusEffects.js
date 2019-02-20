import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED } from '../actions/tired';

const initialStatusEffects = [];

const isBleeding = state => state.find(effect => effect.type === BLEED_OUT);
const isTired = state => state.find(effect => effect.type === FEEL_TIRED);

const statusEffects = (state = initialStatusEffects, action) => {
  switch (action.type) {
  // update the array of status effects to record the new effect:
  // if already applied, do nothing; otherwise, apply action
    case BLEED_OUT:
      return isBleeding(state) ? state : [...state, action];
    case FEEL_TIRED:
      return isTired(state) ? state : [...state, action];
    default: return state;
  }
};

export default statusEffects;
