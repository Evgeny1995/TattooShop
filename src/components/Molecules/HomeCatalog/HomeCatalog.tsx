import React, { useEffect, useState } from 'react';
import styles from './HomeCatalog.module.scss';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import { TypeList1 } from '../../../types/list.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

const HomeCatalog: React.FC = () => {
  const catalogListDataMobTab = '/catalogListDataMobTab';
  const catalogListDataDesk = '/catalogListDataDesk';
  const [width] = useWindowResize();
  const [catalogListMobTab, setCatalogListMobTab] = useState<TypeList1[]>([]);
  const [catalogListDesk, setCatalogListDesk] = useState<TypeList1[]>([]);
  const getDataMobTabData = async () => {
    try {
      const res = await fetchList(catalogListDataMobTab);
      setCatalogListMobTab(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getDataDeskData = async () => {
    try {
      const res = await fetchList(catalogListDataDesk);
      setCatalogListDesk(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataMobTabData();
    getDataDeskData();
  }, []);
  return (
    <div className={styles.home_catalog_container}>
      <div className={styles.home_catalog_content}>
        <h3 className={styles.home_catalog_title}>Catalog</h3>
        <ul className={styles.home_catalog_list}>
          {width < 1920
            ? catalogListMobTab.map((item) => (
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
            : catalogListDesk.map((item) => (
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
        <ButtonOne
          title={'View catalog'}
          className={styles.btn_view_catalog}
          btnStyle={styles.btn_style}
        />
      </div>
    </div>
  );
};

export default HomeCatalog;
//
