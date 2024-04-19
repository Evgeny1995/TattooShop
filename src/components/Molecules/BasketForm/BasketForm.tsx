import React from 'react';
import styles from './BasketForm.module.scss';
import InputTwo from '../../Atoms/InputTwo/InputTwo.tsx';
import clsx from 'clsx';

const BasketForm: React.FC = () => {
   return (
      <div className={styles.form_wrap}>
         <form className={styles.form} action="">
            <div className={styles.user_data}>
               <div className={styles.info_recipient}>
                  <h4 className={styles.block_title}>
                     01. Information on the recipient
                  </h4>
                  <div className={styles.info_recipient_content}>
                     <div className={styles.recipient_name}>
                        <p className={styles.description_inp}>Name*</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.recipient_name_inp,
                              styles.recipient_style_inp,
                           )}
                           placeholder={'Ivanov Ivan Ivanovich'}
                        />
                     </div>
                     <div className={styles.recipient_phone}>
                        <p className={styles.description_inp}>Phone*</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.recipient_phone_inp,
                              styles.recipient_style_inp,
                           )}
                           placeholder={'8(800)555-55-55'}
                        />
                     </div>
                     <div className={styles.recipient_email}>
                        <p className={styles.description_inp}>Email</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.recipient_email_inp,
                              styles.recipient_style_inp,
                           )}
                           placeholder={'Ivanov2021@mail.ru'}
                        />
                     </div>
                  </div>
               </div>
               <div className={styles.delivery_address}>
                  <h4 className={styles.block_title}>02. Delivery address</h4>
                  <div className={styles.delivery_address_content}>
                     <div className={styles.city}>
                        <p className={styles.description_inp}>City*</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.city_input,
                              styles.style_input,
                           )}
                           placeholder={'Moscow'}
                        />
                     </div>
                     <div className={styles.street}>
                        <p className={styles.description_inp}>Street,house*</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.street_input,
                              styles.style_input,
                           )}
                           placeholder={'str.Lenina 25'}
                        />
                     </div>
                     <div className={styles.apartment}>
                        <p className={styles.description_inp}>Apartment*</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.style_input,
                              styles.apartment_input,
                           )}
                           placeholder={'589'}
                        />
                     </div>
                     <div className={styles.entrance}>
                        <p className={styles.description_inp}>Entrance</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.entrance_input,
                              styles.style_input,
                           )}
                           placeholder={'5'}
                        />
                     </div>
                     <div className={styles.floor}>
                        <p className={styles.description_inp}>Floor</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.style_input,
                              styles.floor_input,
                           )}
                           placeholder={'2'}
                        />
                     </div>
                     <div className={styles.intercom}>
                        <p className={styles.description_inp}>Intercom</p>
                        <InputTwo
                           inpStyle={clsx(
                              styles.style_input,
                              styles.intercom_input,
                           )}
                           placeholder={'7350'}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default BasketForm;
