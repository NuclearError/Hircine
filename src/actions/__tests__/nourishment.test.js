import { GAIN_HUNGER, gainHunger, LOSE_HUNGER, loseHunger } from '../nourishment';

describe('nourishment actions', () => {
  describe('gaining hunger', () => {
    it('outputs an action with the amount of damage taken', () => {
      expect(gainHunger(12)).toEqual({ type: GAIN_HUNGER, amount: 12 });
    });
  });
  describe('losing hunger', () => {
    it('outputs an action with the amount of healing acquired', () => {
      expect(loseHunger(20)).toEqual({ type: LOSE_HUNGER, amount: 20 });
    });
  });
});
