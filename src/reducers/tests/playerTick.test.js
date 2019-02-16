import { tick } from '../../actions/tick';

import reduce from '../playerTick';

describe('The player tick reducer : ', () => {
  it('lowers hydration, nourishment, and energy, over a fixed length of time', () => {
    const initialState = {
      stats: {
        health: 100,
        hydration: 100,
        nourishment: 100,
        energy: 100,
      },
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        health: 100,
        hydration: 99,
        nourishment: 99,
        energy: 99,
      },
    };
    expect(finalState).toEqual(expectedState);
  });
});
