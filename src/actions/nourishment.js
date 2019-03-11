export const GAIN_HUNGER = 'GAIN_HUNGER';
export const LOSE_HUNGER = 'LOSE_HUNGER';

export const gainHunger = amount => ({
  type: GAIN_HUNGER,
  amount,
});

export const loseHunger = amount => ({
  type: LOSE_HUNGER,
  amount,
});

export const eat = solid => loseHunger(solid.nourishment);
