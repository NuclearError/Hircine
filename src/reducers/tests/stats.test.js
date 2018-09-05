import { takeDamage } from '../../actions/combat';

// I think it'd be more typical to actually import this as "stats from stats"
// but then you have const finalState = stats(initialState, takeDamage(3)), which is nonsense to me?
// so imo in tests, calling it "reduce" is helpful
// because then you get "reduce the initial state and action"
import reduce from '../stats';

describe('the stats reducer', () => {
  // ignore this rn
  it('should handle initial state', () => {
    expect(reduce(undefined, {})).toEqual({ health: 100, spirit: 0 });
  });


  // reducers are like your event listeners/handlers. When an action happens, they decide what that
  // means for the state
  // each reducer can handle multiple types of action, and each action can have multiple reducers
  // that are triggered by it
  // because of the way they're typically combined, you generally want a unique reducer for each
  // "chunk" of state
  // taking damage might lower HP and might trigger berserker rage and might lower morale if HP and
  // morale are stats (stored in { stats: blah }), then the stat reducer should handle that
  // whereas if zerking is a buff (stored in { buffs: [blah] }) then a buff reducer should handle it
  it('lowers health when damage is taken', () => {
    const initialState = { health: 15, spirit: 9001 };

    // the most general form of reduction (in FP) is "I have a starting thing of type A, and a bunch
    // of "change things" of type B" and given a function (A, B) => A, I will apply all the changes
    // until I get a final thing, reducing the list of Bs and the starting A to a final A

    // (see below example)

    // another quick example (no code) would be something like git
    // where your A is "the code files" and B is "a patch/diff"
    // so final codebase = [all my commits].reduce(applyPatchToCode, initialCommit)

    // the other thing to bear in mind is that the reducer is only dealing with a single pair of
    // things at a time; the running A and the next B. Helps keep things simple to think about

    // For Redux reducers, A is "the state" and B is "the action"
    // So here, we have some state (health 15) and an action (3 damage) and the reducer combines
    // them to the state (health 12)
    // the key point being the output is another state, so reducers can just keep consuming actions
    // and updating the state
    const finalState = reduce(initialState, takeDamage(3));

    const expectedState = { health: 12, spirit: 9001 };
    expect(finalState).toEqual(expectedState);
  });
});

/*
// Array reduce method arguments --> method, starting value (0 in the example below)
// the first arg is the reducer, the second is the starting value you're reducing "into"
const myArray = [7, 1, 23];
const arrayTotal = myArray.reduce((runningTotal, item) => runningTotal + item, 0);
// arrayTotal == 31;

const arrayTotal = myArray.reduce(
  function(runningTotal, item) {
    return runningTotal + item;
  }, 0);
// arrayTotal == 31
*/

// because it starts with 0, then applies the fn to the running total + each number in turn
// so you get 0 + 7 = 7, 7 + 1 = 8, 8 + 23 = 31
// so we "reduce" the list of numbers to their sum total
// so (total, x) => total + x is a summation reducer
