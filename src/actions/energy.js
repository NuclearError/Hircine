export const GAIN_ENERGY = 'GAIN_ENERGY';
export const LOSE_ENERGY = 'LOSE_ENERGY';

export const gainEnergy = amount => ({
  type: GAIN_ENERGY,
  amount,
});

export const loseEnergy = amount => ({
  type: LOSE_ENERGY,
  amount,
});

export const eat = solid => loseEnergy(solid.nourishment);
