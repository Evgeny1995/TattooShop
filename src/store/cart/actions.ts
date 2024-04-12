import { Dispatch } from 'redux';

import { CartActionType, CartActionTypes, CartItem } from './types.ts';

export const setCartItem = (item: CartItem) => {
   return async (dispatch: Dispatch<CartActionTypes>) => {
      dispatch({
         type: CartActionType.SET_CART_ITEM,
         payload: item,
      });
   };
};

export const removeCartItem = ({ id }: { id: number | undefined }) => {
   return async (dispatch: Dispatch<CartActionTypes>) => {
      dispatch({
         type: CartActionType.REMOVE_CART_ITEM,
         payload: { id },
      });
   };
};
