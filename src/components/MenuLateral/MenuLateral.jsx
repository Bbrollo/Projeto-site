import React, { useState } from "react";
import "./MenuLateral.scss";
import useIsMobile from '../../isMobile';

const MenuLateral = ({ isMenuOpen, toggleMenu }) => {

    const isMobile = useIsMobile();
    const [itemExpandido, setItemExpandido] = useState(null)

    const exibeSubmenu = (item) => {
        setItemExpandido((prevItem) => (prevItem === item ? null : item));
    }

    return (
        <>
        {isMobile && (
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
            
            <div className="header-menu-lateral">
                <img src="\static\images\Logo-bebece-preto.png" alt="Logo Bebecê" />
                <button className="close-button" onClick={toggleMenu}>
                <img src="\static\images\close-icon.png" alt="Botão fechar Menu" /> {/* Botão para fechar */}
            </button>
            </div>
            <div>
                <img src="\static\images\banner-principal-1-mobile.png" alt="" className="img-menu-lateral" />
            </div>
            <div className="transparencia-menu-lateral">
                    <span className="celebration-text-menu">Celebration - 20 anos</span>
                    <a href="" className="link-conheca-menu">Conheça</a>
            </div>
            <div className="menu-content">
                <ul>
                    <li>
                        <a href="#">Liquida</a>
                    </li>
                    <li onClick={() => exibeSubmenu("sapatos")}>
                        <a href="#">Sapatos</a>
                        <img src={itemExpandido ? "/static/images/seta-baixo-menu.svg" : "/static/images/seta-direita-menu.svg" } alt="Seta direita menu" />
                    </li>
                    {itemExpandido === "sapatos" && (
                            <ul className="submenu">
                                <li>
                                    <a href="">Scarpins</a>
                                </li>
                                <li>
                                    <a href="">Mocassim</a>
                                </li>
                                <li>
                                    <a href="">Sapatilhas</a>
                                </li>
                                <li>
                                    <a href="">Mules</a>
                                </li>
                                <li>
                                    <a href="">Peep Toe</a>
                                </li>
                                <li>
                                    <a href="">Oxford</a>
                                </li>

                            </ul>
                        )}
                    <li>
                        <a href="#">Sandálias</a>
                        <img src="\static\images\seta-direita-menu.svg" alt="Seta direita menu" />
                    </li>
                    <li>
                        <a href="#">Botas</a>
                        <img src="\static\images\seta-direita-menu.svg" alt="Seta direita menu" />
                    </li>
                    <li>
                        <a href="#">Tênis</a>
                        <img src="\static\images\seta-direita-menu.svg" alt="Seta direita menu" />
                    </li>
                    <li>
                        <a href="#" className="outlet-text-menu">Outlet</a>
                    </li>
                </ul>
            </div> 
        </div> )}
        </>
    );
};

export default MenuLateral;
