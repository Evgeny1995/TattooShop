import React from 'react';
import styles from './DeskHeaderCatalog.module.scss';
import menuIcon from './../../../assets/svg/mob-menu-icon.svg';
import DeskHeaderCatalogList from '../DeskHeaderCatalogList/DeskHeaderCatalogList.tsx';

const DeskHeaderCatalog: React.FC = () => {
  return (
    <div className={styles.desk_catalog__container}>
      <button className={styles.desk_catalog__btn}>
        Catalog
        <img
          className={styles.desk__menu_icon}
          src={menuIcon}
          alt="Menu icon"
        />
      </button>
      <div className={styles.desk_header_catalogl_ist_container}>
        <DeskHeaderCatalogList />
      </div>
    </div>
  );
};

export default DeskHeaderCatalog;
