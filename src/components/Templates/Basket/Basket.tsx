import styles from './Basket.module.scss';
import React from 'react';
import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import BasketNav from '../../Molecules/BasketNav/BasketNav.tsx';
import GoodsCounter from '../../Molecules/GoodsCounter/GoodsCounter.tsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';
import BasketForm from '../../Molecules/BasketForm/BasketForm.tsx';
import BasketPayment from '../../Molecules/BasketPayment/BasketPayment.tsx';

const Basket: React.FC = () => {
   const { products } = useTypedSelector((s) => s.cart);
   const { removeCartItem } = useActions();

   return (
      <div className={styles.backet_wrap}>
         <Header />
         <BasketNav />
         <div className={styles.basket_content_wrap}>
            <div className={styles.basket_content_desk_position}>
               <h2 className={styles.basket_title}>Basket</h2>
               <div className={styles.components_desk_wrap}>
                  <div className={styles.goods_in_basket}>
                     <div
                        className={
                           styles.goods_table_description_container_wrap
                        }
                     >
                        <div
                           className={styles.goods_table_description_container}
                        >
                           <div className={styles.goods_table_description}>
                              <p className={styles.goods_table_text}>Name</p>
                           </div>
                           <div className={styles.goods_table_description}>
                              <p className={styles.goods_table_text}>Price</p>
                           </div>
                           <div className={styles.goods_table_description}>
                              <p className={styles.goods_table_text}>
                                 Quantity
                              </p>
                           </div>
                           <div className={styles.goods_table_description}>
                              <p className={styles.goods_table_text}>Cost</p>
                           </div>
                        </div>
                     </div>

                     <ul className={styles.basket_list}>
                        {products ? (
                           products.map((product) => (
                              <li key={product.id} className={styles.item}>
                                 <div className={styles.basket_list_firs_block}>
                                    <img
                                       className={styles.img_goods}
                                       src={product.product?.img}
                                       alt=""
                                    />
                                    <div className={styles.good_description}>
                                       <p className={styles.good_title}>
                                          {product.product?.title}
                                       </p>
                                       <p
                                          className={styles.good_prise_for_unit}
                                       >
                                          Price: {product.product?.price}₽
                                       </p>
                                    </div>
                                    <button className={styles.btn_del_goods}>
                                       <svg
                                          width="9"
                                          height="9"
                                          viewBox="0 0 9 9"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M4.5 3.7929L8.03553 0.257366L8.74264 0.964473L5.20711 4.50001L8.74264 8.03554L8.03553 8.74265L4.5 5.20711L0.964466 8.74265L0.257359 8.03554L3.79289 4.50001L0.257359 0.964473L0.964466 0.257366L4.5 3.7929Z"
                                             fill="#636B78"
                                          />
                                       </svg>
                                    </button>
                                 </div>
                                 <div
                                    className={styles.basket_list_second_block}
                                 >
                                    <GoodsCounter
                                       product={product.product}
                                       count={product.count}
                                       id={product.id}
                                       position={styles.position_counter}
                                    />
                                    <p
                                       className={
                                          styles.good_prise_for_all_units
                                       }
                                    >
                                       Сost:{' '}
                                       {product.count * product.product?.price}{' '}
                                       ₽
                                    </p>
                                    <button
                                       onClick={() =>
                                          removeCartItem({ id: product.id })
                                       }
                                       className={styles.btn_del_goods_tab_desk}
                                    >
                                       <svg
                                          width="9"
                                          height="9"
                                          viewBox="0 0 9 9"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M4.5 3.7929L8.03553 0.257366L8.74264 0.964473L5.20711 4.50001L8.74264 8.03554L8.03553 8.74265L4.5 5.20711L0.964466 8.74265L0.257359 8.03554L3.79289 4.50001L0.257359 0.964473L0.964466 0.257366L4.5 3.7929Z"
                                             fill="#636B78"
                                          />
                                       </svg>
                                    </button>
                                 </div>
                              </li>
                           ))
                        ) : (
                           <li></li>
                        )}
                     </ul>
                     <BasketForm />
                  </div>
                  <div className={styles.basket_payment_position}>
                     <BasketPayment products={products} />
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Basket;
