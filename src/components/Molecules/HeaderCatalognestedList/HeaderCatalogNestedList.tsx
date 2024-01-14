import React, { useEffect } from 'react';
import styles from './HeaderCatalogNestedList.module.scss';
import { fetchNestedList } from '../../../api/Requests/Requests.ts';

// export interface InestedListVar {
//   VARIANTONE: string;
//   VARIANTTWO: string;
// }

// export const NESTEDLIST_VARIANT: InestedListVar = {
//   VARIANTONE: 'VARIANTONE',
//   VARIANTTWO: 'VARIANTTWO',
// };

// export type User = {
//   variant: string;
// };

export type props = {
  position: string;
  color: string;
};

const HeaderCatalogNestedList: React.FC<props> = (props) => {
  useEffect(() => {
    console.log(fetchNestedList());
  }, []);

  interface ICatalCategoryNested {
    id: string;
    title: string;
  }

  const catalCategoryNestedData: ICatalCategoryNested[] = [
    { id: '1', title: 'New' },
    { id: '2', title: 'Tattoo kits' },
    { id: '3', title: 'Car tattoo' },
    { id: '4', title: 'Tattoo paints' },
    { id: '5', title: 'Tattoo needles' },
    { id: '6', title: 'Tattoo holders' },
    { id: '7', title: 'Tattoo tips' },
    { id: '8', title: 'Power supplies' },
    { id: '9', title: 'Pedals and wires' },
    { id: '10', title: 'Accessories' },
    { id: '11', title: 'Printers and tablets' },
    { id: '12', title: 'Сonsumables' },
  ];

  // const css = {
  //   [NESTEDLIST_VARIANT.VARIANTONE]: styles.list,
  //   [NESTEDLIST_VARIANT.VARIANTTWO]: styles.list_two,
  // }[variant];

  return (
    <ul className={props.position}>
      {catalCategoryNestedData.map((item) => (
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
