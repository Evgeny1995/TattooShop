import React, { useState } from 'react';
import styles from './HomeNewsSubscription.module.scss';
import InputTwo from '../../Atoms/InputTwo/InputTwo.tsx';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';


const HomeNewsSubscription: React.FC = () => {
  const [check, setCheck] = useState(true);

  function handleChange() {
    setCheck(!check);
  }


  return (
    <div className={styles.subscription_wrap}>
      <div className={styles.subscription_content_wrap}>
        <div className={styles.subscription_title_form}>
          <h3 className={styles.subscription_title_form_text}>
            Be the first to know
          </h3>
          <p className={styles.subscription_title_text}>
            Subscribe to the newsletter with the most interesting news and
            promotions
          </p>
          <div className={styles.subscription_form}>
            <div className={styles.form_fields_container}>
              <label className={styles.inp_label}>
                <p className={styles.inp_label_text}>Email</p>
                <InputTwo
                  className={styles.inp_mail_style}
                  placeholder={'Figur@mail.ru'}
                  inpStyle={styles.inp_mail_container_style}
                />
              </label>
              <label className={styles.inp_label}>
                <p className={styles.inp_label_text}>Name</p>
                <InputTwo
                  className={styles.inp_name_style}
                  placeholder={'Enter your name'}
                  inpStyle={styles.inp_name_container_style}
                />
              </label>
            </div>
            <div className={styles.form_btns_container}>
              <div className={styles.subscription_form_checkbox_container}>
                <input
                  id={'subscription-check'}
                  className={styles.subscription_form_checkbox}
                  type="checkbox"
                  onChange={() => {}}
                  checked={check}
                />
                <label
                  onClick={handleChange}
                  form={'subscription-check'}
                  className={styles.checkbox_text}
                >
                  You agree to the processing of your personal data
                </label>
              </div>
              <ButtonOne
                title={'Subscribe'}
                className={styles.btn_view_catalog}
                btnStyle={styles.btn_style}
              />
            </div>
          </div>
        </div>
        <div className={styles.subscription_desk_bg}></div>
      </div>
    </div>
  );
};

export default HomeNewsSubscription;
