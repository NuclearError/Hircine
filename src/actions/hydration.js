export const DEHYDRATE = 'DEHYDRATE';
export const HYDRATE = 'HYDRATE';

export const dehydrate = amount => ({
  type: DEHYDRATE,
  amount,
});

export const hydrate = amount => ({
  type: HYDRATE,
  amount,
});

export const drinkWater = () => hydrate(10);
export const drinkWine = () => hydrate(3);

// export const healDamage = amount => takeDamage(-amount); // technically works but is a bit weird
