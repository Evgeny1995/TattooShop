import React, { useEffect, useState } from 'react';
import styles from './HomePopularBrands.module.scss';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import HomePopularBrandsDeskSlider from '../HomePopularBrandsDeskSlider/HomePopularBrandsDeskSlider.tsx';
import { TypeList1 } from '../../../api/Types/Types.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

const HomePopularBrands: React.FC = () => {
  const [width] = useWindowResize();

  const mobTabHomePopularBrandsArrLink = '/mobTabHomePopularBrandsArr';
  const [mobTabHomePopularBrandsData, setMobTabHomePopularBrandsData] =
    useState<TypeList1[]>([]);
  const getData = async () => {
    try {
      const res = await fetchList(mobTabHomePopularBrandsArrLink);
      return setMobTabHomePopularBrandsData(res);
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
    <div className={styles.home_popular_brands_container}>
      <div className={styles.home_popular_brands_content}>
        <div className={styles.popular_brands_title_container}>
          <h3 className={styles.popular_brands_title}>Popular brands</h3>
          <a className={styles.popular_brands_link_all} href="#">
            See all
          </a>
        </div>
        <ul className={styles.popular_brands_list}>
          {mobTabHomePopularBrandsData.map((item) => (
            <li className={styles.list_item} key={item.id}>
              <a className={styles.item_links} href="#">
                <img
                  src={width <= 768 ? item.imgMob : item.imgTab}
                  alt={item.alt}
                />
              </a>
            </li>
          ))}
        </ul>
        <HomePopularBrandsDeskSlider />
      </div>
    </div>
  );
};

export default HomePopularBrands;
