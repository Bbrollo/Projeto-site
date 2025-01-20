import React, { useState } from "react";
import "./AddCarrinhoVitrine.scss"
import useIsMobile from '../../isMobile';


const AddCarrinhoVitrine = ({ product, closeCarrinho }) => {

  const isMobile = useIsMobile();

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const tamanho = [
    {num:34, disponivel:true}, 
    {num:35, disponivel:true},
    {num:36, disponivel:true},
    {num:37, disponivel:true},
    {num:38, disponivel:true},
    {num:39, disponivel:true},
    {num:40, disponivel:true},
    {num:41, disponivel:true},
    {num:42, disponivel:false}
];

const handleTamanhoSelect = (num) => {
    setTamanhoSelecionado(num);
  };

    return(
        <>
        {isMobile ? (
            <div className="fundo-AddCarrinho">
                <div className="container-AddCarrinho">
                <button className='btnFechar'><img src="/static/images/btnX.png" alt="Botão fechar" onClick={closeCarrinho}/></button>
                    <img src={product.image} alt="Imagem produto" className="img-lancamentos-add-carrinho"/>
                    <div className="infos-add-carrinho">
                        <span className="prod-name-add-carrinho">{product.name}</span>
                        <div>
                            <span>Tamanho: </span>
                            {tamanhoSelecionado && (
                            <span className="tamanho-selecionado">{tamanhoSelecionado}</span>
                            )}
                            
                        </div>
                        <div className="tamanho-grid">
                            {tamanho.map((tamanho, index) => (
                                <input type="button" value={tamanho.num} key={index} disabled={!tamanho.disponivel} className={`tamanho-opcao ${tamanho.disponivel ? "btn-tamanho-disponivel" : "btn-tamanho-indisponivel"}`} onClick={() => handleTamanhoSelect(tamanho.num)} />
                            ))}
                        </div>
                        <button className="btn-add-carrinho-tamanho">
                            Adicionar ao carrinho <img src="\static\images\add-carrinho-branco.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            )
        
        : (<h1>Oi</h1>)}
        </>
    )
}

export default AddCarrinhoVitrine;