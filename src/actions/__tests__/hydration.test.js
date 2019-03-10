import { HYDRATE, hydrate } from '../hydration';

describe('hydration actions', () => {
  describe('hydrating', () => {
    it('outputs an action with the amount of hydration acquired', () => {
      expect(hydrate(15)).toEqual({ type: HYDRATE, amount: 15 });
    });
  });
});
