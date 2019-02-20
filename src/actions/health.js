export const TAKE_DAMAGE = 'TAKE_DAMAGE';
export const HEAL_DAMAGE = 'HEAL_DAMAGE';

export const takeDamage = amount => ({
  type: TAKE_DAMAGE,
  amount,
});

export const healDamage = amount => ({
  type: HEAL_DAMAGE,
  amount,
});

export const rabbitAttack = () => takeDamage(1);
export const bearAttack = isGrizzly => takeDamage(isGrizzly ? 5 : 2);

// export const healDamage = amount => takeDamage(-amount); // technically works but is a bit weird
