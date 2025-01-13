import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='local'>
        Você está em São Paulo <a href="#" className='linkLocal'>Alterar</a>
      </div>
      <div id='cabecalho'>
        <div className='left'>
            <img src="/static/images/Logo-bebece.png" alt="Logo Bebecê" />
        
        <nav>
            <a href="#" className='navCabecalho'>Produto</a>
            <a href="#" className='navCabecalho'>Lançamentos</a>
            <a href="#" className='navCabecalhoOutlet'>Outlet</a>
        </nav>
        </div>
        <nav className='navIcos'>
            <a href="#"><img src="/static/images/icone-search.png" alt="" /></a>
            <a href="#"><img src="/static/images/icone-conta.png" alt="" /></a>
            <a href="#"><img src="/static/images/icone-carrinho.png" alt="" /></a>
        </nav>
      </div>
    </header>
  );
}

export default Header;