export const BE_STARVING = 'BE_STARVING';
export const FEEL_WELLFED = 'FEEL_WELLFED';

export const beStarving = amount => ({
  type: BE_STARVING,
  label: 'starving',
  amount,
});

export const feelWellfed = amount => ({
  type: FEEL_WELLFED,
  label: 'well fed',
  amount,
});
