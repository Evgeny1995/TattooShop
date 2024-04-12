import styles from './CardDetailNav.module.scss';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TypeList1 } from '../../../types/list.ts';

interface props {
   item: TypeList1;
}

const CardDetailNav: React.FC<props> = ({ item }) => {
   const { id } = useParams();

   return (
      <div className={styles.card_detail_nav_wrap}>
         <div className={styles.card_detail_nav_container}>
            <Link className={styles.links} to="/">
               Main
            </Link>
            <span className={styles.minor}>/</span>
            <Link className={styles.links} to="/">
               Catalog
            </Link>
            <span className={styles.minor}>/</span>
            <Link className={styles.links} to="/">
               Tattoo machines
            </Link>
            <span className={styles.minor}>/</span>
            <Link className={styles.current_goods} to={'/cardDetail/' + id}>
               {item.title}
            </Link>
         </div>
      </div>
   );
};

export default CardDetailNav;
