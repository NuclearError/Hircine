import { GAIN_ENERGY, gainEnergy, LOSE_ENERGY, loseEnergy } from '../energy';

describe('energy actions', () => {
  describe('gaining energy', () => {
    it('outputs an action with the amount of energy gained', () => {
      expect(gainEnergy(12)).toEqual({ type: GAIN_ENERGY, amount: 12 });
    });
  });
  describe('losing energy', () => {
    it('outputs an action with the amount of energy lost', () => {
      expect(loseEnergy(20)).toEqual({ type: LOSE_ENERGY, amount: 20 });
    });
  });
});
