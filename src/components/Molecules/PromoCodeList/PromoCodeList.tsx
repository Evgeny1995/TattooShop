import React from 'react';
import styles from './PromoCodeList.module.scss';
import img1 from './../../../assets/img/promoCodes/1.png';
import img2 from './../../../assets/img/promoCodes/2.png';
import img3 from './../../../assets/img/promoCodes/3.png';
import img4 from './../../../assets/img/promoCodes/4.png';
import img5 from './../../../assets/img/promoCodes/5.png';
import img6 from './../../../assets/img/promoCodes/6.png';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';

const PromoCodeList: React.FC = () => {
  interface IpromoCodesList {
    id: string;
    img: string;
    title: string;
    text1: string;
    text2: string;
    text3?: string;
  }

  const promoCodesListArr: IpromoCodesList[] = [
    {
      id: '1',
      img: img1,
      title: 'Pack "Summer"',
      text1:
        'The hottest summer of the century does not want to go away and gives you new colors until the end of the season.',
      text2:
        'When purchasing from 5500₽ you will receive a 1% discount on absolutely any product! Hurry up to color your life with the helmets of summer!',
    },
    {
      id: '2',
      img: img2,
      title: 'Pack "Black swan"',
      text1: 'Tattoo set + 2 packs, 2 needles',
      text2:
        'Especially for the bold and daring, there is a super advantageous offer: when you buy two tattoo kits and two packs of needles, you will receive a full 5% discount on the design of your dreams.',
      text3: 'Take action and you will be invincible!',
    },
    {
      id: '3',
      img: img3,
      title: 'Pack "Porcupine"',
      text1: '5 needles + 5 tips',
      text2:
        'When purchasing from 5500₽ you will receive a 1% discount on absolutely any product! Hurry up to color your life with the helmets of summer!',
      text3: 'Time to prove yourself, don`t miss the moment!',
    },
    {
      id: '4',
      img: img4,
      title: 'Pack "Summer"',
      text1:
        'The hottest summer of the century does not want to go away and gives you new colors until the end of the season.',
      text2:
        'When purchasing from 5500₽ you will receive a 1% discount on absolutely any product! Hurry up to color your life with the helmets of summer!',
    },
    {
      id: '5',
      img: img5,
      title: 'Pack "Black swan"',
      text1: 'Tattoo set + 2 packs, 2 needles',
      text2:
        'Especially for the bold and daring, there is a super advantageous offer: when you buy two tattoo kits and two packs of needles, you will receive a full 5% discount on the design of your dreams.',
      text3: 'Take action and you will be invincible!',
    },
    {
      id: '6',
      img: img6,
      title: 'Pack "Porcupine"',
      text1: '5 needles + 5 tips',
      text2:
        'When purchasing from 5500₽ you will receive a 1% discount on absolutely any product! Hurry up to color your life with the helmets of summer!',
      text3: 'Time to prove yourself, don`t miss the moment!',
    },
  ];

  return (
    <div className={styles.promo_list_container}>
      <ul className={styles.promo_list}>
        {promoCodesListArr.map((item) => (
          <li key={item.id} className={styles.promo_list_item}>
            <img className={styles.item_img} src={item.img} alt={item.title} />
            <div className={styles.text_container}>
              <h3 className={styles.item_title}>{item.title}</h3>
              <p className={styles.item_text1}>{item.text1}</p>
              <p className={styles.item_text2}>{item.text2}</p>
              <p className={styles.item_text3}>{item.text3}</p>
            </div>
            <ButtonOne
              title={'Copy promo code'}
              className={styles.btn_view_catalog}
              btnStyle={styles.btn_style}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoCodeList;
