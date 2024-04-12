import React, { useState } from 'react';
import styles from './AboutGoodInCartDetail.module.scss';
import clsx from 'clsx';
import { TypeList1 } from '../../../types/list.ts';
import { index } from '../../../store';

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
   console.log(goodDescription);
   // const goodsSelector =
   //    activeСategory === Categories.Description
   //       ? goodDescription.bestsellers
   //       : activeTab === Tab.Popular
   //       ? goods.popular
   //       : activeTab === Tab.NewArrivals
   //       ? goods.new
   //       : activeTab === Tab.Sales
   //       ? goods.sale
   //       : goods.bestsellers;

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
      </div>
   );
};

export default AboutGoodInCartDetail;
