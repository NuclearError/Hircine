export const GAIN_SPIRIT = 'GAIN_SPIRIT';
export const LOSE_SPIRIT = 'LOSE_SPIRIT';

export const gainSpirit = amount => ({
  type: GAIN_SPIRIT,
  amount,
});

export const loseSpirit = amount => ({
  type: LOSE_SPIRIT,
  amount,
});

export const eat = solid => loseSpirit(solid.nourishment);
