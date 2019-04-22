import { tick } from '../../actions/tick';
import { bleedOut } from '../../actions/bleeding';
import { feelTired, feelWired } from '../../actions/tired';
import { healDamage } from '../../actions/health';
import { loseHunger, gainHunger } from '../../actions/nourishment';
import { gainEnergy } from '../../actions/energy';
import { loseSpirit } from '../../actions/spirit';
import { beStarving, feelWellfed } from '../../actions/starving';

import reduce from '../statusEffectsTick';

describe('The status effects tick reducer, on each tick : ', () => {

  describe('Debuffs : ', () => {
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
    it('lowers energy if player has starving status effect', () => {
      const initialState = {
        stats: {
          energy: 100,
          nourishment: 0,
        },
        statusEffects: [
          beStarving(10),
        ],
      };
      const finalState = reduce(initialState, tick());
      const expectedState = {
        stats: {
          energy: 90,
          nourishment: 0,
        },
        statusEffects: [
          beStarving(10),
        ],
      };
      expect(finalState).toEqual(expectedState);
    });
  });

  describe('Buffs : ', () => {
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
  });

  describe('Removing effects : ', () => {
    it('removes specific effect according to action taken (leaving other effects in place)', () => {
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
    it('removes starving effect if player loses hunger', () => {
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
    it('removes tired effect if player gains energy', () => {
      const initialState = {
        stats: {
          energy: 50,
          nourishment: 0,
        },
        statusEffects: [
          feelTired(10),
        ],
      };
      const finalState = reduce(initialState, gainEnergy());
      const expectedState = {
        stats: {
          energy: 50,
          nourishment: 0,
        },
        statusEffects: [],
      };
      expect(finalState).toEqual(expectedState);
    });
    it('removes wired effect if player loses spirit', () => {
      const initialState = {
        stats: {
          energy: 50,
          spirit: 100,
        },
        statusEffects: [
          feelWired(5),
        ],
      };
      const finalState = reduce(initialState, loseSpirit());
      const expectedState = {
        stats: {
          energy: 50,
          spirit: 100,
        },
        statusEffects: [],
      };
      expect(finalState).toEqual(expectedState);
    });
    it('removes well fed effect if player gains hunger', () => {
      const initialState = {
        stats: {
          energy: 50,
          nourishment: 50,
        },
        statusEffects: [
          feelWellfed(5),
        ],
      };
      const finalState = reduce(initialState, gainHunger());
      const expectedState = {
        stats: {
          energy: 50,
          nourishment: 50,
        },
        statusEffects: [],
      };
      expect(finalState).toEqual(expectedState);
    });
  });
});
