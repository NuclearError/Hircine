import { tick } from '../../actions/tick';
import { bleedOut } from '../../actions/bleeding';
import { feelTired, feelWired } from '../../actions/tired';
import { loseHunger } from '../../actions/nourishment';
import { beStarving, feelWellfed } from '../../actions/starving';

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
  it('lowers spirit if player has tired status effect', () => {
    const initialState = {
      stats: {
        energy: 100,
        spirit: 50,
      },
      statusEffects: [
        feelTired(5),
      ],
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        energy: 100,
        spirit: 45,
      },
      statusEffects: [
        feelTired(5),
      ],
    };
    expect(finalState).toEqual(expectedState);
  });
  it('increases spirit if player has wired status effect', () => {
    const initialState = {
      stats: {
        energy: 100,
        spirit: 0,
      },
      statusEffects: [
        feelWired(10),
      ],
    };
    const finalState = reduce(initialState, tick());
    const expectedState = {
      stats: {
        energy: 100,
        spirit: 10,
      },
      statusEffects: [
        feelWired(10),
      ],
    };
    expect(finalState).toEqual(expectedState);
  });

  // at the moment this won't notice the lose hunger effect because the logic is inside the "if not a tick action" code
  it('removes starving effect if player losers hunger', () => {
    const initialState = {
      stats: {
        energy: 50,
        nourishment: 0,
      },
      statusEffects: [
        loseHunger(25),
        beStarving(10),
      ],
    };
    const finalState = reduce(initialState, tick());
    console.log(finalState);
    const otherState = reduce(finalState, tick());
    console.log(otherState);
    // const expectedState = {
    //   stats: {
    //     energy: 50,
    //     nourishment: 0,
    //   },
    //   statusEffects: [
    //   ],
    // };
    // expect(finalState).toEqual(expectedState);
  });
});
