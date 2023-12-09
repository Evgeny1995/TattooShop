import React from 'react';

import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import ProductPreview from '../../Organisms/ProductPreview/ProductPreview.tsx';
import HomeCatalog from '../../Molecules/HomeCatalog/HomeCatalog.tsx';
import HomeSeasonalOffers from '../../Molecules/HomeSeasonalOffers/HomeSeasonalOffers.tsx';

const Home: React.FC = () => (
  <div>
    <Header />
    <ProductPreview />
    <HomeCatalog />
    <HomeSeasonalOffers />
    <Footer />
  </div>
);

export default Home;
