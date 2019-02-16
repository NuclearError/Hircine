import * as Redux from 'redux';
import stats from './stats';

const rootReducer = Redux.combineReducers({
  stats,
});

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
