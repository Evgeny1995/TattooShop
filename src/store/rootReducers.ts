import * as listActions from './list/actions.ts';
import * as goodsCardsAction from './homeSort/actions.ts';
import * as cartActions from './cart/actions.ts';
import { combineReducers } from 'redux';
import { listReducer } from './list/reducer.ts';
import { goodsCardsReducer } from './homeSort/reducer.ts';
import { cartReducer } from './cart/reducer.ts';

export const rootReducer = combineReducers({
   listState: listReducer,
   goodsCards: goodsCardsReducer,
   cart: cartReducer,
});

export default {
   ...listActions,
   ...goodsCardsAction,
   ...cartActions,
};
