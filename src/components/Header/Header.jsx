import React, { useState } from 'react';
import './Header.scss';
import PopUpCEP from 'C:\\Users\\Usuario\\Desktop\\WECODE\\wecode-fase2-dev-front-end\\src\\components\\PopUp\\PopUpCEP'

const Header = () => {
  const [cep, setCep] = useState(''); // Estado para armazenar o CEP digitado
  const [address, setAddress] = useState(null); // Estado para armazenar os dados do endereço
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Função para buscar os dados da API com base no CEP
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  // Função para fechar o popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
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
        Você está em {address ? `${cep} - ${address.uf}` : 'Local indefinido'}{' '}
        <a href="#" className="linkLocal" onClick={handleOpenPopup}>Alterar</a>
      </div>
      <div id="cabecalho">

        <div class='left'>
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

       <PopUpCEP isOpen={isPopupOpen} onClose={handleClosePopup} />
    </header>
  );
};

export default Header;
