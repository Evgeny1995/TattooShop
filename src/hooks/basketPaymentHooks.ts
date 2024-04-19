import { CartItem } from '../store/cart/types.ts';

export const totalUnitsCount = (arr: CartItem[]): number | undefined => {
   const count = arr.map((i) => i.count);
   if (count.length === 0) {
      return;
   }
   return count.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
   );
};

export const totalPrice = (arr: CartItem[]) => {
   const price = arr.map((i) => i.count * i.product.price);
   return price.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
   );
};
