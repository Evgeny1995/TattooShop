import React from 'react';
import styles from './HomeAboutCompany.module.scss';
import aboutCompanyImgTab from './../../../assets/img/AboutCompany/tab.png';
import aboutCompanyImgDesk from './../../../assets/img/AboutCompany/desk.png';
import ButtonOne from '../../Atoms/ButtonOne/ButtonOne.tsx';
import { useWindowResize } from '../../../hooks/useWindowResize.tsx';

const HomeAboutCompany: React.FC = () => {
  const [width] = useWindowResize();

  return (
    <div className={styles.about_company_container}>
      <div className={styles.about_company_content}>
        <div className={styles.about_company_img_container}>
          <img
            className={styles.about_company_img}
            src={width >= 1920 ? aboutCompanyImgDesk : aboutCompanyImgTab}
            alt=""
          />
        </div>
        <div className={styles.about_company_description}>
          <h3 className={styles.about_company_title}>
            Tattoo shop Mr.Driskell
          </h3>
          <p className={styles.about_company_text_hello}>
            Welcome to Tattoo Mall - our tattoo shop brings together industry
            enthusiasts, professional artists and beginners who are just taking
            their first steps in tattoo art. We know how important it is to
            correctly and accurately select tools for productive tattoo
            sessions, and we help you quickly find what will help you make them
            just that way.
          </p>
          <p className={styles.about_company_text_range}>
            Our range includes not just tattoo equipment, it is literally a
            whole team of competent and truly effective assistants on your
            desktop. Having gone through a stage of long development and
            countless tests under the close gaze of domestic mechanical
            engineers, cosmeceuticals and world-famous brands, these products
            have gained experience and become better every day to show what they
            are capable of and help unlock your potential.
          </p>
          <ButtonOne
            title={'About company'}
            className={styles.btn_view_catalog}
            btnStyle={styles.btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutCompany;
