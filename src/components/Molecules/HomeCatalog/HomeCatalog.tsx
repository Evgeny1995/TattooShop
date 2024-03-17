import React, { useEffect } from 'react';
import styles from './HomeCatalog.module.scss';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

const HomeCatalog: React.FC = () => {
  const [width] = useWindowResize();
  const { catalogDataMobTabList, catalogDataDeskList } = useTypedSelector(
    (state) => state.listState,
  );
  const { getCatalogDataMobTabList, getCatalogDataDeskList } = useActions();

  useEffect(() => {
    getCatalogDataMobTabList();
    getCatalogDataDeskList();
  }, []);

  return (
    <div className={styles.home_catalog_container}>
      <div className={styles.home_catalog_content}>
        <h3 className={styles.home_catalog_title}>Catalog</h3>
        <ul className={styles.home_catalog_list}>
          {width < 1920
            ? catalogDataMobTabList?.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <h4 className={styles.item_title}>{item.title}</h4>
                  <a className={styles.item_link} href="#">
                    <img
                      className={styles.item_img}
                      src={width >= 768 ? item.imgTab : item.imgMob}
                      alt={item.title}
                    />
                  </a>
                </li>
              ))
            : catalogDataDeskList?.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <h4 className={styles.item_title}>{item.title}</h4>
                  <a className={styles.item_link} href="#">
                    <img
                      className={styles.item_img}
                      src={item.imgDesk}
                      alt={item.title}
                    />
                  </a>
                </li>
              ))}
        </ul>
        {/*<ButtonOne*/}
        {/*  title={'View catalog'}*/}
        {/*  className={styles.btn_view_catalog}*/}
        {/*  btnStyle={styles.btn_style}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default HomeCatalog;
//
