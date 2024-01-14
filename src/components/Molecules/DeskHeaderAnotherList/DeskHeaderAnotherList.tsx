import React from 'react';
import styles from './DeskHeaderAnotherList.module.scss';
import { Link } from 'react-router-dom';

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
    address?: string;
  }

  const deskNavListData: IDeskNavList[] = [
    { id: '1', title: 'Promo codes', address: 'promo-codes' },
    { id: '2', title: 'Sales', address: '*' },
    { id: '3', title: 'Help', address: 'help' },
    { id: '4', title: 'About us', address: '*' },
    { id: '5', title: 'Contacts', address: '*' },
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
          <Link
            className={[styles.links, props.listLinksStyle].join(' ')}
            to={'/' + item.address}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DeskHeaderAnotherList;
