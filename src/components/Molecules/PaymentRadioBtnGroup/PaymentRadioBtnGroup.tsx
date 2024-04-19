import React, { useEffect, useState } from 'react';
import styles from './PaymentRadioBtnGroup.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import MarkQuestion from '../../Atoms/MarkQuestion/MarkQuestion.tsx';

const PaymentRadioBtnGroup: React.FC = () => {
   const { paymentRadioBtnDataList } = useTypedSelector(
      (state) => state.listState,
   );
   const { getPaymentRadioBtnDataList } = useActions();

   useEffect(() => {
      getPaymentRadioBtnDataList();
   }, []);
   const [value, setValue] = useState<string | undefined>('Online on the site');

   // console.log(value);
   return (
      <ul className={styles.payment_radio_list}>
         {paymentRadioBtnDataList?.map((item) => (
            <li key={item.id} className={styles.payment_list_item}>
               <input
                  className={styles.radio_inp}
                  type="radio"
                  name={item.htmlFor}
                  value={item.value}
                  id={item.htmlFor}
                  checked={value == item.value}
                  onChange={(event) => setValue(event.target.value)}
               />
               <label className={styles.radio_label} htmlFor={item.htmlFor}>
                  <span className={styles.radio_icon}></span>
                  {item.value}
               </label>
               <MarkQuestion
                  questionContainer={styles.question_container}
                  item={item}
               />
            </li>
         ))}
      </ul>
   );
};

export default PaymentRadioBtnGroup;
