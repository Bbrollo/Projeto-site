import React from 'react';
import './App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx';
import MainBanner from './components/MainBanner/MainBanner.jsx';
import Categorias from './components/Categorias/Categorias.jsx'
import BannerNavegacao from './components/BannerNavegacao/BannerNavegacao.jsx'

function App() {
  return (
    <div className="App">
      <MainBanner/>
      <Categorias/>
      <BannerNavegacao/>
    </div>
  );
}

export default App;
