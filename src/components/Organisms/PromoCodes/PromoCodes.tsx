import React from 'react';
import styles from './PromoCodes.module.scss';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import PromoCodesNav from '../../Atoms/NestedNavigation/PromoCodesNav/PromoCodesNav.tsx';
import PromoCodeList from '../../Molecules/PromoCodeList/PromoCodeList.tsx';

const PromoCodes: React.FC = () => {
  return (
    <div className={styles.promo_codes_wrap}>
      <Header />
      <PromoCodesNav />
      <div className={styles.promo_codes_title_container}>
        <h2 className={styles.promo_codes_title}>Promo codes</h2>
      </div>
      <PromoCodeList />
      <Footer />
    </div>
  );
};

export default PromoCodes;
