import { GAIN_SPIRIT, gainSpirit, LOSE_SPIRIT, loseSpirit } from '../spirit';

describe('spirit actions', () => {
  describe('gaining spirit', () => {
    it('outputs an action with the amount of spirit gained', () => {
      expect(gainSpirit(12)).toEqual({ type: GAIN_SPIRIT, amount: 12 });
    });
  });
  describe('losing spirit', () => {
    it('outputs an action with the amount of spirit lost', () => {
      expect(loseSpirit(20)).toEqual({ type: LOSE_SPIRIT, amount: 20 });
    });
  });
});
