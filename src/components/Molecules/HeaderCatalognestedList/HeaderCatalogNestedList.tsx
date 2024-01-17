import React, { useEffect, useState } from 'react';
import styles from './HeaderCatalogNestedList.module.scss';
import { TypeList1 } from '../../../api/Types/Types.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

export type props = {
  position: string;
  color: string;
};

const HeaderCatalogNestedList: React.FC<props> = (props) => {
  const nestedList = '/catalCategoryNestedData';
  const [nestedListData, getNestedListData] = useState<TypeList1[]>([]);
  const getData = async () => {
    try {
      const res = await fetchList(nestedList);
      getNestedListData(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className={props.position}>
      {nestedListData.map((item) => (
        <li className={styles.nested_item} key={item.id}>
          <a className={[styles.nested_links, props.color].join(' ')}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderCatalogNestedList;
