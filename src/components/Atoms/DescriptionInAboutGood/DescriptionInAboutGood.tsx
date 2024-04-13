import React from 'react';
import { TypeList1 } from '../../../types/list.ts';
import styles from './DescriptionInAboutGood.module.scss';
interface props {
   goodDescription: TypeList1;
}
const DescriptionInAboutGood: React.FC<props> = ({ goodDescription }) => {
   return (
      <div className={styles.content_wrap}>
         <p className={styles.desription_text}>
            {goodDescription.descriptionFirst}
         </p>
         <p className={styles.desription_text}>
            {goodDescription.descriptionSecond}
         </p>
         <p className={styles.desription_text}>
            {goodDescription.descriptionThird}
         </p>
         <p className={styles.desription_text}>
            {goodDescription.descriptionFourth}
         </p>
         <p className={styles.desription_text}>
            {goodDescription.descriptionFifth}
         </p>
      </div>
   );
};

export default DescriptionInAboutGood;
