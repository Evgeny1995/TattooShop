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
import DescriptionInAboutGood from '../../Atoms/DescriptionInAboutGood/DescriptionInAboutGood.tsx';
import CardDetailHaracteristics from '../../Atoms/CardDetailHaracteristics/CardDetailHaracteristics.tsx';
import CardDetailGallery from '../../Molecules/CardDetailGallery/CardDetailGallery.tsx';

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
                     <div className={styles.card_detail_desk_galery_container}>
                        <CardDetailGallery galleryImg={item} />
                     </div>
                     <div className={styles.add_goods_description}>
                        <div className={styles.first_description}>
                           <Link className={styles.works_done} to="#">
                              Works done with this machine
                           </Link>
                           <h2 className={styles.card_title_desk}>
                              {item.title}
                           </h2>
                           <p className={styles.price_desk}>{item.price} ₽</p>

                           <p className={styles.description_first}>
                              Description: <br />
                              {item.descriptionFirst}
                           </p>
                           <Link className={styles.works_done_desk} to="#">
                              Works done with this machine
                           </Link>
                        </div>
                        <div className={styles.logic}>
                           <p className={styles.price}>{item.price} ₽</p>

                           <GoodsCounter
                              position={styles.position_counter}
                              product={item}
                              count={count}
                              id={id}
                           />
                           <div className={styles.btn_container_desk}>
                              <Link to={'/basket'} className={styles.btn_style}>
                                 Add to basket
                              </Link>
                           </div>
                        </div>
                        <div className={styles.btn_container}>
                           <Link to={'/basket'} className={styles.btn_style}>
                              Add to basket
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className={styles.about_good_cart_detail}>
                     <AboutGoodInCartDetail goodDescription={item} />
                  </div>
                  <div className={styles.about_good_cart_detail__desk}>
                     <div className={styles.description_container}>
                        <h4 className={styles.description_title}>
                           Description
                        </h4>
                        <DescriptionInAboutGood goodDescription={item} />
                     </div>
                     <div className={styles.haracteristics_container}>
                        <h4 className={styles.description_title}>
                           Haracteristics
                        </h4>
                        <CardDetailHaracteristics goodDescription={item} />
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <Footer />
      </div>
   );
};
export default CardDetail;
