import React, { useEffect, useState } from 'react';
import styles from './cardDetail.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './cardDetail.scss';
import CardDetailNav from '../../Atoms/CardDetailNav/CardDetailNav.tsx';
import GoodsCounter from '../../Molecules/GoodsCounter/GoodsCounter.tsx';
import AboutGoodInCartDetail from '../../Molecules/AboutGoodInCartDetail/AboutGoodInCartDetail.tsx';

const CardDetail: React.FC = () => {
   const { id } = useParams();

   const { goodsCardsData } = useTypedSelector((state) => state.goodsCards);
   const { getGoodCardData } = useActions();

   // const { products } = useTypedSelector((state) => state.cart);

   const cartItem = useTypedSelector((s) =>
      s.cart.products.find((i) => i.id === id),
   );

   const { count: initialCount } = cartItem || {};
   const [count, setCount] = useState(initialCount || 0);

   useEffect(() => {
      getGoodCardData();
   }, []);

   const cardArr = goodsCardsData?.filter((item) => item.id.toString() === id);

   return (
      <div className={styles.card_wrap}>
         <Header />
         <div className={styles.card_container}>
            {cardArr?.map((item) => (
               <div className={styles.card_content} key={item.id}>
                  <CardDetailNav item={item} />
                  <h2 className={styles.card_title}>{item.title}</h2>
                  <div className={styles.row_top_logic}>
                     <div className={styles.mobTabSlider}>
                        <Swiper
                           modules={[Pagination]}
                           pagination={{
                              enabled: true,
                              el: '.swiper-pagination-mob-tab-cardDetail',
                              clickable: true,
                              bulletElement: 'div',
                              bulletClass: 'swiper-bullets-mob-tab-cardDetail',
                              bulletActiveClass:
                                 'swiper-bullets-mob-tab-cardDetail-slider-active',
                           }}
                           slidesPerView={1}
                           spaceBetween={0}
                           loop={true}
                           className="mySwiper"
                        >
                           {item.previewGalery?.map((item2) => (
                              <SwiperSlide
                                 key={item2.id}
                                 className={styles.swiper_slide}
                              >
                                 <img
                                    className={styles.slider_img}
                                    src={item2.img1}
                                    alt="Slide photo"
                                 />
                              </SwiperSlide>
                           ))}
                           <div className="swiper-pagination-mob-tab-cardDetail"></div>
                        </Swiper>
                     </div>
                     <div className={styles.add_goods_description}>
                        <div className={styles.first_description}>
                           <Link className={styles.works_done} to="#">
                              Works done with this machine
                           </Link>
                           <p className={styles.description_first}>
                              Description: <br />
                              {item.descriptionFirst}
                           </p>
                        </div>
                        <div className={styles.logic}>
                           <p className={styles.price}>{item.price} ₽</p>

                           <GoodsCounter
                              position={styles.position_counter}
                              product={item}
                              count={count}
                              id={id}
                           />
                        </div>
                        <div className={styles.btn_container}>
                           <Link to={'/basket'} className={styles.btn_style}>
                              Add to basket
                           </Link>
                        </div>
                     </div>
                  </div>
                  <AboutGoodInCartDetail goodDescription={item} />
               </div>
            ))}
         </div>
         <Footer />
      </div>
   );
};
export default CardDetail;
