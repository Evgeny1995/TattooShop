import React, { useState } from 'react';
import styles from './Socials.module.scss';
import telegram from './../../../assets/svg/Socials/Telegram_black.svg';
import viber from './../../../assets/svg/Socials/Viber.svg';
import whatsapp from './../../../assets/svg/Socials/WhatsAppr.svg';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';

const Socials: React.FC = () => {
  interface ISocialsData {
    id: string;
    title: string;
    number: string;
    icon: string;
  }

  const [width] = useWindowResize();

  const SocialsData: ISocialsData[] = [
    { id: '1', title: 'Viber', number: '8 852 555-66-77', icon: viber },
    { id: '2', title: 'Whats App', number: '8 852 552-52-52', icon: whatsapp },
    { id: '3', title: 'Telegram', number: '8 852 666-77-88', icon: telegram },
  ];

  const [socialNumber, setSocialNumber] = useState<string>(
    SocialsData[0].number,
  );

  return (
    <div>
      <div className={styles.socials_number__current}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 7.37753L8.30288 5.00627C8.30288 5.00627 8.39654 4.90627 9.00967 5.50499C9.6228 6.10371 11.7383 8.86252 11.7383 8.86252L11.0142 11.8828L16.633 17.4993L19.6524 16.7763L22.9923 19.2441L23.5089 20.2115L21.1375 23.5142L17.5132 23.4803L5.03389 11.0017L5 7.37753Z"
            stroke="#FAF6F2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className={styles.socials_number__text}>{socialNumber}</p>
      </div>
      <ul className={styles.socials__list}>
        <li
          className={
            socialNumber === SocialsData[0].number
              ? [styles.socials_list__item, styles.socials_list__hover].join(
                  ' ',
                )
              : styles.socials_list__item
          }
        >
          {width >= 1920 ? (
            <p
              className={styles.desk_item}
              onClick={() => setSocialNumber(SocialsData[0].number)}
            >
              {SocialsData[0].title}
            </p>
          ) : (
            <img
              onClick={() => setSocialNumber(SocialsData[0].number)}
              className={styles.mob_item}
              src={SocialsData[0].icon}
              alt={SocialsData[0].title}
            />
          )}
        </li>
        <li
          className={
            socialNumber === SocialsData[1].number
              ? [styles.socials_list__item, styles.socials_list__hover].join(
                  ' ',
                )
              : styles.socials_list__item
          }
        >
          {width >= 1920 ? (
            <p
              className={styles.desk_item}
              onClick={() => setSocialNumber(SocialsData[1].number)}
            >
              {SocialsData[1].title}
            </p>
          ) : (
            <img
              onClick={() => setSocialNumber(SocialsData[1].number)}
              className={styles.mob_item}
              src={SocialsData[1].icon}
              alt={SocialsData[1].title}
            />
          )}
        </li>
        <li
          className={
            socialNumber === SocialsData[2].number
              ? [styles.socials_list__item, styles.socials_list__hover].join(
                  ' ',
                )
              : styles.socials_list__item
          }
        >
          {width >= 1920 ? (
            <p
              className={styles.desk_item}
              onClick={() => setSocialNumber(SocialsData[2].number)}
            >
              {SocialsData[2].title}
            </p>
          ) : (
            <img
              onClick={() => setSocialNumber(SocialsData[2].number)}
              className={styles.mob_item}
              src={SocialsData[2].icon}
              alt={SocialsData[2].title}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Socials;
