import { tick } from '../../actions/tick';
import { bleedOut } from '../../actions/bleeding';
import { feelTired, feelWired } from '../../actions/tired';
import { healDamage } from '../../actions/health';
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

  it('removes specific effect according to action taken, leaving other ongoing effects in place', () => {
    const initialState = {
      stats: {
        health: 50,
        energy: 50,
        nourishment: 0,
      },
      statusEffects: [
        bleedOut(5),
        beStarving(10),
      ],
    };
    const finalState = reduce(initialState, healDamage());
    const expectedState = {
      stats: {
        health: 50,
        energy: 50,
        nourishment: 0,
      },
      statusEffects: [
        beStarving(10),
      ],
    };
    expect(finalState).toEqual(expectedState);
  });

  it('removes starving effect if player losers hunger', () => {
    const initialState = {
      stats: {
        energy: 50,
        nourishment: 0,
      },
      statusEffects: [
        beStarving(10),
      ],
    };
    const finalState = reduce(initialState, loseHunger());
    const expectedState = {
      stats: {
        energy: 50,
        nourishment: 0,
      },
      statusEffects: [],
    };
    expect(finalState).toEqual(expectedState);
  });

  it('removes bleeding effect if player heals damage', () => {
    const initialState = {
      stats: {
        health: 50,
      },
      statusEffects: [
        bleedOut(5),
      ],
    };
    const finalState = reduce(initialState, healDamage());
    const expectedState = {
      stats: {
        health: 50,
      },
      statusEffects: [],
    };
    expect(finalState).toEqual(expectedState);
  });
});
