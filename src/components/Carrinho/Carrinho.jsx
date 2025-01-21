import React, { useState } from 'react';
import "./Carrinho.scss"
import AddCarrinhoVitrine from '../AddCarrinhoVitrine/AddCarrinhoVitrine';


const Carrinho = () => {

    const [produtos, setProdutos] = useState({produtos});
    
    const adicionarProduto = (produto) => {
        setProdutos((prevProdutos) => [...prevProdutos, produto]);
      };

    
    return(
        <div>
            <div><span>Todo conteudo</span></div>
        </div>
    );
}; 
export default Carrinho;