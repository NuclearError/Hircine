import { TICK } from '../actions/tick';
import { initialYear, ticksInYear } from '../helpers/gameDateTime'

const initialState = {
  ticks: 0,
  year: initialYear,
};

const time = (state = initialState, action) => {
  if (action.type !== TICK) {
    return state;
  }

  const newTicks = state.ticks + 1;

  return newTicks >= ticksInYear ? {
    ticks: newTicks - ticksInYear,
    year: state.year + 1,
  } : {
    ticks: newTicks,
    year: state.year,
  };
};

export default time;
