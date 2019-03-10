import { TICK, tick } from '../tick';

describe('Tick actions', () => {
  it('matches default behaviour', () => {
    expect(tick()).toEqual({ type: TICK });
  });
});
