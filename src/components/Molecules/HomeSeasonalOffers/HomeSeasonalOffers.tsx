import React, { useEffect } from 'react';
import styles from './HomeSeasonalOffers.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

const HomeSeasonalOffers: React.FC = () => {
  const { homeSeasonalOffersDataList } = useTypedSelector(
    (state) => state.listState,
  );
  const { getHomeSeasonalOffersDataList } = useActions();

  useEffect(() => {
    getHomeSeasonalOffersDataList();
  }, []);

  return (
    <div className={styles.seasonal_offers_container}>
      <div className={styles.seasonal_offers_content}>
        <ul className={styles.seasonal_offers_list}>
          {homeSeasonalOffersDataList?.map((item) => (
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
