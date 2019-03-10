import { tick } from '../../actions/tick';
import { bleedOut } from '../../actions/bleeding';
import { feelTired, feelWired } from '../../actions/tired';

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
  it('lowers energy if player has tired status effect', () => {
    const initialState = {
      stats: {
        energy: 100,
      },
      statusEffects: [
        feelTired(5),
      ],
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        energy: 95,
      },
      statusEffects: [
        feelTired(5),
      ],
    };
    expect(finalState).toEqual(expectedState);
  });
  it('increases energy if player has wired status effect', () => {
    const initialState = {
      stats: {
        energy: 50,
      },
      statusEffects: [
        feelWired(10),
      ],
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        energy: 60,
      },
      statusEffects: [
        feelWired(10),
      ],
    };
    expect(finalState).toEqual(expectedState);
  });
});
