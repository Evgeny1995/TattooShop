import React, { useEffect, useState } from 'react';
import styles from '../PaymentRadioBtnGroup/PaymentRadioBtnGroup.module.scss';
import MarkQuestion from '../../Atoms/MarkQuestion/MarkQuestion.tsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

const DeliveryRadioBtnGroup: React.FC = () => {
   const { deliveryRadioBtnDataList } = useTypedSelector(
      (state) => state.listState,
   );
   const { getDeliveryRadioBtnDataList } = useActions();

   useEffect(() => {
      getDeliveryRadioBtnDataList();
   }, []);
   const [value, setValue] = useState<string | null>(null);

   return (
      <ul className={styles.payment_radio_list}>
         {deliveryRadioBtnDataList?.map((item) => (
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

export default DeliveryRadioBtnGroup;
