import React from 'react';
import './App.scss';
import Home from './components/Templates/home/Home.tsx';
import './styles/variables.scss';
import { Route, Routes } from 'react-router-dom';
import PromoCodes from './components/Templates/PromoCodes/PromoCodes.tsx';
import NotFound from './components/Templates/NotFound/NotFound.tsx';
import Help from './components/Templates/Help/Help.tsx';
import CardDetail from './components/Templates/cardDetail/cardDetail.tsx';
import Basket from './components/Templates/Basket/Basket.tsx';

const App: React.FC = () => {
   return (
      <div className="main_wrap">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promo-codes" element={<PromoCodes />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/card/:id" element={<CardDetail />} />
            <Route path="/basket" element={<Basket />} />
         </Routes>
      </div>
   );
};

export default App;
