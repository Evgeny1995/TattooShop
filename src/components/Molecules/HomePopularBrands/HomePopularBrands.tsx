import React, { useEffect } from 'react';
import styles from './HomePopularBrands.module.scss';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import HomePopularBrandsDeskSlider from '../HomePopularBrandsDeskSlider/HomePopularBrandsDeskSlider.tsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import { Link } from 'react-router-dom';

const HomePopularBrands: React.FC = () => {
  const [width] = useWindowResize();
  const { mobTabHomePopularBrandsArrList } = useTypedSelector(
    (state) => state.listState,
  );
  const { getMobTabHomePopularBrandsArrList } = useActions();

  useEffect(() => {
    getMobTabHomePopularBrandsArrList();
  }, []);

  return (
    <div className={styles.home_popular_brands_container}>
      <div className={styles.home_popular_brands_content}>
        <div className={styles.popular_brands_title_container}>
          <h3 className={styles.popular_brands_title}>Popular brands</h3>
          <a className={styles.popular_brands_link_all} href="#">
            See all
          </a>
        </div>
        <ul className={styles.popular_brands_list}>
          {mobTabHomePopularBrandsArrList?.map((item) => (
            <li className={styles.list_item} key={item.id}>
              <Link to={'/'} className={styles.item_links}>
                <img
                  src={width <= 768 ? item.imgMob : item.imgTab}
                  alt={item.alt}
                />
              </Link>
            </li>
          ))}
        </ul>
        <HomePopularBrandsDeskSlider />
      </div>
    </div>
  );
};

export default HomePopularBrands;
