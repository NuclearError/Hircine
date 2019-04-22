export const GAIN_COMFORT = 'GAIN_COMFORT';
export const LOSE_COMFORT = 'LOSE_COMFORT';

export const gainComfort = amount => ({
  type: GAIN_COMFORT,
  amount,
});

export const loseComfort = amount => ({
  type: LOSE_COMFORT,
  amount,
});
