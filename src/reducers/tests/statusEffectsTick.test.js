import { tick } from '../../actions/tick';
import { bleedOut } from '../../actions/bleeding';

import reduce from '../statusEffectsTick';

describe('The status effects tick reducer, on each tick : ', () => {
  it('lowers health if player has bleeding status effect', () => {
    const initialState = {
      stats: {
        health: 100,
        spirit: 100,
      },
      statusEffects: [
        bleedOut(5),
      ],
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        health: 95,
        spirit: 100,
      },
      statusEffects: [
        bleedOut(5),
      ],
    };
    expect(finalState).toEqual(expectedState);
  });
});
