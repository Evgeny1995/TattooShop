import React, { useEffect, useState } from 'react';
import styles from './DeskHeaderAnotherList.module.scss';
import { NavLink } from 'react-router-dom';
import { TypeList1 } from '../../../api/Types/Types.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';
import clsx from 'clsx';

export type props = {
  listStyle?: string;
  listItemStyle?: string;
  listLinksStyle?: string;
  listLinksHoverStyle?: string;
};

const DeskHeaderAnotherList: React.FC<props> = (props) => {
  const deskNavList = '/deskNavList';
  const [deskNavListData, getDeskNavListData] = useState<TypeList1[]>([]);
  const getData = async () => {
    try {
      const res = await fetchList(deskNavList);
      getDeskNavListData(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          <NavLink
            className={({ isActive }) =>
              [
                isActive
                  ? clsx(styles.links, props.listLinksStyle)
                  : styles.links,
              ].join(' ')
            }
            to={'/' + item.address}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DeskHeaderAnotherList;
