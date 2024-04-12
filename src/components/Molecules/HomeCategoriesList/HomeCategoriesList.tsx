import React from 'react';
import Categories from '../../Atoms/Categories/Categories.tsx';
import styles from './HomeCategoriesList.module.scss';

const HomeCategoriesList: React.FC = () => {
  return (
    <div className={styles.home_categories_wrap}>
      <div className={styles.home_categories_wrap}>
        <Categories />
      </div>
    </div>
  );
};

export default HomeCategoriesList;
