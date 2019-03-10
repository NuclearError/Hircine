import { BLEED_OUT } from '../actions/bleeding';
import { FEEL_TIRED, FEEL_WIRED } from '../actions/tired';

const singleStackEffects = [BLEED_OUT, FEEL_TIRED, FEEL_WIRED];
const isSingleStackEffect = effect => singleStackEffects.includes(effect);

const multiStackEffects = [];
const isMultiStackEffect = effect => multiStackEffects.includes(effect);

const initialStatusEffects = [];

const effectApplied = (state, type) => state.find(effect => effect.type === type);

const statusEffects = (state = initialStatusEffects, action) => {
  const singleStack = isSingleStackEffect(action.type);
  const multiStack = isMultiStackEffect(action.type);
  const isEffect = singleStack || multiStack;

  if (!isEffect || (singleStack && effectApplied(state, action.type))) {
    return state;
  }

  return [...state, action];
};

export default statusEffects;
