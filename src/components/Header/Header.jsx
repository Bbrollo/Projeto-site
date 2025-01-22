import React, { useState, useEffect } from "react";
import "./Header.scss";
import PopUpCEP from "../PopUp/PopUpCEP.jsx";
import useIsMobile from "../../isMobile";
import MenuLateral from "../MenuLateral/MenuLateral.jsx";
import Carrinho from "../Carrinho/Carrinho.jsx";

const Header = () => {
  const [cep, setCep] = useState(""); // Estado para armazenar o CEP digitado
  const [address, setAddress] = useState(null); // Estado para armazenar os dados do endereço
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Carregar carrinho do localStorage ao inicializar
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoAtual);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY); // Debug
      setIsScrolled(window.scrollY > 0); // Atualiza o estado
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre aberto/fechado
  };

  const toggleCarrinho = () => {
    setIsCarrinhoOpen(!isCarrinhoOpen);
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
      setError("Por favor, insira um CEP válido.");
      return;
    }
    setLoading(true);
    setError(null);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do CEP");
        }
        return response.json();
      })
      .then((data) => {
        if (data.erro) {
          setError("CEP não encontrado.");
          setAddress(null);
        } else {
          setAddress(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Erro ao buscar o endereço.");
        setLoading(false);
      });
  };

  return (
    <header className={isScrolled ? "header-scrolled" : "header-transparent"}>
      <div className="local">
        Você está em {address ? `${cep} - ${address.uf}` : "São Paulo"}{" "}
        <a href="#" className="linkLocal" onClick={handleOpenPopup}>
          Alterar
        </a>
      </div>

      {isMobile ? (
        <div id="cabecalho-mobile">
          <nav className="navMobile">
            <div className="left-mobile">
              <a href="#">
                <img
                  src={
                    isScrolled
                      ? "/static/images/icone-search-preto.png"
                      : "/static/images/icone-search.png"
                  }
                  alt="Buscar"
                />
              </a>
              <a onClick={toggleMenu}>
                <img
                  src={
                    isScrolled
                      ? "/static/images/icone-menu-preto.png"
                      : "/static/images/icone-menu.png"
                  }
                  alt="Menu"
                />
              </a>
            </div>
            <div className="center-mobile">
              <img
                src={
                  isScrolled
                    ? "/static/images/Logo-bebece-preto.png"
                    : "/static/images/Logo-bebece.png"
                }
                alt="Logo Bebecê"
                className="logo-bebece-header"
              />
            </div>
            <div className="right-mobile">
              <a href="#">
                <img
                  src={
                    isScrolled
                      ? "/static/images/icone-conta-preto.png"
                      : "/static/images/icone-conta.png"
                  }
                  alt="Conta"
                />
              </a>
              <a onClick={toggleCarrinho}>
                <img
                  src={
                    isScrolled
                      ? "/static/images/icone-carrinho-preto.png"
                      : "/static/images/icone-carrinho.png"
                  }
                  alt="Carrinho"
                />
              </a>
            </div>
          </nav>
        </div>
      ) : (
        <div id="cabecalho">
          <div className="left">
            <img
              src={
                isScrolled
                  ? "/static/images/Logo-bebece-preto.png"
                  : "/static/images/Logo-bebece.png"
              }
              alt="Logo Bebecê"
              className="logo-bebece-header"
            />
            <nav>
              <a
                href="#"
                className={isScrolled ? "navCabecalhoScrolled" : "navCabecalho"}
              >
                Produto
              </a>
              <a
                href="#"
                className={isScrolled ? "navCabecalhoScrolled" : "navCabecalho"}
              >
                Lançamentos
              </a>
              <a href="#" className="navCabecalhoOutlet">
                Outlet
              </a>
            </nav>
          </div>

          <nav className="navIcos">
            <a href="#">
              <img
                src={
                  isScrolled
                    ? "/static/images/icone-search-preto.png"
                    : "/static/images/icone-search.png"
                }
                alt="Buscar"
              />
            </a>
            <a href="#">
              <img
                src={
                  isScrolled
                    ? "/static/images/icone-conta-preto.png"
                    : "/static/images/icone-conta.png"
                }
                alt="Conta"
              />
            </a>
            <a onClick={toggleCarrinho}>
              <img
                src={
                  isScrolled
                    ? "/static/images/icone-carrinho-preto.png"
                    : "/static/images/icone-carrinho.png"
                }
                alt="Carrinho"
              />
            </a>
          </nav>
        </div>
      )}

      <PopUpCEP
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSaveCEP={handleSaveCEP}
      />
      <MenuLateral isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Carrinho
        isCarrinhoOpen={isCarrinhoOpen}
        toggleCarrinho={toggleCarrinho}
        carrinho={carrinho}
      />
    </header>
  );
};

export default Header;
