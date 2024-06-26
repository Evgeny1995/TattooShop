import React, { useState } from 'react';
import styles from './Header.module.scss';
import HeaderMobMenu from '../../Molecules/HeaderMobMenu/HeaderNavMobMenu.tsx';
import menuIcon from './../../../assets/svg/mob-menu-icon.svg';
import closeMenuIcon from './../../../assets/svg/mobMenuCloseIcon.svg';
import Input from '../../Atoms/Input/Input.tsx';
import Socials from '../../Molecules/Sosials/Socials.tsx';
import MailLinks from '../../Atoms/MailLinks/MailLinks.tsx';
import MobMenuLine from '../../Atoms/MobMenuLine/MobMenuLine.tsx';
import Logotype from '../../Atoms/Logotype/Logotype.tsx';
import DeskHeaderCatalog from '../../Molecules/DeskHeaderCatalog/DeskHeaderCatalog.tsx';
import DeskHeaderAnotherList from '../../Molecules/DeskHeaderAnotherList/DeskHeaderAnotherList.tsx';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import {
   totalPrice,
   totalUnitsCount,
} from '../../../hooks/basketPaymentHooks.ts';

const Header: React.FC = () => {
   const [menuToogleActive, setMenuToogleActive] = useState<boolean>(true);
   const { products } = useTypedSelector((s) => s.cart);

   return (
      <header className={styles.header__wrap}>
         <div className={styles.header__content}>
            <div className={styles.header__col_one}>
               <div className={styles.col_one__contact_block__position}>
                  <div className={styles.header__sosials}>
                     <Socials />
                  </div>
                  <div className={styles.header_mail_link}>
                     <MailLinks />
                  </div>
               </div>

               <div className={styles.header__logotype}>
                  <Logotype />
               </div>
               <div className={styles.nav_menu__container}>
                  <button
                     className={styles.nav_menu__btn}
                     onClick={() => setMenuToogleActive(!menuToogleActive)}
                  >
                     Menu
                     <img
                        className={styles.mob_menu__icon}
                        src={menuToogleActive ? menuIcon : closeMenuIcon}
                        alt=""
                     />
                  </button>
               </div>
               <div className={styles.tab_header_search}>
                  <Input
                     placeholder={'Search'}
                     className={styles.input_container}
                  />
               </div>
               <div className={styles.col_one__setings_block__position}>
                  <div className={styles.basket}>
                     <Link to={'/basket'} className={styles.basket_text}>
                        {totalPrice(products)} ₽
                        <span className={styles.sup_units_count}>
                           {totalUnitsCount(products) == undefined
                              ? 0
                              : totalUnitsCount(products)}
                        </span>
                     </Link>
                  </div>
                  <div className={styles.header_favorites}>
                     <a className={styles.favorites_link} href="#">
                        <svg
                           className={styles.favorites_svg}
                           width="28"
                           height="28"
                           viewBox="0 0 28 28"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M6.74399 13.7906C6.31564 13.3621 5.98384 12.847 5.77086 12.2798C5.55787 11.7127 5.46861 11.1065 5.50907 10.502C5.54952 9.89748 5.71875 9.30861 6.00542 8.77486C6.29208 8.24111 6.68955 7.77482 7.17118 7.40726C7.6528 7.03969 8.20744 6.77935 8.79792 6.64369C9.38839 6.50802 10.001 6.50017 10.5948 6.62066C11.1886 6.74115 11.7497 6.9872 12.2406 7.3423C12.7315 7.6974 13.1407 8.15336 13.441 8.67958H14.559C14.8592 8.15336 15.2685 7.6974 15.7594 7.3423C16.2503 6.9872 16.8114 6.74115 17.4052 6.62066C17.9989 6.50017 18.6116 6.50802 19.2021 6.64369C19.7925 6.77935 20.3472 7.03969 20.8288 7.40726C21.3104 7.77482 21.7079 8.24111 21.9946 8.77486C22.2812 9.30861 22.4505 9.89748 22.4909 10.502C22.5314 11.1065 22.4421 11.7127 22.2291 12.2798C22.0161 12.847 21.6843 13.3621 21.256 13.7906L14 21.0486L6.74399 13.7916V13.7906ZM21.962 14.5006C22.4741 13.9884 22.8747 13.3758 23.1386 12.7013C23.4025 12.0268 23.524 11.3049 23.4954 10.5812C23.4669 9.85747 23.2888 9.14748 22.9725 8.49589C22.6563 7.84429 22.2086 7.26519 21.6576 6.795C21.1067 6.32481 20.4644 5.97371 19.7712 5.76378C19.078 5.55384 18.3488 5.48962 17.6296 5.57514C16.9104 5.66067 16.2166 5.89409 15.592 6.26074C14.9673 6.62738 14.4253 7.11931 14 7.70558C13.5747 7.11931 13.0326 6.62738 12.408 6.26074C11.7833 5.89409 11.0896 5.66067 10.3704 5.57514C9.65113 5.48962 8.92198 5.55384 8.22877 5.76378C7.53556 5.97371 6.89328 6.32481 6.34234 6.795C5.7914 7.26519 5.34371 7.84429 5.02743 8.49589C4.71115 9.14748 4.53312 9.85747 4.50453 10.5812C4.47594 11.3049 4.59742 12.0268 4.86133 12.7013C5.12523 13.3758 5.52585 13.9884 6.03799 14.5006L14 22.4616L21.962 14.5016V14.5006Z"
                              fill="#FAF6F2"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.04399 13.6673L14 20.6243L21.0438 13.5785L21.256 13.7906L14 21.0486L6.74399 13.7916V13.7906C6.31564 13.3621 5.98384 12.847 5.77086 12.2798C5.55787 11.7127 5.46861 11.1065 5.50907 10.502C5.54952 9.89748 5.71875 9.30861 6.00542 8.77486C6.29208 8.24111 6.68955 7.77482 7.17118 7.40726C7.6528 7.03969 8.20744 6.77935 8.79792 6.64369C9.38839 6.50802 10.001 6.50017 10.5948 6.62066C11.1886 6.74115 11.7497 6.9872 12.2406 7.3423C12.7315 7.6974 13.1407 8.15336 13.441 8.67958H14.559C14.8592 8.15336 15.2685 7.6974 15.7594 7.3423C16.2503 6.9872 16.8114 6.74115 17.4052 6.62066C17.9989 6.50017 18.6116 6.50802 19.2021 6.64369C19.7925 6.77935 20.3472 7.03969 20.8288 7.40726C21.3104 7.77482 21.7079 8.24111 21.9946 8.77486C22.2812 9.30861 22.4505 9.89748 22.4909 10.502C22.5314 11.1065 22.4421 11.7127 22.2291 12.2798C22.0161 12.847 21.6843 13.3621 21.256 13.7906L21.0438 13.5785C21.4419 13.1803 21.7503 12.7015 21.9483 12.1744C22.1462 11.6472 22.2292 11.0838 22.1916 10.522C22.154 9.96018 21.9967 9.41288 21.7303 8.91681C21.4638 8.42073 21.0944 7.98736 20.6468 7.64574C20.1992 7.30412 19.6837 7.06216 19.1349 6.93607C18.5861 6.80998 18.0167 6.80269 17.4648 6.91467C16.913 7.02666 16.3915 7.25533 15.9352 7.58537C15.479 7.91541 15.0986 8.33917 14.8196 8.82825L14.7332 8.97958H13.2668L13.1804 8.82825C12.9014 8.33917 12.521 7.91541 12.0647 7.58537C11.6085 7.25533 11.087 7.02666 10.5351 6.91467C9.98329 6.80269 9.41389 6.80998 8.86509 6.93607C8.3163 7.06216 7.80081 7.30412 7.35318 7.64574C6.90556 7.98736 6.53614 8.42073 6.26971 8.91681C6.00328 9.41288 5.846 9.96018 5.8084 10.522C5.7708 11.0838 5.85375 11.6472 6.05171 12.1744C6.24966 12.7015 6.55803 13.1803 6.95615 13.5785L7.04399 13.6673ZM6.03799 14.5006C5.52585 13.9884 5.12523 13.3758 4.86133 12.7013C4.59742 12.0268 4.47594 11.3049 4.50453 10.5812C4.53312 9.85747 4.71115 9.14748 5.02743 8.49589C5.34371 7.84429 5.7914 7.26519 6.34234 6.795C6.89328 6.32481 7.53556 5.97371 8.22877 5.76378C8.92198 5.55384 9.65113 5.48962 10.3704 5.57514C11.0896 5.66067 11.7833 5.89409 12.408 6.26074C12.9428 6.57466 13.4171 6.98043 13.8094 7.45862C13.8753 7.53893 13.9388 7.62128 14 7.70558C14.0611 7.62128 14.1247 7.53893 14.1906 7.45862C14.5829 6.98043 15.0571 6.57466 15.592 6.26074C16.2166 5.89409 16.9104 5.66067 17.6296 5.57514C18.3488 5.48962 19.078 5.55384 19.7712 5.76378C20.4644 5.97371 21.1067 6.32481 21.6576 6.795C22.2086 7.26519 22.6563 7.84429 22.9725 8.49589C23.2888 9.14748 23.4669 9.85747 23.4954 10.5812C23.524 11.3049 23.4025 12.0268 23.1386 12.7013C22.8747 13.3758 22.4741 13.9884 21.962 14.5006V14.5016L14 22.4616L6.03799 14.5006ZM22.262 14.6228V14.6259L14 22.8858L5.82587 14.7127C5.28446 14.1713 4.86093 13.5236 4.58195 12.8106C4.30296 12.0975 4.17454 11.3345 4.20476 10.5694C4.23498 9.80428 4.42319 9.05371 4.75755 8.36488C5.0919 7.67605 5.56517 7.06386 6.14759 6.5668C6.73002 6.06975 7.40899 5.69858 8.14181 5.47665C8.87463 5.25472 9.64545 5.18683 10.4058 5.27724C11.1661 5.36766 11.8995 5.61442 12.5599 6.00201C13.1066 6.32292 13.5935 6.73463 14 7.21856C14.4065 6.73463 14.8934 6.32292 15.4401 6.00201C16.1005 5.61442 16.8339 5.36766 17.5942 5.27724C18.3545 5.18683 19.1253 5.25472 19.8582 5.47665C20.591 5.69858 21.27 6.06975 21.8524 6.5668C22.4348 7.06386 22.9081 7.67605 23.2424 8.36488C23.5768 9.05371 23.765 9.80428 23.7952 10.5694C23.8254 11.3345 23.697 12.0975 23.418 12.8106C23.1543 13.4846 22.7615 14.1002 22.262 14.6228Z"
                              fill="#FAF6F2"
                           />
                        </svg>
                     </a>
                  </div>
                  <div className={styles.header_users}>
                     <a className={styles.user_link} href="#">
                        <svg
                           className={styles.user_svg}
                           width="28"
                           height="28"
                           viewBox="0 0 28 28"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M23 23.5V19H6V23.5"
                              stroke="#FAF6F2"
                              strokeWidth="1.4"
                           />
                           <circle
                              cx="14.5"
                              cy="10.5"
                              r="4.8"
                              stroke="#FAF6F2"
                              strokeWidth="1.4"
                           />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles.desk__header_line}>
               <MobMenuLine />
            </div>

            <div className={styles.header__col_two}>
               <DeskHeaderCatalog />
               <div className={styles.desk_search}>
                  <Input placeholder={'Search'} className={styles.inp} />
               </div>
               <div className={styles.desk_another_list_container}>
                  <DeskHeaderAnotherList listLinksStyle={styles.active} />
               </div>
            </div>
         </div>

         <HeaderMobMenu menuToogleActive={menuToogleActive} />
      </header>
   );
};

export default Header;
