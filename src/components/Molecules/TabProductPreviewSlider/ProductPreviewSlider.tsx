import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import styles from './ProductPreviewSlider.module.scss';
import './ProductPreviewSlider.scss';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';
import { TypeList1 } from '../../../types/list.ts';
import { fetchList } from '../../../api/Requests/Requests.ts';

const ProductPreviewSlider: React.FC = () => {
  const [productPreviewSliderArr, setProductPreviewSliderArr] = useState<
    TypeList1[]
  >([]);

  const [width] = useWindowResize();

  const productPreviewSliderData = '/productPreviewSliderData';

  const getData = async () => {
    try {
      const res = await fetchList(productPreviewSliderData);
      setProductPreviewSliderArr(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.swiper_container}>
      <Swiper
        direction={width >= 1920 ? 'vertical' : 'horizontal'}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: '.product_preview_slider_btn_prev',
          nextEl: '.product_preview_slider_btn_next',
        }}
        pagination={{
          el: '.swiper_pagination_product_slider',
          clickable: true,
          bulletElement: 'div',
          bulletClass: 'swiper-bullets-product-slider',
          bulletActiveClass: 'swiper-bullets-product-slider-active',
        }}
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
        <div className="swiper_pagination_product_slider"></div>
        <button className="product_preview_slider_btn_prev"></button>
        <button className="product_preview_slider_btn_next"></button>
      </Swiper>
    </div>
  );
};

export default ProductPreviewSlider;
