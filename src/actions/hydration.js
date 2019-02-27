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

export const drink = liquid => hydrate(liquid.hydration);
