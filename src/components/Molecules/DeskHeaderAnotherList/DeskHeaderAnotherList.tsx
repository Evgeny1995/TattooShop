import React, { useEffect } from 'react';
import styles from './DeskHeaderAnotherList.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

export type props = {
  listStyle?: string;
  listItemStyle?: string;
  listLinksStyle?: string;
  listLinksHoverStyle?: string;
};

const DeskHeaderAnotherList: React.FC<props> = (props) => {
  // const deskNavList = '/deskNavList';
  const { deskHeaderAnotherList } = useTypedSelector((state) => state.listState);
  const { getDeskHeaderAnotherList } = useActions();

  useEffect(() => {
    getDeskHeaderAnotherList();
  }, []);

  return (
    <ul
      className={[
        styles.desk__header_nav_list__container,
        props.listStyle,
      ].join(' ')}
    >
      { deskHeaderAnotherList?.map((item) => (
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
