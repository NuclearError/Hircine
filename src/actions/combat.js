export const TAKE_DAMAGE = 'TAKE_DAMAGE';
export const HEAL_DAMAGE = 'HEAL_DAMAGE';

// started with actions. Actions are just objects with { type: 'some_string', ...otherData }
// but you want functions that create those objects, for consistency, like avoiding magic strings

// you can have more complex logic (which will make the easy testability really shine),
// but action creators are generally nice and vanilla JS-y

// in the abstract, you sort of want to think of actions like "events" (data events; events that
// cause state to change)

// (these two examples are really simple and look repetitive but only because they are simple
// examples: keeping these types of actions/events distinct has benefits for more complex apps)
export const takeDamage = amount => ({
  type: TAKE_DAMAGE,
  amount,
});

export const healDamage = amount => ({
  type: HEAL_DAMAGE,
  amount,
});

// this is that "decoupled abstraction" thing I talk about with Redux
// this is *just* "tell the system a thing is happening"
// so there's an obvious effect we expect (health goes down)
// but maybe it triggers BERSERKER RAGE or whatevs also
// the action don't care, it just says "shit's happened, yo"

// since they're simple functions, they're easy to compose etc, you could find you wanna get more
// specific with them as your game grows

export const rabbitAttack = () => takeDamage(1);
export const bearAttack = isGrizzly => takeDamage(isGrizzly ? 5 : 2);

// export const healDamage = amount => takeDamage(-amount); // technically works but is a bit weird

// if the logic gets more complex then you can extract helper funcs, whatevs, all just vanilla JS
