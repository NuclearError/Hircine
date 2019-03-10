import { TAKE_DAMAGE, takeDamage } from '../health';

describe('health actions', () => {
  describe('taking damage', () => {
    it('outputs an action with the amount of damage taken', () => {
      expect(takeDamage(12)).toEqual({ type: TAKE_DAMAGE, amount: 12 });
    });
  });
});
