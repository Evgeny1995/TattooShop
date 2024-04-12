import { TypeList1 } from '../../types/list.ts';

export interface CartItem {
   id?: number;
   product?: TypeList1;
   count: number;
}
export interface CartStore {
   products: CartItem[];
}

export enum CartActionType {
   SET_CART_ITEM = 'SET_CART_ITEM',
   REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
}

interface SetCartItemAction {
   type: CartActionType.SET_CART_ITEM;
   payload: CartItem;
}

interface RemoveCartItemAction {
   type: CartActionType.REMOVE_CART_ITEM;
   payload: { id: number | undefined };
}

export type CartActionTypes = SetCartItemAction | RemoveCartItemAction;
