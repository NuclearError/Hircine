import { GAIN_SPIIRT, gainSpirit, LOSE_SPIIRT, loseSpirit } from '../spirit';

describe('spirit actions', () => {
  describe('gaining spirit', () => {
    it('outputs an action with the amount of spirit gained', () => {
      expect(gainSpirit(12)).toEqual({ type: GAIN_SPIIRT, amount: 12 });
    });
  });
  describe('losing spirit', () => {
    it('outputs an action with the amount of spirit lost', () => {
      expect(loseSpirit(20)).toEqual({ type: LOSE_SPIIRT, amount: 20 });
    });
  });
});
