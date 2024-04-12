import React, { useState } from 'react';
import styles from './GoodsCounter.module.scss';

import { useActions } from '../../../hooks/useActions.ts';

import { TypeList1 } from '../../../types/list.ts';

interface props {
   position: string;
   product?: TypeList1;
   count: number;
   id?: number;
}

const GoodsCounter: React.FC<props> = ({ position, product, count, id }) => {
   const [counter, setCounter] = useState(count | 0);

   const { setCartItem, removeCartItem } = useActions();
   const increment = () => {
      setCounter((prevState) => {
         const newValue = prevState + 1;

         setCartItem({
            id: id,
            product,
            count: newValue,
         });

         return newValue;
      });
   };

   const decrement = () => {
      if (counter !== 0) {
         setCounter((prevState) => {
            const newValue = prevState - 1;
            if (newValue === 0) {
               removeCartItem({ id: id });

               return newValue;
            }

            setCartItem({
               id: id,
               product,
               count: newValue,
            });

            return newValue;
         });
      }
   };

   return (
      <div className={styles.wrap}>
         <div className={position}>
            <button className={styles.decrement} onClick={() => decrement()}>
               <svg width="11" height="1" viewBox="0 0 11 1" fill="none">
                  <path d="M0 1H11V0H0V1Z" fill="#3E424B" />
               </svg>
            </button>
            <div className={styles.count_inp}>{counter}</div>
            <button onClick={() => increment()} className={styles.increment}>
               <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
                  <path
                     d="M5.375 5L5.375 0H6.375V5H11.375V6H6.375V11H5.375L5.375 6H0.375V5H5.375Z"
                     fill="#3E424B"
                  />
               </svg>
            </button>
         </div>
      </div>
   );
};
export default GoodsCounter;
