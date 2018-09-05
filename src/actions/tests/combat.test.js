import { TAKE_DAMAGE, takeDamage } from '../combat';

// so, the nice thing about actions (strictly, action creators) is that they're supes testable
// cuz they're just "some function that outputs a boring object"

describe('combat actions', () => {
  describe('taking damage', () => {
    it('outputs an action with the amount of damage taken', () => {
      expect(takeDamage(12)).toEqual({ type: TAKE_DAMAGE, amount: 12 });
    });
  });
});
