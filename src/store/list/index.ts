import * as listActions from './actions.ts';
import { combineReducers } from 'redux';
import { listReducer } from './reducer.ts';

export const rootReducer = combineReducers({
  listState: listReducer,
});

export default {
  ...listActions,
};
