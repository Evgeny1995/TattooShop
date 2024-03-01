import React, { useEffect, useState } from 'react';
import styles from './HomeSeasonalOffers.module.scss';
import paintsNitn from './../../../assets/img/HomeSesonalOffers/paintsNith.png';
import FoxViper from './../../../assets/img/HomeSesonalOffers/FoxViper.png';
import { fetchList } from '../../../api/Requests/Requests.ts';
import { TypeList1 } from '../../../types/list.ts';

const HomeSeasonalOffers: React.FC = () => {
  interface IHomeSeasonalOffers {
    id: string;
    title: string;
    img: string;
    alt: string;
  }

  const HomeSeasonalOffersArr: IHomeSeasonalOffers[] = [
    {
      id: '1',
      title: 'Lip Nitn paints',
      img: paintsNitn,
      alt: 'paints Lip Nitn',
    },
    {
      id: '2',
      title: 'Foxx viper - hit of 2021',
      img: FoxViper,
      alt: 'Fox viper - 2021',
    },
  ];

  const homeSeasonalOffersData = '/homeSeasonalOffersData';
  const [homeSeasonalOffersDataArr, setHomeSeasonalOffersDataArr] = useState<
    TypeList1[]
  >([]);

  const getData = async () => {
    try {
      const res = await fetchList(homeSeasonalOffersData);
      setHomeSeasonalOffersDataArr(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.seasonal_offers_container}>
      <div className={styles.seasonal_offers_content}>
        <ul className={styles.seasonal_offers_list}>
          {homeSeasonalOffersDataArr.map((item) => (
            <li key={item.id} className={styles.list_item}>
              <p className={styles.item_title}>{item.title}</p>
              <div className={styles.item_links_container}>
                <a className={styles.item_links} href="#">
                  View in the catalog
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeSeasonalOffers;
