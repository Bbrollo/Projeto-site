import React, { useState } from 'react';
import './Header.scss';
import PopUpCEP from '../PopUp/PopUpCEP.jsx'
import useIsMobile from '../../isMobile';
import MenuLateral from '../MenuLateral/MenuLateral.jsx';

const Header = () => {
  const [cep, setCep] = useState(''); // Estado para armazenar o CEP digitado
  const [address, setAddress] = useState(null); // Estado para armazenar os dados do endereço
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre aberto/fechado
};

  const isMobile = useIsMobile();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveCEP = (newCep) => {
    setCep(newCep); // Atualiza o estado do CEP
    getApi(newCep); // Chama a função que busca os dados com o novo CEP
  };

  const getApi = () => {
    if (!cep) {
      setError('Por favor, insira um CEP válido.');
      return;
    }
    setLoading(true);
    setError(null);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do CEP');
        }
        return response.json();
      })
      .then((data) => {
        if (data.erro) {
          setError('CEP não encontrado.');
          setAddress(null);
        } else {
          setAddress(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Erro ao buscar o endereço.');
        setLoading(false);
      });
  };

  

  return (
    <header>
      <div className="local">
        Você está em {address ? `${cep} - ${address.uf}` : 'São Paulo'}{' '}
        <a href="#" className="linkLocal" onClick={handleOpenPopup}>Alterar</a>
      </div>
     
      {isMobile ? (
        <div id="cabecalho-mobile">
          <nav className='navMobile'>
            <div className='left-mobile'>
              <a href="#"><img src="/static/images/icone-search.png" alt="Buscar" /></a>
              <a onClick={toggleMenu} ><img src="/static/images/icone-menu.png" alt="Menu" /></a>
            </div>
            <div className='center-mobile'>
              <img src="/static/images/Logo-bebece.png" alt="Logo Bebecê" />
            </div>
            <div className='right-mobile'>
            <a href="#"><img src="/static/images/icone-conta.png" alt="Conta" /></a>
            <a href="#"><img src="/static/images/icone-carrinho.png" alt="Carrinho" /></a>
            </div>   
          </nav>         
        </div>
      ) : (
        <div id="cabecalho">
        <div className='left'>
          <img src="/static/images/Logo-bebece.png" alt="Logo Bebecê" />
          <nav>
            <a href="#" className="navCabecalho">Produto</a>
            <a href="#" className="navCabecalho">Lançamentos</a>
            <a href="#" className="navCabecalhoOutlet">Outlet</a>
          </nav>
        </div>

        <nav className="navIcos">
          <a href="#"><img src="/static/images/icone-search.png" alt="Buscar" /></a>
          <a href="#"><img src="/static/images/icone-conta.png" alt="Conta" /></a>
          <a href="#"><img src="/static/images/icone-carrinho.png" alt="Carrinho" /></a>
        </nav>
      </div>
      )}
      
      

       <PopUpCEP isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        onSaveCEP={handleSaveCEP} />
        <MenuLateral isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
