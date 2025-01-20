import React, { useState } from 'react';
import "./Carrinho.scss"
import AddCarrinhoVitrine from '../AddCarrinhoVitrine/AddCarrinhoVitrine';

const Carrinho = () => {

    const [produtos, setProdutos] = useState([]);
    const adicionarProduto = (produto) => {
        setProdutos((prevProdutos) => [...prevProdutos, produto]);
      };

      
    return(
        <div>
            <div><span>Todo conteudo</span></div>
            <AddCarrinhoVitrine 
            onAdicionarProduto={adicionarProduto} 
            />
        </div>
    );
}; 
export default Carrinho;