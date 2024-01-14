import React from 'react';
import './App.scss';
import Home from './components/Templates/home/Home.tsx';
import './styles/variables.scss';
import { Route, Routes } from 'react-router-dom';
import PromoCodes from './components/Organisms/PromoCodes/PromoCodes.tsx';
import NotFound from './components/Organisms/NotFound/NotFound.tsx';

const App: React.FC = () => {
  return (
    <div className="main_wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promo-codes" element={<PromoCodes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
