import { HYDRATE, hydrate, DEHYDRATE, dehydrate, drink } from '../hydration';

describe('Hydration actions: ', () => {
  describe('Hydrating', () => {
    it('outputs an action with the amount of hydration acquired', () => {
      expect(hydrate(15)).toEqual({ type: HYDRATE, amount: 15 });
    });
  });
  describe('Dehydrating', () => {
    it('outputs an action with the amount of dehydration acquired', () => {
      expect(dehydrate(10)).toEqual({ type: DEHYDRATE, amount: 10 });
    });
  });
  describe('Drinking liquids', () => {
    const wine = {
      hydration: 5,
      flavour: 'dry',
    };
    const saltWater = {
      hydration: -20,
      flavour: 'salty',
    };
    it('hydrates the amount taken from liquid properties', () => {
      expect(drink(wine)).toEqual({ type: HYDRATE, amount: wine.hydration });
    });
    it('dehydrates if the liquid properties are negative numbers', () => {
      expect(drink(saltWater)).toEqual({ type: HYDRATE, amount: saltWater.hydration });
    });
  });
});
