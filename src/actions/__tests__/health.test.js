import { TAKE_DAMAGE, takeDamage, HEAL_DAMAGE, healDamage } from '../health';

describe('health actions', () => {
  describe('taking damage', () => {
    it('outputs an action with the amount of damage taken', () => {
      expect(takeDamage(12)).toEqual({ type: TAKE_DAMAGE, amount: 12 });
    });
  });
  describe('healing damage', () => {
    it('outputs an action with the amount of healing acquired', () => {
      expect(healDamage(20)).toEqual({ type: HEAL_DAMAGE, amount: 20 });
    });
  });
});
