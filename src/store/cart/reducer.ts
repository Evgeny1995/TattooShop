import { CartActionType, CartActionTypes, CartStore } from './types.ts';

const initialState: CartStore = {
   products: [],
};

export const cartReducer = (
   state = initialState,
   action: CartActionTypes,
): CartStore => {
   switch (action.type) {
      case CartActionType.SET_CART_ITEM:
         // eslint-disable-next-line no-case-declarations
         let products = state.products;
         // eslint-disable-next-line no-case-declarations
         const existProduct = products.find((p) => p.id === action.payload.id);
         if (existProduct) {
            products = products.map((item) => {
               if (existProduct?.id === item.id) {
                  return action.payload;
               }
               return item;
            });
         } else {
            products = [...products, action.payload];
         }
         return { ...state, products };

      case CartActionType.REMOVE_CART_ITEM:
         return {
            ...state,
            products: state.products.filter((s) => s.id !== action.payload.id),
         };

      default:
         return state;
   }
};
