import React, { useEffect } from 'react';
import styles from './HeaderCatalogNestedList.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';


export type props = {
  position: string;
  color: string;
};

const HeaderCatalogNestedList: React.FC<props> = (props) => {
  const { catalogNestedList } = useTypedSelector((state) => state.listState);
  const { getCatalogNestedList } = useActions();

  useEffect(() => {
    getCatalogNestedList();
  }, []);

  return (
    <ul className={props.position}>
      {catalogNestedList?.map((item) => (
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
