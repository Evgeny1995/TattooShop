import React from 'react';
import styles from './NotFound.module.scss';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import { Link } from 'react-router-dom';
import notFoundImg from '../../../assets/img/404/404.png';

const NotFound: React.FC = () => {
   return (
      <div className={styles.not_found_wrap}>
         <Header />
         <section className={styles.not_found_container}>
            <div className={styles.col_left_position_desk}>
               <h2 className={styles.not_found_title}>Error 404!</h2>
               <p className={styles.not_found_description}>
                  This page was not found, we are already working, to restore
                  it!
               </p>
               <div className={styles.btn_position}>
                  <div className={styles.btn_container}>
                     <ButtonOne
                        title={'View catalog'}
                        className={styles.btn_view_catalog}
                        btnStyle={styles.btn_style}
                     />
                  </div>
                  <div className={styles.catal_return_btn_container}>
                     <Link className={styles.catal_return_btn} to={'/'}>
                        Return to catalog
                     </Link>
                  </div>
               </div>
            </div>

            <img
               className={styles.not_found_img}
               src={notFoundImg}
               alt="Dazed man in the bath"
            />
         </section>
         <Footer />
      </div>
   );
};

export default NotFound;
