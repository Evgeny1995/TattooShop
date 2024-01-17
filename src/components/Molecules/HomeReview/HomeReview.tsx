import React from 'react';
import HomeReviewSliderMobTab from '../HomeReviewSliderMobTab/HomeReviewSlider.tsx';
import styles from './HomeReview.module.scss';
import HomeReviewSliderDesk from '../HomeReviewSliderDesk/HomeReviewSliderDesk.tsx';

const HomeReview: React.FC = () => {
  return (
    <div>
      <div className={styles.home_review_container}>
        <div className={styles.home_review_content}>
          <div className={styles.home_review_title_container}>
            <h3 className={styles.home_review_title}>Reviews</h3>
          </div>
          <HomeReviewSliderMobTab />
          <HomeReviewSliderDesk />
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
