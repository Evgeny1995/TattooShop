import React, { useState } from 'react';
import styles from './AboutGoodInCartDetail.module.scss';
import clsx from 'clsx';
import { TypeList1 } from '../../../types/list.ts';
import CardDetailDescription from '../../Atoms/CardDetailDescription/CardDetailDescription.tsx';
import DescriptionInAboutGood from '../../Atoms/DescriptionInAboutGood/DescriptionInAboutGood.tsx';
import CardDetailHaracteristics from '../../Atoms/CardDetailHaracteristics/CardDetailHaracteristics.tsx';

enum Categories {
   Description = 'Description',
   Characteristics = 'Characteristics',
   Reviews = 'Reviews',
}

interface props {
   goodDescription: TypeList1;
}

const AboutGoodInCartDetail: React.FC<props> = ({ goodDescription }) => {
   const [activeCategory, setActiveCategory] = useState<Categories>(
      Categories.Description,
   );

   const descriptionSelector =
      activeCategory === Categories.Description ? (
         <DescriptionInAboutGood goodDescription={goodDescription} />
      ) : activeCategory === Categories.Characteristics ? (
         <CardDetailHaracteristics goodDescription={goodDescription} />
      ) : activeCategory === Categories.Reviews ? (
         <p className={styles.reviews}>Reviews are temporarily unavailable.</p>
      ) : (
         (goodDescription.descriptionFirst, goodDescription.descriptionSecond)
      );

   return (
      <div className={styles.about_good_wrap}>
         <ul className={styles.list}>
            {Object.values(Categories).map((it, index) => (
               <li key={index} className={styles.list_item}>
                  <button
                     className={
                        activeCategory === it
                           ? clsx(styles.category_btn, styles.active)
                           : styles.category_btn
                     }
                     onClick={() => setActiveCategory(it)}
                  >
                     {it}
                  </button>
               </li>
            ))}
         </ul>
         <div>
            <CardDetailDescription goodDescription={descriptionSelector} />
         </div>
      </div>
   );
};

export default AboutGoodInCartDetail;
