import React from 'react';
import styles from './HomePopularBrandsDeskSlider.module.scss';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomePopularbrandsSliderList from '../HomePopularbrandsSliderItem/HomePopularbrandsSliderList.tsx';
import './HomePopularBrandsDeskSlider.scss';

const HomePopularBrandsDeskSlider: React.FC = () => {
  interface ISlidesNumbers {
    id: string;
  }

  const slidesNumbersArr: ISlidesNumbers[] = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  return (
    <div className={styles.slider_container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        navigation={{
          prevEl: '.home_popular_brands_btn_prev',
          nextEl: '.home_popular_brands_btn_next',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slidesNumbersArr.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HomePopularbrandsSliderList />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="home_popular_brands_btn_prev"></button>
      <button className="home_popular_brands_btn_next"></button>
    </div>
  );
};

export default HomePopularBrandsDeskSlider;
