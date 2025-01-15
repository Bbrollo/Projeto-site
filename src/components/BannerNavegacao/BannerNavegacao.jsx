import React from "react";
import './BannerNavegacao.scss';
import useIsMobile from '../../isMobile';

const BannerNavegacao = () => {

    const isMobile = useIsMobile();

    return(
        <div>
            {isMobile ? (
                <div className="container-img-flex-mobile">
                    <img src="\static\images\banner-pequeno-nav-mobile.png" alt="Banner de Navegação Pequeno" className="img-nav-mobile"/>
                    <img src="\static\images\banner-grande-nav-mobile.png" alt="Banner de Navegação Grande" className="img-nav-mobile"/>
                </div>
            ) : (
                <div className="container-img-flex">
                <img src=".\static\images\banner-grande-nav.png" alt="Banner de Navegação Grande" className="imagem-nav-1"/>
                <img src="\static\images\banner-pequeno-nav.png" alt="Banner de Navegação Pequeno"  className="imagem-nav-2"/>
            </div>
            )}
        </div>
    )

}
export default BannerNavegacao;