import { takeDamage } from '../../actions/combat';

import reduce from '../stats';

describe('the stats reducer', () => {
  // ignore this rn
  it('should handle initial state', () => {
    expect(reduce(undefined, {})).toEqual({ health: 100, spirit: 0 });
  });

  it('lowers health when damage is taken', () => {
    const initialState = { health: 15, spirit: 9001 };
    const finalState = reduce(initialState, takeDamage(3));
    const expectedState = { health: 12, spirit: 9001 };
    expect(finalState).toEqual(expectedState);
  });
});
