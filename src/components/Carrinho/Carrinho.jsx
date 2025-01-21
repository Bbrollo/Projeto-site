import React, { useState, useEffect } from 'react';
import "./Carrinho.scss"
import useIsMobile from '../../isMobile';


const Carrinho = ({isCarrinhoOpen, toggleCarrinho, carrinho}) => {
    
    const isMobile = useIsMobile();
    
    return(
        <>
        {isMobile ? (
            <div className={`carrinho ${isCarrinhoOpen ? "open" : ""}`}>
                <div className='header-carrinho'>
                    <span className='titulo-carrinho'>Carrinho</span>
                    <button className="close-button-carrinho" onClick={toggleCarrinho}>
                        <img src="\static\images\close-icon.png" alt="Botão fechar Menu" /> {/* Botão para fechar */}           
                    </button>
                </div>
                <div className='container-produtos-carrinho'>
                    {carrinho.length > 0 ? (
                        carrinho.map((produto, index) => (
                            <div key={index} className='produtp-itens'>
                                <img src={produto.image} alt="Imagem produto" className='img-prod-carrinho'/>
                                <div className='nome-tamanho-preco'>
                                        <div className='nome-tamanho'>
                                            <span className='prod-name-carrinho'>{produto.nome}</span>
                                            <span className='prod-tamanho-carrinho'>Tamanho: {produto.tamanho}</span>
                                            </div>
                                            <span className='prod-preco-carrinho'>Preço: R${produto.preco}</span> 
                                    </div>
                            </div>
                        ))
                    ) : (
                        <p>O carrinho está vazio</p>
                    )}
                </div>
            </div>
        ) : (
            <h1>oi</h1>
        )}
        </>
    );
}; 
export default Carrinho;