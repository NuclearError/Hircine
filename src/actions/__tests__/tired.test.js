import { FEEL_TIRED, feelTired, FEEL_WIRED, feelWired } from '../tired';

describe('Tiredness actions', () => {
  describe('feel tired', () => {
    it('outputs an action with a tiredness value', () => {
      expect(feelTired(12)).toEqual({
        type: FEEL_TIRED,
        label: 'exhausted',
        amount: 12,
      });
    });
  });
  describe('feel wired', () => {
    it('outputs an action with a wired value', () => {
      expect(feelWired(20)).toEqual({
        type: FEEL_WIRED,
        label: 'wired',
        amount: 20,
      });
    });
  });
});
