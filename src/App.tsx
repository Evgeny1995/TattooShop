import React from 'react';
import './App.scss';
import Home from './components/Templates/home/Home.tsx';
import './styles/variables.scss';

const App: React.FC = () => {
  return (
    <div className="main_wrap">
      <Home />
    </div>
  );
};

export default App;
