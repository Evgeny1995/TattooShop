import React, { useEffect } from 'react';
import styles from './HomePopularbrandsSliderList.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

const HomePopularbrandsSliderList: React.FC = () => {
  const { deskHomePopularBrandsArrList } = useTypedSelector(
    (state) => state.listState,
  );
  const { getDeskHomePopularBrandsArrList } = useActions();

  useEffect(() => {
    getDeskHomePopularBrandsArrList();
  }, []);

  return (
    <ul className={styles.slide_list}>
      {deskHomePopularBrandsArrList?.map((item) => (
        <li className={styles.slide_list_item} key={item.id}>
          <a className={styles.slide_list_links} href="#">
            <img src={item.imgDesk} alt={item.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HomePopularbrandsSliderList;
