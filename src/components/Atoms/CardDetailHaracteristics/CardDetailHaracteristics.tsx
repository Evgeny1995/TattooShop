import React from 'react';
import { TypeList1 } from '../../../types/list.ts';
import styles from './CardDetailHaracteristics.module.scss';
interface props {
   goodDescription: TypeList1;
}

const CardDetailHaracteristics: React.FC<props> = ({ goodDescription }) => {
   return (
      <div className={styles.content_wrap}>
         <div className={styles.table}>
            <div className={styles.table_row}>
               <p className={styles.table_col}>Needle stroke</p>
               <div className={styles.value_container}>
                  <p className={styles.table_col}>
                     {goodDescription.needleStroke}
                  </p>
               </div>
            </div>
            <div className={styles.table_row}>
               <p className={styles.table_col}>Operating voltage</p>
               <div className={styles.value_container}>
                  <p className={styles.table_col}>
                     {goodDescription.OperatingVoltage}
                  </p>
               </div>
            </div>
            <div className={styles.table_row}>
               <p className={styles.table_col}>Connector</p>
               <div className={styles.value_container}>
                  <p className={styles.table_col}>
                     {goodDescription.Connector}
                  </p>
               </div>
            </div>
            <div className={styles.table_row}>
               <p className={styles.table_col}>Manufacturer</p>
               <div className={styles.value_container}>
                  <p className={styles.table_col}>
                     {goodDescription.manufacturer}
                  </p>
               </div>
            </div>
            <div className={styles.table_row}>
               <p className={styles.table_col}>Type</p>
               <div className={styles.value_container}>
                  <p className={styles.table_col}>{goodDescription.type}</p>
               </div>
            </div>
            <div className={styles.table_row}>
               <p className={styles.table_col}>Purpose</p>
               <div className={styles.value_container}>
                  <p className={styles.table_col}>
                     {goodDescription.needleStroke}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardDetailHaracteristics;
