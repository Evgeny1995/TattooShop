import React, { useEffect, useState } from 'react';
import styles from './CatalogByBrandsList.module.scss';
import { TypeList1 } from '../../../api/Types/Types.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

export type props = {
  color?: string;
  positionList?: string;
  positionItem?: string;
};

const CatalogByBrandsList: React.FC<props> = (props) => {
  const brandsList = '/brandsList';
  const [brandsListData, getBrandsListData] = useState<TypeList1[]>([]);
  const getData = async () => {
    try {
      const res = await fetchList(brandsList);
      getBrandsListData(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className={[styles.brand_list, props.positionList].join(' ')}>
      {brandsListData.map((item) => (
        <li
          key={item.id}
          className={[styles.brand_list_item, props.positionItem].join(' ')}
        >
          <a
            className={[styles.brand_item_links, props.color].join(' ')}
            href="#"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CatalogByBrandsList;
