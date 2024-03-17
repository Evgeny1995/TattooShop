import React, { useEffect, useState } from 'react';
import styles from './HomeReviewSliderDesk.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeReviewSliderDesk.scss';
import type { Swiper as SwiperClass } from 'swiper/types';
import clsx from 'clsx';
import BtnSquaredTriangle from '../../Atoms/BtnSquaredTriangle/BtnSquaredTriangle.tsx';
import { Pagination } from 'swiper/modules';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';

const HomeReviewSliderDesk: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const handleNextClick = () => {
    swiper?.updateSlides();
    swiper?.slideNext();
  };
  const handlePrevClick = () => {
    swiper?.updateSlides();
    swiper?.slidePrev();
  };

  const { homeReviewArrDataList } = useTypedSelector(
    (state) => state.listState,
  );
  const { getHomeReviewArrDataList } = useActions();

  useEffect(() => {
    getHomeReviewArrDataList();
  }, []);

  return (
    <div>
      <div className={styles.review_slider_container}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            enabled: true,
            el: '.swiper-pagination-review-desk',
            clickable: true,
            bulletElement: 'div',
            bulletClass: 'swiper-bullets-review-desk',
            bulletActiveClass: 'swiper-bullets-review-slider-active-desk',
          }}
          slidesPerView={2}
          initialSlide={1}
          spaceBetween={20}
          draggable={false}
          onSwiper={setSwiper}
          className={clsx('mySwiper', styles.review_slider_wrapper)}
        >
          {homeReviewArrDataList?.map((slide) => (
            <SwiperSlide className={styles.slide} key={slide.id}>
              {(slideInfo) => (
                <div
                  className={clsx(
                    styles.review_slide_container,
                    !slideInfo.isVisible &&
                      !slideInfo.isActive &&
                      !slideInfo.isNext &&
                      styles.review_slide_opacity,
                  )}
                >
                  <div className={styles.review_slide_content}>
                    <div className={styles.top_border}>
                      <div className={styles.top_border_content}></div>
                    </div>

                    <img
                      className={styles.review_slide_avatar}
                      src={slide.avatar}
                      alt=""
                    />
                    <p className={styles.review_slide_text}>
                      {slide.description}
                    </p>
                    <a className={styles.review_slide_email} href="#">
                      <svg
                        className={styles.review_slide_email_icon}
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="27"
                          height="27"
                          fill="#050402"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="27"
                          height="27"
                          stroke="#BB8C5F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.7021 6.04833C11.5554 6.0095 11.8281 6 14.0008 6H13.9983C16.1716 6 16.4433 6.0095 17.2966 6.04833C18.1483 6.08733 18.73 6.22217 19.24 6.42C19.7667 6.62417 20.2117 6.89751 20.6567 7.34252C21.1017 7.78719 21.375 8.23353 21.58 8.7597C21.7767 9.26837 21.9117 9.84971 21.9517 10.7014C21.99 11.5547 22 11.8274 22 14.0001C22 16.1728 21.99 16.4448 21.9517 17.2981C21.9117 18.1495 21.7767 18.731 21.58 19.2398C21.375 19.7658 21.1017 20.2122 20.6567 20.6568C20.2122 21.1018 19.7665 21.3758 19.2405 21.5802C18.7315 21.778 18.1495 21.9129 17.2978 21.9519C16.4445 21.9907 16.1726 22.0002 13.9998 22.0002C11.8272 22.0002 11.5547 21.9907 10.7014 21.9519C9.84988 21.9129 9.26837 21.778 8.75937 21.5802C8.23353 21.3758 7.78719 21.1018 7.34268 20.6568C6.89784 20.2122 6.62451 19.7658 6.42 19.2397C6.22234 18.731 6.0875 18.1496 6.04833 17.298C6.00967 16.4446 6 16.1728 6 14.0001C6 11.8274 6.01 11.5546 6.04817 10.7012C6.0865 9.84988 6.2215 9.26837 6.41984 8.75953C6.62484 8.23353 6.89818 7.78719 7.34318 7.34252C7.78785 6.89768 8.23419 6.62434 8.76037 6.42C9.26904 6.22217 9.85038 6.08733 10.7021 6.04833ZM13.7339 7.44161H13.7342L14.0008 7.44168C16.1369 7.44168 16.39 7.44935 17.2336 7.48768C18.0136 7.52335 18.4369 7.65369 18.7189 7.76319C19.0922 7.90819 19.3584 8.08152 19.6382 8.36153C19.9182 8.64153 20.0916 8.9082 20.2369 9.28154C20.3464 9.56321 20.4769 9.98655 20.5124 10.7666C20.5508 11.6099 20.5591 11.8632 20.5591 13.9983C20.5591 16.1333 20.5508 16.3866 20.5124 17.23C20.4768 18.01 20.3464 18.4333 20.2369 18.715C20.0919 19.0883 19.9182 19.3542 19.6382 19.634C19.3582 19.914 19.0924 20.0873 18.7189 20.2323C18.4372 20.3423 18.0136 20.4723 17.2336 20.508C16.3902 20.5463 16.1369 20.5547 14.0008 20.5547C11.8647 20.5547 11.6115 20.5463 10.7681 20.508C9.98813 20.472 9.56479 20.3417 9.28262 20.2322C8.90929 20.0872 8.64262 19.9138 8.36261 19.6338C8.08261 19.3538 7.90927 19.0878 7.76394 18.7143C7.65444 18.4326 7.52394 18.0093 7.48844 17.2293C7.4501 16.386 7.44244 16.1326 7.44244 13.9963C7.44244 11.8599 7.4501 11.6079 7.48844 10.7646C7.5241 9.98455 7.65444 9.56121 7.76394 9.27921C7.90894 8.90587 8.08261 8.6392 8.36261 8.35919C8.64262 8.07919 8.90929 7.90586 9.28262 7.76052C9.56463 7.65052 9.98813 7.52052 10.7681 7.48468C11.5062 7.45135 11.7922 7.44135 13.2832 7.43968V7.44168C13.4224 7.44147 13.5722 7.44153 13.7339 7.44161ZM18.2713 8.77004C17.7413 8.77004 17.3113 9.19955 17.3113 9.72972C17.3113 10.2597 17.7413 10.6897 18.2713 10.6897C18.8013 10.6897 19.2313 10.2597 19.2313 9.72972C19.2313 9.19971 18.8013 8.76971 18.2713 8.76971V8.77004Z"
                          fill="#BB8C5F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.89233 14C9.89233 11.7312 11.7318 9.89169 14.0005 9.8916C16.2694 9.8916 18.1084 11.7311 18.1084 14C18.1084 16.2688 16.2696 18.1075 14.0007 18.1075C11.7319 18.1075 9.89233 16.2688 9.89233 14ZM16.6673 14C16.6673 12.5271 15.4732 11.3333 14.0006 11.3333C12.5277 11.3333 11.3339 12.5271 11.3339 14C11.3339 15.4726 12.5277 16.6667 14.0006 16.6667C15.4732 16.6667 16.6673 15.4726 16.6673 14Z"
                          fill="#BB8C5F"
                        />
                      </svg>
                      <p>{slide.email}</p>
                    </a>
                    <div className={styles.bottom_border}>
                      <div className={styles.bottom_border_content}></div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-review-desk"></div>
        <div className={styles.btn_position}>
          <BtnSquaredTriangle
            position={styles.btn_position_prev}
            onClick={handlePrevClick}
          />
          <BtnSquaredTriangle
            position={styles.btn_position_next}
            onClick={handleNextClick}
          />
        </div>

        {/*<button onClick={handlePrevClick}>Prev</button>*/}
        {/*<button onClick={handleNextClick}>Next</button>*/}
      </div>
    </div>
  );
};

export default HomeReviewSliderDesk;
