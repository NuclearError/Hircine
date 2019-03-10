import { BE_STARVING, beStarving, FEEL_WELLFED, feelWellfed } from '../starving';

describe('starving actions', () => {
  describe('be starving', () => {
    it('outputs an action with a starving value', () => {
      expect(beStarving(12)).toEqual({
        type: BE_STARVING,
        label: 'starving',
        amount: 12,
      });
    });
  });
  describe('feel well fed', () => {
    it('outputs an action with a well fed value', () => {
      expect(feelWellfed(20)).toEqual({
        type: FEEL_WELLFED,
        label: 'well fed',
        amount: 20,
      });
    });
  });
});
