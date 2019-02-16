import { TICK } from '../actions/tick';

const playerTick = (state, action) => {
  if (action.type !== TICK) {
    return state;
  }
  return {
    ...state,
    stats: {
      ...state.stats,
      hydration: state.stats.hydration - 1,
      nourishment: state.stats.nourishment - 1,
      energy: state.stats.energy - 1,
    },
  };
};

export default playerTick;
