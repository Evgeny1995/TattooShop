import React from 'react';
import styles from './BasketNav.module.scss';
import { Link } from 'react-router-dom';
const BasketNav: React.FC = () => {
   return (
      <div className={styles.basket_nav_wrap}>
         <div className={styles.basket_nav_container}>
            <Link className={styles.links} to="/">
               Main
            </Link>
            <span className={styles.minor}>/</span>
            <Link className={styles.current_links} to="/basket">
               Basket
            </Link>
         </div>
      </div>
   );
};

export default BasketNav;
