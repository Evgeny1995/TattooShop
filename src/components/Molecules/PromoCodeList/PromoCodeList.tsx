import React, { useEffect } from 'react';
import styles from './PromoCodeList.module.scss';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../hooks/useActions.ts';


const PromoCodeList: React.FC = () => {
  const {promoCodesDataList} = useTypedSelector((state) => state.listState)
  const {getPromoCodesDataList} = useActions()

  useEffect(() => {
    getPromoCodesDataList();
  }, []);


  return (
    <div className={styles.promo_list_container}>
      <ul className={styles.promo_list}>
        {promoCodesDataList.map((item) => (
          <li key={item.id} className={styles.promo_list_item}>
            <img className={styles.item_img} src={item.img} alt={item.title} />
            <div className={styles.text_container}>
              <h3 className={styles.item_title}>{item.title}</h3>
              <p className={styles.item_text1}>{item.text1}</p>
              <p className={styles.item_text2}>{item.text2}</p>
              <p className={styles.item_text3}>{item.text3}</p>
            </div>
            <ButtonOne
              title={'Copy promo code'}
              className={styles.btn_view_catalog}
              btnStyle={styles.btn_style}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoCodeList;
