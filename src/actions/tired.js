export const FEEL_TIRED = 'FEEL_TIRED';
export const FEEL_WIRED = 'FEEL_WIRED';

export const feelTired = amount => ({
  type: FEEL_TIRED,
  label: 'exhausted',
  amount,
});

export const feelWired = amount => ({
  type: FEEL_WIRED,
  label: 'wired',
  amount,
});
