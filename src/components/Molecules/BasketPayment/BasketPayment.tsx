import React, { useState } from 'react';
import styles from './BasketPayment.module.scss';
import PaymentRadioBtnGroup from '../PaymentRadioBtnGroup/PaymentRadioBtnGroup.tsx';
import DeliveryRadioBtnGroup from '../DeliveryRadioBtnGroup/DeliveryRadioBtnGroup.tsx';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import { CartItem } from '../../../store/cart/types.ts';
import clsx from 'clsx';
import {
   totalPrice,
   totalUnitsCount,
} from '../../../hooks/basketPaymentHooks.ts';
import { Link } from 'react-router-dom';

interface props {
   products: CartItem[];
}

const BasketPayment: React.FC<props> = ({ products }) => {
   const [checkbox, setCheckbox] = useState<boolean>(true);
   const TotalCount = totalUnitsCount(products);
   const TotalPrice = totalPrice(products);
   return (
      <div className={styles.payment_data}>
         <div className={styles.payment_data_position}>
            <div className={styles.payment_radio_btn_block}>
               <h4 className={styles.payment_title}>Payment</h4>
               <div className={styles.payment_radio_content}>
                  <PaymentRadioBtnGroup />
               </div>
               <h4 className={styles.payment_title}>Delivery</h4>
               <div className={styles.delivery_radio_content}>
                  <DeliveryRadioBtnGroup />
               </div>
            </div>

            <div className={styles.payment_result_price_block}>
               <div className={styles.payment_result_all_units}>
                  <p className={styles.payment_result_description}>
                     Total items of goods:
                  </p>
                  <p
                     className={clsx(
                        styles.payment_result_value,
                        styles.marg_right,
                     )}
                  >
                     {TotalCount == undefined ? 0 : TotalCount}
                  </p>
               </div>
               <div className={styles.payment_result_discount}>
                  <p className={styles.payment_result_description}>
                     General discount:
                  </p>
                  <p className={styles.payment_result_value}>0 ₽</p>
               </div>
               <div className={styles.payment_result_Services}>
                  <p className={styles.payment_result_description}>Services:</p>
                  <p className={styles.payment_result_value}>0 ₽</p>
               </div>
               <div className={styles.payment_result_total_count}>
                  <p className={styles.payment_result_description_total_count}>
                     Total:
                  </p>
                  <p className={styles.payment_result_value_total_count}>
                     {TotalPrice} ₽
                  </p>
               </div>
               <div className={styles.promo_code_inp_container}>
                  <div className={styles.promo_code_inp_content}>
                     <p className={styles.promo_code_inp_description}>
                        Promo code
                     </p>
                     <input
                        className={styles.promo_code_inp}
                        type="text"
                        placeholder={'Driskell2000'}
                     />
                  </div>
                  <button
                     className={styles.promo_code_btn_active}
                     type={'button'}
                  >
                     Activate promotional code
                  </button>
               </div>
            </div>
         </div>

         <div className={styles.form_submit_btn_block}>
            {/*<ButtonOne*/}
            {/*   title={'Checkout'}*/}
            {/*   className={styles.btn_view_catalog}*/}
            {/*   btnStyle={styles.btn_style}*/}
            {/*   type={'submit'}*/}
            {/*/>*/}
            <Link className={styles.btn_style} to={'/services'}>
               Checkout
            </Link>
            <div className={styles.public_offer_content}>
               <div className={styles.checkbox_conteiner}>
                  <input
                     defaultChecked={true}
                     name="checkbox_offer"
                     id="checkbox_offer"
                     type="checkbox"
                     className={styles.checkbox_offer}
                     onClick={() => setCheckbox(!checkbox)}
                  />
                  <label
                     className={styles.checkbox_label}
                     htmlFor="checkbox_offer"
                  >
                     <span className={styles.checkbox_icon}></span>
                  </label>
               </div>
               <div className={styles.public_offer_container}>
                  <p className={styles.public_offer_text}>I agree with</p>
                  <a className={styles.public_offer_link} href="#">
                     the public offer
                  </a>
                  <p className={styles.public_offer_text}>and</p>
                  <a
                     className={clsx(styles.public_offer_link, styles.margin)}
                     href="#"
                  >
                     processing of personal data
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BasketPayment;
