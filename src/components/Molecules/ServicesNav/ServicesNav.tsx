import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesNav.module.scss';
const ServicesNav: React.FC = () => {
   return (
      <div className={styles.services_nav_wrap}>
         <div className={styles.services_nav_container}>
            <Link className={styles.links} to="/">
               Main
            </Link>
            <span className={styles.minor}>/</span>
            <Link className={styles.links} to="/basket">
               Basket
            </Link>
            <span className={styles.minor}>/</span>
            <p className={styles.current_links}>Servises</p>
         </div>
      </div>
   );
};

export default ServicesNav;
