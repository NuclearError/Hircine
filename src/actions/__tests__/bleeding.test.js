import { BLEED_OUT, bleedOut } from '../bleeding';

describe('Bleeding actions', () => {
  describe('bleeding out', () => {
    it('outputs an action with a bleedout value', () => {
      expect(bleedOut(12)).toEqual({
        type: BLEED_OUT,
        label: 'bleeding',
        amount: 12,
      });
    });
  });
});
