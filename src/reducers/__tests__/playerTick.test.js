import { tick } from '../../actions/tick';
import reduce from '../playerTick';

const defaultStats = {
  health: 100,
  hydration: 80,
  nourishment: 80,
  energy: 100,
  comfort: 40,
  spirit: 0,
};

const defaultStatsAfterSingleTick = {
  ...defaultStats,
  hydration: 79.9, // lowered by 0.1
  nourishment: 79.9,
  energy: 99.9,
};

describe('The player tick reducer, on each tick : ', () => {
  it('lowers hydration, nourishment, and energy', () => {
    const initialState = {
      stats: {
        ...defaultStats,
      },
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        ...defaultStatsAfterSingleTick,
      },
    };
    expect(finalState).toEqual(expectedState);
  });
});
