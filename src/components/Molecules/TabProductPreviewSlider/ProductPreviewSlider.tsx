import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import styles from './ProductPreviewSlider.module.scss';
import './ProductPreviewSlider.scss';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';

const ProductPreviewSlider: React.FC = () => {
  const [width] = useWindowResize();

  interface IProductPreviewSlider {
    id: string;
    title: string;
    text: string;
  }

  const productPreviewSliderArr: IProductPreviewSlider[] = [
    {
      id: '1',
      title: ' The best products in the world of tattoos',
      text: 'Equipment and consumables for the brightest and highest quality work',
    },
    {
      id: '2',
      title: ' The best products in the world of tattoos',
      text: 'Equipment and consumables for the brightest and highest quality work',
    },
    {
      id: '3',
      title: ' The best products in the world of tattoos',
      text: 'Equipment and consumables for the brightest and highest quality work',
    },
    {
      id: '4',
      title: ' The best products in the world of tattoos',
      text: 'Equipment and consumables for the brightest and highest quality work',
    },
    {
      id: '5',
      title: ' The best products in the world of tattoos',
      text: 'Equipment and consumables for the brightest and highest quality work',
    },
  ];

  return (
    <div className={styles.swiper_container}>
      <Swiper
        direction={width >= 1920 ? 'vertical' : 'horizontal'}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: '.product_preview_slider_btn_prev',
          nextEl: '.product_preview_slider_btn_next',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productPreviewSliderArr.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide_container}>
              <h2 className={styles.slide_title}>{slide.title}</h2>
              <p className={styles.slide_text}>{slide.text}</p>
              <ButtonOne
                title={'View catalog'}
                className={styles.btn_view_catalog}
                btnStyle={styles.btn_style}
              />
            </div>
          </SwiperSlide>
        ))}
        <button className="product_preview_slider_btn_prev"></button>
        <button className="product_preview_slider_btn_next"></button>
      </Swiper>
    </div>
  );
};

export default ProductPreviewSlider;
