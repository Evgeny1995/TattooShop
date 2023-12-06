import React from 'react';
import styles from './ProductPreview.module.scss';
import mobBg from './../../../assets/img/mob_product_preview_bg.png';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import ProductPreviewSlider from '../../Molecules/TabProductPreviewSlider/ProductPreviewSlider.tsx';

const ProductPreview: React.FC = () => {
  return (
    <div className={styles.product_preview_wrap}>
      <div className={styles.product_preview__mob_container}>
        <img className={styles.mob_bg} src={mobBg} alt="background" />
        <div className={styles.product_preview_description_container}>
          <h2 className={styles.product_preview_title}>
            The best products in the world of tattoos
          </h2>

          <p className={styles.product_preview_text}>
            Equipment and consumables for the brightest and highest quality work
          </p>
        </div>
        <ButtonOne
          title={'View catalog'}
          className={styles.btn_view_catalog}
          btnStyle={styles.btn_style}
        />
      </div>
      <div className={styles.product_preview_Slider_container}>
        <ProductPreviewSlider />
      </div>
    </div>
  );
};

export default ProductPreview;
