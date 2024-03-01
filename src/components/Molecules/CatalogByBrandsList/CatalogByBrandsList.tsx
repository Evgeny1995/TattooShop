import React, { useEffect } from 'react';
import styles from './CatalogByBrandsList.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

export type props = {
  color?: string;
  positionList?: string;
  positionItem?: string;
};

const CatalogByBrandsList: React.FC<props> = (props) => {
  const { list2 } = useTypedSelector((state) => state.listState);
  const { getList2 } = useActions();

  useEffect(() => {
    getList2();
  }, []);

  return (
    <ul className={[styles.brand_list, props.positionList].join(' ')}>
      {list2?.map((item) => (
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
