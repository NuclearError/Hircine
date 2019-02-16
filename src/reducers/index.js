import * as Redux from 'redux';
import reduceReducers from 'reduce-reducers';
import stats from './stats';
import statusEffects from './statusEffects';
import playerTick from './playerTick';
import statusEffectsTick from './statusEffectsTick';

const rootReducer = reduceReducers(Redux.combineReducers({
  stats,
  statusEffects,
}), playerTick, statusEffectsTick);

// Using a reusable createStore function here so that it can be used in both app.js and storybook
export const createStore = () => Redux.createStore(rootReducer);

export default rootReducer;

// TODO: consider nesting reducers if needed
// const rootReducer = Redux.combineReducers({
//   player: Redux.combinerReducers({
//     stats,
//     lifeGoals,
//     whimsy,
//   }),
//   world:
// })
// it's not strictly necesssary to use combineReducers, but it's very standard to use it
