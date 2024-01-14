import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HelpNav.module.scss';

const PromoCodesNav: React.FC = () => {
  return (
    <div className={styles.promo_codes_nav_wrap}>
      <div className={styles.promo_codes_nav_container}>
        <Link className={styles.main_link} to="/">
          Main
        </Link>
        <span className={styles.minor}>/</span>
        <Link className={styles.promo_codes_link} to="/promo-codes">
          Help
        </Link>
      </div>
    </div>
  );
};

export default PromoCodesNav;
