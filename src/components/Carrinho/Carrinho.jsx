import React, { useState, useEffect } from "react";
import "./Carrinho.scss";
import useIsMobile from "../../isMobile";

const Carrinho = ({ isCarrinhoOpen, toggleCarrinho, carrinho, onUpdateCarrinho }) => {
  const isMobile = useIsMobile();

  const somaTotalSemDesconto = () => {
    const total = carrinho.reduce((acc, produto) => {
      return acc + produto.preco * produto.quantidade; // Soma apenas o preço sem considerar o desconto
    }, 0);

    return total.toFixed(2); // Retorna o total com duas casas decimais
  };
  const somaTotalDescontos = () => {
    const totalDescontos = carrinho.reduce((acc, produto) => {
      if (produto.desconto) {
        // Calcula o valor do desconto e multiplica pela quantidade
        const desconto =
          (produto.preco - produto.desconto) * produto.quantidade;
        return acc + desconto;
      }
      return acc; // Se não houver desconto, não altera o acumulador
    }, 0);

    return totalDescontos.toFixed(2); // Retorna o total com duas casas decimais
  };

  const total = () => {
    const totalSemDesconto = somaTotalSemDesconto();
    const totalDescontos = somaTotalDescontos();
    const totalSoma = totalSemDesconto - totalDescontos; // Subtrai o total de descontos do preço total sem desconto
    return totalSoma.toFixed(2); // Retorna o resultado com duas casas decimais
  };

  return (
    <>
      {isMobile ? (
        <div className={`carrinho ${isCarrinhoOpen ? "open" : ""}`}>
          <div className="header-carrinho">
            <span className="titulo-carrinho">Carrinho</span>
            <button className="close-button-carrinho" onClick={toggleCarrinho}>
              <img
                src="\static\images\close-icon.png"
                alt="Botão fechar Menu"
              />{" "}
              {/* Botão para fechar */}
            </button>
          </div>
          <div className="container-produtos-carrinho">
            {carrinho.length > 0 ? (
              carrinho.map((produto, index) => (
                <div key={index} className="produtp-itens">
                  <img
                    src={produto.image}
                    alt="Imagem produto"
                    className="img-prod-carrinho"
                  />
                  <div className="nome-tamanho-preco">
                    <div className="nome-tamanho">
                      <span className="prod-name-carrinho">{produto.nome}</span>
                      <span className="prod-tamanho-carrinho">
                        Tamanho: {produto.tamanho}
                      </span>
                    </div>
                    <span className="prod-quantidade-carrinho">
                      Quantidade: <a className="btn-add-mais-menos" onClick={() => onUpdateCarrinho(produto.id, 1)}>+</a>{" "}
                      {produto.quantidade}{" "}
                      <a className="btn-add-mais-menos" onClick={() => onUpdateCarrinho(produto.id, -1)}>-</a>
                    </span>
                    <span className="prod-preco-carrinho">
                      Preço: R$
                      {produto.desconto !== null
                        ? `${produto.desconto * produto.quantidade}`
                        : `${produto.preco * produto.quantidade}`}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>O carrinho está vazio</p>
            )}
          </div>
          <div className="container-total-carrinho">
            <div className="textos-total-carrinho">
              <span>SubTotal: </span>
              <span>{somaTotalSemDesconto()}</span>
            </div>
            <div className="textos-total-carrinho">
              <span>Descontos: </span>
              <span className="descontos-carrinho-foot">
                - {somaTotalDescontos()}
              </span>
            </div>
            <div className="textos-total-carrinho">
              <span>Total:</span>
              <span>{total()}</span>
            </div>
            <button className="btn-finalizar-pedido">Finalizar Pedido</button>
            <a className="continuar-comprando" onClick={toggleCarrinho}>
              Continuar Comprando
            </a>
          </div>
        </div>
      ) : (
        <div className={`carrinho ${isCarrinhoOpen ? "open" : ""}`}>
          <div className="header-carrinho">
            <span className="titulo-carrinho">Carrinho</span>
            <button className="close-button-carrinho" onClick={toggleCarrinho}>
              <img
                src="\static\images\close-icon.png"
                alt="Botão fechar Menu"
              />{" "}
              {/* Botão para fechar */}
            </button>
          </div>
          <div className="container-produtos-carrinho">
            {carrinho.length > 0 ? (
              carrinho.map((produto, index) => (
                <div key={index} className="produtp-itens">
                  <img
                    src={produto.image}
                    alt="Imagem produto"
                    className="img-prod-carrinho"
                  />
                  <div className="nome-tamanho-preco">
                    <div className="nome-tamanho">
                      <span className="prod-name-carrinho">{produto.nome}</span>
                      <span className="prod-tamanho-carrinho">
                        Tamanho: {produto.tamanho}
                      </span>
                    </div>
                    <span className="prod-quantidade-carrinho">
                      Quantidade: <a className="btn-add-mais-menos" onClick={() => onUpdateCarrinho(produto.id, 1)}>+</a>{" "}
                      {produto.quantidade}{" "}
                      <a className="btn-add-mais-menos" onClick={() => onUpdateCarrinho(produto.id, -1)}>-</a>
                    </span>
                    <span className="prod-preco-carrinho">
                      Preço: R$
                      {produto.desconto !== null
                        ? `${produto.desconto * produto.quantidade}`
                        : `${produto.preco * produto.quantidade}`}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>O carrinho está vazio</p>
            )}
          </div>
          <div className="container-total-carrinho">
            <div className="textos-total-carrinho">
              <span>SubTotal: </span>
              <span>{somaTotalSemDesconto()}</span>
            </div>
            <div className="textos-total-carrinho">
              <span>Descontos: </span>
              <span>- {somaTotalDescontos()}</span>
            </div>
            <div className="textos-total-carrinho">
              <span>Total:</span>
              <span>{total()}</span>
            </div>
            <button className="btn-finalizar-pedido">Finalizar Pedido</button>
            <a className="continuar-comprando" onClick={toggleCarrinho}>
              Continuar Comprando
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default Carrinho;
