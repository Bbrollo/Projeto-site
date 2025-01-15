import React from "react";
import './Categorias.scss';  

const Categoria = () => {

    return(
        <>
        <h2 className="categorias">Categorias</h2>
        <div className="categorias">
            <div>
                <a href="#" className="link-categ">
                    <img src="static\images\banner-bota.png" alt="Banner Bota" className="img-categ"/>
                    <br />
                    Botas
                </a>
            </div>
            <div>
                <a href="#" className="link-categ">
                    <img src="static\images\banner-scarpins.png" alt="Banner Scarpins" className="img-categ"/>
                    <br />
                    Scarpins
                </a>
            </div>
            <div>
                <a href="#" className="link-categ">
                    <img src="static\images\banner-sapatilha.png" alt="Banner Sapatilhas" className="img-categ"/>
                    <br />
                    Sapatilhas
                </a>
            </div>
            <div>
                <a href="#" className="link-categ">
                    <img src="static\images\bannere-sandalia.png" alt="Banner Sandalia" className="img-categ"/>
                    <br />
                    Sandálias
                </a>
            </div>
        </div>
    </>
    );
};

export default Categoria;