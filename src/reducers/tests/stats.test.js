import { tick } from '../../actions/tick';
import { takeDamage, healDamage } from '../../actions/health';
import { hydrate, dehydrate } from '../../actions/hydration';
import initialPlayerStats from '../initialPlayerStats';

import reduce from '../stats';

describe('the stats reducer: ', () => {
  it('should handle initial state', () => {
    expect(reduce(undefined, {})).toEqual(initialPlayerStats);
  });

  describe(' health: ', () => {
    it('lowers health when damage is taken', () => {
      const initialState = { health: 15, spirit: 9001 };
      const finalState = reduce(initialState, takeDamage(3));
      const expectedState = { health: 12, spirit: 9001 };
      expect(finalState).toEqual(expectedState);
    });

    it('increases health when damage is healed', () => {
      const initialState = { health: 15, spirit: 9001 };
      const finalState = reduce(initialState, healDamage(5));
      const expectedState = { health: 20, spirit: 9001 };
      expect(finalState).toEqual(expectedState);
    });
  });

  describe(' hydration: ', () => {
    it('lowers hydration when dehydrate is called', () => {
      const initialState = { health: 15, hydration: 10 };
      const finalState = reduce(initialState, dehydrate(10));
      const expectedState = { health: 15, hydration: 0 };
      expect(finalState).toEqual(expectedState);
    });

    it('increases hydration when hydrate is called', () => {
      const initialState = { health: 15, hydration: 10 };
      const finalState = reduce(initialState, hydrate(20));
      const expectedState = { health: 15, hydration: 30 };
      expect(finalState).toEqual(expectedState);
    });
  });
});
