import { GAIN_COMFORT, gainComfort, LOSE_COMFORT, loseComfort } from '../comfort';

describe('comfort actions', () => {
  describe('gaining comfort', () => {
    it('outputs an action with the amount of comfort gained', () => {
      expect(gainComfort(12)).toEqual({ type: GAIN_COMFORT, amount: 12 });
    });
  });
  describe('losing comfort', () => {
    it('outputs an action with the amount of comfort lost', () => {
      expect(loseComfort(20)).toEqual({ type: LOSE_COMFORT, amount: 20 });
    });
  });
});
