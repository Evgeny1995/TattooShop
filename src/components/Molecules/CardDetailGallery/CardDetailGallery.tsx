import React, { useState } from 'react';
import styles from './CardDetailGallery.module.scss';
import { TypeList1 } from '../../../types/list.ts';
import clsx from 'clsx';

interface props {
   galleryImg: TypeList1;
}

const CardDetailGallery: React.FC<props> = ({ galleryImg }) => {
   const [previewGalleryImg, setPreviewGalleryImg] = useState(
      galleryImg.previewGaleryDesk?.[0].img1,
   );

   return (
      <div className={styles.gallery_container}>
         <div className={styles.gallery_small_img}>
            {galleryImg.previewGaleryDesk?.map((i) => (
               <img
                  className={
                     previewGalleryImg == i.img1
                        ? clsx(styles.small_img, styles.hover)
                        : styles.small_img
                  }
                  key={i.id}
                  src={i.img1}
                  alt=""
                  onClick={() => setPreviewGalleryImg(i.img1)}
               />
            ))}
         </div>
         <div className={styles.gallery_big_img}>
            <img
               className={styles.preview_img}
               src={previewGalleryImg}
               alt=""
            />
         </div>
      </div>
   );
};

export default CardDetailGallery;
