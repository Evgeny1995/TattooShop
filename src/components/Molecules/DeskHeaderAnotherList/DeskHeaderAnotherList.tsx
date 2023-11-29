import React from 'react';
import styles from './DeskHeaderAnotherList.module.scss';

export type props = {
  listStyle?: string;
  listItemStyle?: string;
  listLinksStyle?: string;
  listLinksHoverStyle?: string;
};

const DeskHeaderAnotherList: React.FC<props> = (props) => {
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
    <ul
      className={[
        styles.desk__header_nav_list__container,
        props.listStyle,
      ].join(' ')}
    >
      {deskNavListData.map((item) => (
        <li
          key={item.id}
          className={[
            styles.item,
            props.listLinksHoverStyle,
            props.listItemStyle,
          ].join(' ')}
        >
          <a
            className={[styles.links, props.listLinksStyle].join(' ')}
            href="#"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DeskHeaderAnotherList;
