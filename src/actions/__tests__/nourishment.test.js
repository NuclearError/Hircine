import { GAIN_HUNGER, gainHunger, LOSE_HUNGER, loseHunger, eat } from '../nourishment';

describe('nourishment actions', () => {
  describe('gaining hunger', () => {
    it('outputs an action with the amount of damage taken', () => {
      expect(gainHunger(12)).toEqual({ type: GAIN_HUNGER, amount: 12 });
    });
  });
  describe('losing hunger', () => {
    it('outputs an action with the amount of healing acquired', () => {
      expect(loseHunger(20)).toEqual({ type: LOSE_HUNGER, amount: 20 });
    });
  });
  describe('Eating solids', () => {
    const meatPie = {
      nourishment: 10,
    };
    const rottenFish = {
      nourishment: -20,
    };
    it('nourishes the amount taken from solid properties', () => {
      expect(eat(meatPie)).toEqual({ type: LOSE_HUNGER, amount: meatPie.nourishment });
    });
    it('increases hunger if the solid properties are negative numbers', () => {
      expect(eat(rottenFish)).toEqual({ type: LOSE_HUNGER, amount: rottenFish.nourishment });
    });
  });
});
