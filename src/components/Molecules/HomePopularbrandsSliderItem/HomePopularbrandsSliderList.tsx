import React, { useEffect, useState } from 'react';
import styles from './HomePopularbrandsSliderList.module.scss';
import { TypeList1 } from '../../../api/Types/Types.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

const HomePopularbrandsSliderList: React.FC = () => {
  const clarifyingLink = '/deskHomePopularBrandsArr';
  const [deskHomePopularBrandsArr, getDeskHomePopularBrandsArr] = useState<
    TypeList1[]
  >([]);
  const getData = async () => {
    try {
      const res = await fetchList(clarifyingLink);
      return getDeskHomePopularBrandsArr(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className={styles.slide_list}>
      {deskHomePopularBrandsArr.map((item) => (
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
