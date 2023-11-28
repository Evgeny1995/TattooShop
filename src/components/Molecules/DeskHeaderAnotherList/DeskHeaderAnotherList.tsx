import React from 'react';
import styles from './DeskHeaderAnotherList.module.scss';

const DeskHeaderAnotherList: React.FC = () => {
  interface IDeskNavList {
    id: string;
    title: string;
  }

  const deskNavListData: IDeskNavList[] = [
    { id: '1', title: 'Promo codes' },
    { id: '2', title: 'Sales' },
    { id: '3', title: 'Help' },
    { id: '4', title: 'About us' },
    { id: '5', title: 'Contacts' },
  ];

  return (
    <ul className={styles.desk__header_nav_list__container}>
      {deskNavListData.map((item) => (
        <li key={item.id} className={styles.item}>
          <a className={styles.links} href="">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DeskHeaderAnotherList;
