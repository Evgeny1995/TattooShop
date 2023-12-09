import React from 'react';
import styles from './HomePopularbrandsSliderList.module.scss';
import kyroSumiImg from '../../../assets/img/PopularBrands/desk/KuroSumi.png';
import hanafyImg from '../../../assets/img/PopularBrands/desk/Hanafy.png';
import tatooReviveImg from '../../../assets/img/PopularBrands/desk/TatooRevive.png';
import aloeImg from '../../../assets/img/PopularBrands/desk/Aloe.png';
import faceBodyImg from '../../../assets/img/PopularBrands/desk/faceAndBody.png';
import H2oceanImg from '../../../assets/img/PopularBrands/desk/H2Ocean.png';

const HomePopularbrandsSliderList: React.FC = () => {
  interface IDeskHomePopularBrandsSlider {
    id: string;
    img: string;
    alt: string;
  }

  const deskHomePopularBrandsSliderArr: IDeskHomePopularBrandsSlider[] = [
    {
      id: '1',
      img: kyroSumiImg,
      alt: 'kyro sumi',
    },
    {
      id: '2',
      img: hanafyImg,
      alt: 'hanafy',
    },
    {
      id: '3',
      img: tatooReviveImg,
      alt: 'tatoo revive',
    },
    {
      id: '4',
      img: aloeImg,
      alt: 'aloe',
    },
    {
      id: '5',
      img: faceBodyImg,
      alt: 'face body',
    },
    {
      id: '6',
      img: H2oceanImg,
      alt: 'H2oceanImg',
    },
    {
      id: '7',
      img: H2oceanImg,
      alt: 'H2oceanImg',
    },
    {
      id: '8',
      img: H2oceanImg,
      alt: 'H2oceanImg',
    },
    {
      id: '9',
      img: H2oceanImg,
      alt: 'H2oceanImg',
    },
    {
      id: '10',
      img: H2oceanImg,
      alt: 'H2oceanImg',
    },
  ];

  return (
    <ul className={styles.slide_list}>
      {deskHomePopularBrandsSliderArr.map((item) => (
        <li className={styles.slide_list_item} key={item.id}>
          <a className={styles.slide_list_links} href="#">
            <img src={item.img} alt={item.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HomePopularbrandsSliderList;
