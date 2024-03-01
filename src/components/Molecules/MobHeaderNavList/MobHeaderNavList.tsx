import React, { useEffect, useState } from 'react';
import styles from './MobHeaderNavList.module.scss';
import HeaderCatalogNestedList from '../HeaderCatalognestedList/HeaderCatalogNestedList.tsx';
import { Link } from 'react-router-dom';
import { TypeList1 } from '../../../types/list.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

const MobHeaderNavList: React.FC = () => {
  const [catalogList, setCatalogList] = useState<boolean>(true);

  interface ICatalCategory {
    id: string;
    title: string;
  }

  const mobCatalCategory: ICatalCategory[] = [
    { id: '1', title: 'Catalog' },
    { id: '2', title: 'Contacts' },
    { id: '3', title: 'Promo codes' },
    { id: '4', title: 'Discounts' },
    { id: '5', title: 'Help' },
    { id: '6', title: 'About Us' },
    { id: '7', title: 'Favorites' },
    { id: '8', title: 'Personal area' },
  ];
  const clarifyingLink = '/mobCatalCategoryData';
  const [mobCatalCategoryData, getMobCatalCategoryData] = useState<TypeList1[]>(
    [],
  );
  const getData = async () => {
    try {
      const res = await fetchList(clarifyingLink);
      return getMobCatalCategoryData(res);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(mobCatalCategoryData);
  useEffect(() => {
    getData();
    // console.log(mobCatalCategoryData);
  }, []);

  return (
    <ul className={styles.header_nav__list}>
      <li className={styles.nav_list__item}>
        <button
          onClick={() => setCatalogList(!catalogList)}
          className={
            catalogList
              ? styles.nav_list__btn
              : [styles.nav_list__btn, styles.rotate].join(' ')
          }
        >
          {mobCatalCategory[0].title}
        </button>
        <div
          className={
            catalogList
              ? styles.nested_list__hide
              : [styles.nested_list__hide, styles.show].join(' ')
          }
        >
          <HeaderCatalogNestedList
            position={styles.nested_list__position}
            color={styles.nested_list_color}
          />
        </div>
      </li>
      <li className={styles.nav_list__item}>
        <Link to={'#'} className={styles.mob_menu__nav_links}>
          {mobCatalCategory[1].title}
        </Link>
      </li>
      <li className={styles.nav_list__item}>
        <Link to="/promo-codes" className={styles.mob_menu__nav_links}>
          {mobCatalCategory[2].title}
        </Link>
      </li>
      <li className={styles.nav_list__item}>
        <Link to={'#'} className={styles.mob_menu__nav_links}>
          {mobCatalCategory[3].title}
        </Link>
      </li>
      <li className={styles.nav_list__item}>
        <Link to={'#'} className={styles.mob_menu__nav_links}>
          {mobCatalCategory[4].title}
        </Link>
      </li>
      <li className={styles.nav_list__item}>
        <Link to={'#'} className={styles.mob_menu__nav_links}>
          {mobCatalCategory[5].title}
        </Link>
      </li>
      <li className={styles.nav_list__item}>
        <Link to={'#'} className={styles.mob_menu__nav_links}>
          {mobCatalCategory[6].title}
        </Link>
      </li>
      <li className={styles.nav_list__item}>
        <Link to={'#'} className={styles.mob_menu__nav_links}>
          {mobCatalCategory[7].title}
        </Link>
      </li>
    </ul>
  );
};

export default MobHeaderNavList;
