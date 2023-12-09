import React from 'react';
import styles from './HomePopularBrands.module.scss';
import kyroSumiImg from './../../../assets/img/PopularBrands/KuroSumi.png';
import hanafyImg from './../../../assets/img/PopularBrands/Hanafy.png';
import tatooReviveImg from './../../../assets/img/PopularBrands/TatooRevive.png';
import aloeImg from './../../../assets/img/PopularBrands/Aloe.png';
import faceBodyImg from './../../../assets/img/PopularBrands/faceAndBody.png';
import H2oceanImg from './../../../assets/img/PopularBrands/H2Ocean.png';
import kyroSumiImgTab from './../../../assets/img/PopularBrands/tab/KuroSumi.png';
import hanafyImgTab from './../../../assets/img/PopularBrands/tab/Hanafy.png';
import tatooReviveImgTab from './../../../assets/img/PopularBrands/tab/TatooRevive.png';
import aloeImgTab from './../../../assets/img/PopularBrands/tab/Aloe.png';
import faceBodyImgTab from './../../../assets/img/PopularBrands/tab/faceAndBody.png';
import H2oceanImgTab from './../../../assets/img/PopularBrands/tab/H2Ocean.png';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import HomePopularBrandsDeskSlider from '../HomePopularBrandsDeskSlider/HomePopularBrandsDeskSlider.tsx';

const HomePopularBrands: React.FC = () => {
  const [width] = useWindowResize();

  interface IMobTabHomePopularBrands {
    id: string;
    img: string;
    imgTab: string;
    alt: string;
  }

  const mobTabHomePopularBrandsArr: IMobTabHomePopularBrands[] = [
    {
      id: '1',
      img: kyroSumiImg,
      imgTab: kyroSumiImgTab,
      alt: 'kyro sumi',
    },
    {
      id: '2',
      img: hanafyImg,
      imgTab: hanafyImgTab,
      alt: 'hanafy',
    },
    {
      id: '3',
      img: tatooReviveImg,
      imgTab: tatooReviveImgTab,
      alt: 'tatoo revive',
    },
    {
      id: '4',
      img: aloeImg,
      imgTab: aloeImgTab,
      alt: 'aloe',
    },
    {
      id: '5',
      img: faceBodyImg,
      imgTab: faceBodyImgTab,
      alt: 'face body',
    },
    {
      id: '6',
      img: H2oceanImg,
      imgTab: H2oceanImgTab,
      alt: 'H2oceanImg',
    },
  ];

  return (
    <div className={styles.home_popular_brands_container}>
      <div className={styles.home_popular_brands_content}>
        <div className={styles.popular_brands_title_container}>
          <h3 className={styles.popular_brands_title}>Popular brands</h3>
          <a className={styles.popular_brands_link_all} href="#">
            See all
          </a>
        </div>
        <ul className={styles.popular_brands_list}>
          {mobTabHomePopularBrandsArr.map((item) => (
            <li className={styles.list_item} key={item.id}>
              <a className={styles.item_links} href="#">
                <img
                  src={width <= 768 ? item.img : item.imgTab}
                  alt={item.alt}
                />
              </a>
            </li>
          ))}
        </ul>
        <HomePopularBrandsDeskSlider />
      </div>
    </div>
  );
};

export default HomePopularBrands;
