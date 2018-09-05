import * as Redux from 'redux';
import stats from './stats';

// our rootReducer is just the combination of all of our subreducers for different chunks of state
const rootReducer = Redux.combineReducers({
  stats,
});

// combine reducers takes an object of { key: reducer } and  applies each reducer at the key
// so stats reducer expects state data like { health: blah, spirit: blah }
// and the root reducer, because we have { stats: statsReducer } expects state data like
// { stats: {
// health: blah, spirit: blah
// }}
// so it allows you to neatly nest your reducers/split them out into their own files based on the subfields of data they care about
// and since it's itself a reducer, you can arbitrarily nest them if you need to
// so you could have
// const rootReducer = Redux.combineReducers({
//   player: Redux.combinerReducers({
//     stats,
//     lifeGoals,
//     whimsy,
//   }),
//   world:
// })
// it's not strictly necesssary to use combineReducers, but it's very standard to use it

// I made a reusable createStore func of our own, just since it was used in both app.js and the
// stories. Normally you'd import { createStore } from 'redux' in just app, not here.
export const createStore = () => Redux.createStore(rootReducer);

export default rootReducer;
