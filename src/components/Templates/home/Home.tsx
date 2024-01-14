import React from 'react';

import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import ProductPreview from '../../Organisms/ProductPreview/ProductPreview.tsx';
import HomeCatalog from '../../Molecules/HomeCatalog/HomeCatalog.tsx';
import HomeSeasonalOffers from '../../Molecules/HomeSeasonalOffers/HomeSeasonalOffers.tsx';
import HomePopularBrands from '../../Molecules/HomePopularBrands/HomePopularBrands.tsx';
import HomeAboutCompany from '../../Molecules/HomeAboutCompany/HomeAboutCompany.tsx';
import HomeReview from '../../Molecules/HomeReview/HomeReview.tsx';
import HomeNewsSubscription from '../../Molecules/HomeNewsSubscription/HomeNewsSubscription.tsx';

const Home: React.FC = () => (
  <div>
    <Header />
    <ProductPreview />
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
