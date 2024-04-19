import React, { useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import styles from './ServicesList.module.scss';
const ServicesList: React.FC = () => {
   const { servicesListData } = useTypedSelector((state) => state.listState);
   const { getServicesListData } = useActions();
   console.log(servicesListData);
   useEffect(() => {
      getServicesListData();
   }, []);
   return (
      <ul className={styles.list}>
         {servicesListData?.map((item) => (
            <li className={styles.item} key={item.id}>
               <div className={styles.item_position}>
                  <img className={styles.img} src={item.img} alt="" />
                  <div className={styles.item_content}>
                     <h4 className={styles.item_title}>{item.title}</h4>
                     <p className={styles.item_description}>
                        {item.description}
                     </p>
                  </div>
               </div>
               <div className={styles.item_position_two}>
                  <p className={styles.item_price}>{item.servicesPrice}</p>
                  <ButtonOne
                     title={'About company'}
                     className={styles.btn_view_catalog}
                     btnStyle={styles.btn_style}
                  />
               </div>
            </li>
         ))}
      </ul>
   );
};

export default ServicesList;
