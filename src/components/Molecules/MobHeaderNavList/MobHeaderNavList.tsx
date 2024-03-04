import React, { useEffect, useState } from 'react';
import styles from './MobHeaderNavList.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import { Link } from 'react-router-dom';
import clsx from 'clsx';





const MobHeaderNavList: React.FC = () => {
  const [catalogList, setCatalogList] = useState<boolean>(true);
  const { mobCatalogCategoryDataList,mobCatalogCategoryDataList2 } = useTypedSelector((state) => state.listState);
  const { getMobCatalogCategoryDataList,getMobCatalogCategoryDataList2 } = useActions();

  useEffect(() => {
    getMobCatalogCategoryDataList();
    getMobCatalogCategoryDataList2();
  }, []);


  return (
    <div  className={styles.header_nav__list}>
        {mobCatalogCategoryDataList?.map((item) => (
          <div key={item.id} className={styles.nav_list__item}>
            <button    onClick={() => setCatalogList(!catalogList)}
                    className={
                      catalogList
                        ? styles.nav_list__btn
                        : [styles.nav_list__btn, styles.rotate].join(' ')
                    }>
              {item.title}
            </button>

              <ul className={catalogList
                ? styles.nested_list__hide
                : [styles.nested_list__hide, styles.show].join(' ')}>
                {item.list?.map((i) => (
                  <li key={i.id} className={styles.nested_item}>
                    <Link className={clsx(styles.nested_list_color, styles.nested_links)} to={i.to}>
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
          </div >
        ))}
      <ul className={styles.header_nav__list2}>
      {mobCatalogCategoryDataList2?.map((item2) => (
          <li key={item2.id}  className={styles.nav_list__item}>
            <Link className={styles.mob_menu__nav_links} to={item2.to}>
              {item2.title}
            </Link>
          </li>


      ))}
      </ul>
    </div>
  );
};

export default MobHeaderNavList;
