import { TICK } from '../actions/tick';

const playerTick = (state, action) => {
  if (action.type !== TICK) {
    return state;
  }
  return {
    ...state,
    stats: {
      ...state.stats,
      hydration: Math.max(state.stats.hydration - 1, 0),
      nourishment: Math.max(state.stats.nourishment - 1, 0),
      energy: Math.max(state.stats.energy - 1, 0),
    },
  };
};

export default playerTick;
