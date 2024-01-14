import React from 'react';
import HomeReviewSliderMobTab from '../HomeReviewSliderMobTab/HomeReviewSlider.tsx';
import styles from './HomeReview.module.scss';
import userAvatar1 from '../../../assets/img/review/userAvatar1.png';
import userAvatar2 from '../../../assets/img/review/userAvatar2.png';
import HomeReviewSliderDesk from '../HomeReviewSliderDesk/HomeReviewSliderDesk.tsx';

export interface IhomeReview {
  id: string;
  description: string;
  email: string;
  avatar: string;
}

export const homeReviewArr: IhomeReview[] = [
  {
    id: '1',
    description:
      'I ordered for the first time, the order arrived on time, everything was packaged perfectly, everything ordered corresponds to the description, but there is one small nuance, the boxes are all crumpled, either this happened during packaging or in the warehouse they treat the product this way, overall I’m happy with everything, I will order more, I recommend the site-shop for shopping, overall I’m happy with everything, I will order again.',
    email: '@Velli7350',
    avatar: userAvatar1,
  },
  {
    id: '2',
    description:
      'We put everything we needed + a sticker, a discount card and lollipops, what was unexpected was that the holder and clip cord in the set came in the wrong color, I was even pleased, but I was disappointed by one packaged needle that I couldn’t get adequately',
    email: '@mark_love',
    avatar: userAvatar2,
  },
  {
    id: '3',
    description:
      'I ordered for the first time, the order arrived on time, everything was packaged perfectly, everything ordered corresponds to the description, but there is one small nuance, the boxes are all crumpled, either this happened during packaging or in the warehouse they treat the product this way, overall I’m happy with everything, I will order more, I recommend the site-shop for shopping, overall I’m happy with everything, I will order again.',
    email: '@Velli7350',
    avatar: userAvatar1,
  },
  {
    id: '4',
    description:
      'We put everything we needed + a sticker, a discount card and lollipops, what was unexpected was that the holder and clip cord in the set came in the wrong color, I was even pleased, but I was disappointed by one packaged needle that I couldn’t get adequately',
    email: '@mark_love',
    avatar: userAvatar2,
  },
  {
    id: '5',
    description:
      'I ordered for the first time, the order arrived on time, everything was packaged perfectly, everything ordered corresponds to the description, but there is one small nuance, the boxes are all crumpled, either this happened during packaging or in the warehouse they treat the product this way, overall I’m happy with everything, I will order more, I recommend the site-shop for shopping, overall I’m happy with everything, I will order again.',
    email: '@Velli7350',
    avatar: userAvatar1,
  },
  {
    id: '6',
    description:
      "'We put everything we needed + a sticker, a discount card and lollipops, what was unexpected was that the holder and clip cord in the set came in the wrong color, I was even pleased, but I was disappointed by one packaged needle that I couldn’t get adequately'",
    email: '@mark_love',
    avatar: userAvatar2,
  },
  {
    id: '7',
    description:
      'I ordered for the first time, the order arrived on time, everything was packaged perfectly, everything ordered corresponds to the description, but there is one small nuance, the boxes are all crumpled, either this happened during packaging or in the warehouse they treat the product this way, overall I’m happy with everything, I will order more, I recommend the site-shop for shopping, overall I’m happy with everything, I will order again.',
    email: '@mark_love',
    avatar: userAvatar1,
  },
  {
    id: '8',
    description:
      "'We put everything we needed + a sticker, a discount card and lollipops, what was unexpected was that the holder and clip cord in the set came in the wrong color, I was even pleased, but I was disappointed by one packaged needle that I couldn’t get adequately'",
    email: '@mark_love',
    avatar: userAvatar2,
  },
];

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
