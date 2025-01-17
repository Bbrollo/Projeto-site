import React from 'react';
import './App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx';
import MainBanner from './components/MainBanner/MainBanner.jsx';
import Categorias from './components/Categorias/Categorias.jsx'
import BannerNavegacao from './components/BannerNavegacao/BannerNavegacao.jsx'
import VitrineLancamento from './components/VitrineLancamento/VitrineLancamento.jsx'
import Blog from './components/Blog/Blog.jsx'
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
      <MainBanner/>
      <Categorias/>
      <BannerNavegacao/>
      <VitrineLancamento/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
