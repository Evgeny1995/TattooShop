import React from 'react';
import styles from './CatalogByBrandsList.module.scss';

export type props = {
  color?: string;
  positionList?: string;
  positionItem?: string;
};

const CatalogByBrandsList: React.FC<props> = (props) => {
  interface Ibrands {
    id: number;
    title: string;
  }

  const brandsArr: Ibrands[] = [
    { id: 1, title: 'Aliance' },
    { id: 2, title: 'Aloe Tattoo' },
    { id: 3, title: 'Anchored by Nikko Hurtado' },
    { id: 4, title: 'BC Invention Comrany' },
    { id: 5, title: 'Beauty Bit' },
    { id: 6, title: 'Bishop Rotary' },
    { id: 7, title: 'Burlak Tattoo Machines' },
    { id: 8, title: 'Cheyenne HAWK' },
    { id: 9, title: 'Critical Tattoo' },
    { id: 10, title: 'Dermalize Protective' },
    { id: 11, title: 'Dynamic Colors' },
    { id: 12, title: 'EGO Bez’s Rotary' },
    { id: 13, title: 'Eikon Device Inc.' },
    { id: 14, title: 'Electrum' },
    { id: 15, title: 'EQUALISER by Kwadron' },
    { id: 16, title: 'Eternal' },
    { id: 17, title: 'Excalibur' },
    { id: 18, title: 'Fantasia Art Supply' },
    { id: 19, title: 'FKirons' },
    { id: 20, title: 'Hanafy' },
    { id: 21, title: 'HM Tattoo Machines' },
    { id: 22, title: 'Ink Machines' },
    { id: 23, title: 'InkJecta Tattoo Machine' },
    { id: 24, title: 'Intenze' },
    { id: 25, title: 'JACK & ALEXX' },
    { id: 26, title: 'Kashalot Rotary' },
    { id: 27, title: 'Kuro Sumi' },
    { id: 28, title: 'KWADRON™' },
    { id: 29, title: 'Lauro Paolini' },
    { id: 30, title: 'Lithuanian Irons' },
    { id: 31, title: 'Lucky Supply' },
    { id: 32, title: 'Mercator Medical' },
    { id: 33, title: 'Millenium Mom’s Ink' },
    { id: 34, title: 'NEMESIS' },
    { id: 35, title: 'Nocturnal Tattoo Ink' },
    { id: 36, title: 'Panthera' },
    { id: 37, title: 'Perma Blend' },
    { id: 38, title: 'Precision Needles' },
    { id: 39, title: 'Precision Tattoo Supply' },
    { id: 40, title: 'Premier Products' },
    { id: 41, title: 'Radiant' },
    { id: 42, title: 'Reprofx® Spirit™' },
    { id: 43, title: 'Right Stuuf' },
    { id: 44, title: 'S8TATTOO' },
    { id: 45, title: 'Skinductor' },
    { id: 46, title: 'Starbrite' },
    { id: 47, title: 'Tattoorevive' },
    { id: 48, title: 'TURANIUM Fabrika Rotary' },
    { id: 49, title: 'UNI–CART' },
    { id: 50, title: 'Vlad Blad' },
    { id: 51, title: 'World Famous Bala' },
    { id: 52, title: 'World Famous Tattoo Ink' },
    { id: 53, title: '2K2BT' },
    { id: 54, title: 'БРОВИ' },
    { id: 55, title: 'КРАСКА Tattoo Ink' },
  ];

  return (
    <ul className={[styles.brand_list, props.positionList].join(' ')}>
      {brandsArr.map((item) => (
        <li className={[styles.brand_list_item, props.positionItem].join(' ')}>
          <a
            className={[styles.brand_item_links, props.color].join(' ')}
            href="#"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CatalogByBrandsList;
