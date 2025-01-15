import React from "react";
import './BannerNavegacao.scss';

const BannerNavegacao = () => {
    return(
        <div className="container-img-flex">
            <img src=".\static\images\banner-grande-nav.png" alt="Banner de Navegação Grande" className="imagem-nav"/>
            <img src="\static\images\banner-pequeno-nav.png" alt="Banner de Navegação Pequeno"  className="imagem-nav"/>
        </div>
    )

}
export default BannerNavegacao;