import React from 'react';

import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import ProductPreview from '../../Organisms/ProductPreview/ProductPreview.tsx';

const Home: React.FC = () => (
  <div>
    <Header />
    <ProductPreview />
    <Footer />
  </div>
);

export default Home;
