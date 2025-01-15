import React from 'react';
import './App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header.jsx';
import MainBanner from './components/MainBanner/MainBanner.jsx';
import Categorias from './components/Categorias/Categorias.jsx'

function App() {
  return (
    <div className="App">
      <MainBanner/>
      <Categorias/>
    </div>
  );
}

export default App;
