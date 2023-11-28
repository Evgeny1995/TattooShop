import React, { useState } from 'react';
import styles from './DeskHeaderCatalogList.module.scss';
import CatalogByBrandsList from '../CatalogByBrandsList/CatalogByBrandsList.tsx';
import HeaderCatalogNestedList from '../HeaderCatalognestedList/HeaderCatalogNestedList.tsx';

const DeskHeaderCatalogList: React.FC = () => {
  const [toogleHoverCatalog, setToogleHoverCatalog] = useState<number>(1);

  return (
    <div
      className={
        toogleHoverCatalog === 2
          ? [
              styles.desk_header_catalog_list_container,
              styles.big_size_container,
            ].join(' ')
          : styles.desk_header_catalog_list_container
      }
    >
      <div className={styles.header_catalog_list_nav_container}>
        <div className={styles.header_catalog_list_nav_content}>
          <button
            onClick={() => setToogleHoverCatalog(1)}
            className={
              toogleHoverCatalog === 1
                ? [styles.btn_nav, styles.btn_nav_hover].join(' ')
                : styles.btn_nav
            }
          >
            By category
          </button>
          <button
            className={
              toogleHoverCatalog === 2
                ? [styles.btn_nav, styles.btn_nav_hover].join(' ')
                : styles.btn_nav
            }
            onClick={() => setToogleHoverCatalog(2)}
          >
            By brand
          </button>
        </div>
      </div>
      <div className={styles.nested_list_container}>
        <div
          className={
            toogleHoverCatalog === 1
              ? styles.nested_list_category_container
              : [styles.nested_list_category_container, styles.hide].join(' ')
          }
        >
          <HeaderCatalogNestedList
            position={styles.nested_list}
            color={styles.nested_list_color}
          />
        </div>
        <div
          className={
            toogleHoverCatalog === 2
              ? styles.brands_list_container
              : [styles.brands_list_container, styles.hide].join(' ')
          }
        >
          <CatalogByBrandsList />
        </div>
      </div>
    </div>
  );
};

export default DeskHeaderCatalogList;
