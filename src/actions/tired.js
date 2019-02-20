export const FEEL_TIRED = 'FEEL_TIRED';

export const feelTired = amount => ({
  type: FEEL_TIRED,
  label: 'tired',
  amount,
});
