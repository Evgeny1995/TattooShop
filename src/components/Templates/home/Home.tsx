import React from 'react';
import styles from './Home.module.scss';
import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import ProductPreview from '../../Organisms/ProductPreview/ProductPreview.tsx';
import HomeCatalog from '../../Molecules/HomeCatalog/HomeCatalog.tsx';
import HomeSeasonalOffers from '../../Molecules/HomeSeasonalOffers/HomeSeasonalOffers.tsx';
import HomePopularBrands from '../../Molecules/HomePopularBrands/HomePopularBrands.tsx';
import HomeAboutCompany from '../../Molecules/HomeAboutCompany/HomeAboutCompany.tsx';
import HomeReview from '../../Molecules/HomeReview/HomeReview.tsx';
import HomeNewsSubscription from '../../Molecules/HomeNewsSubscription/HomeNewsSubscription.tsx';
import HomeCategoriesList from '../../Molecules/HomeCategoriesList/HomeCategoriesList.tsx';

const Home: React.FC = () => (
   <div className={styles.main_wrap}>
      <Header />
      <ProductPreview />
      <HomeCategoriesList />
      <HomeCatalog />
      <HomeSeasonalOffers />
      <HomePopularBrands />
      <HomeAboutCompany />
      <HomeReview />
      <HomeNewsSubscription />
      <Footer />
   </div>
);

export default Home;
