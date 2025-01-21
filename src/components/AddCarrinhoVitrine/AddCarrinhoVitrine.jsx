import React, { useState } from "react";
import "./AddCarrinhoVitrine.scss"
import useIsMobile from '../../isMobile';
import ProdutoCarrinho from '../../ProdutoCarrinho';



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

  
  const addCarrinho = (product) => {
    if (!product || !tamanhoSelecionado) {
        alert("Produto ou tamanho não definido.");
        return false;
      }
    // Recuperar os produtos já armazenados no localStorage
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    // Adicionar o novo produto ao carrinho
    const novoProduto = {
      nome: product.name,
      image: product.image,
      preco: product.price.amount,
      desconto: product.price.isDiscount,
      tamanho: tamanhoSelecionado,
      quantidade: 1,
    };
  
    
    carrinhoAtual.push(novoProduto);
  
    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
  
    console.log('Produto adicionado ao carrinho:', novoProduto);
  }

   const verCarrinho = () => {
    // Recuperar os produtos do carrinho
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    console.log('Carrinho atual:', carrinho);
  }

  const limparCarrinho = () => {
    // Remover o carrinho do localStorage
    localStorage.removeItem('carrinho');
    console.log('Carrinho limpo.');
  }
  
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
                        <button className="btn-add-carrinho-tamanho" onClick={() => { 
                        const resultado = addCarrinho(product); 
                        if (resultado !== false) {  // Fechar o carrinho somente se a função não retornar false
                        closeCarrinho(); 
                        }
                        }}>
                            Adicionar ao carrinho <img src="\static\images\add-carrinho-branco.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            )
        
        : (
            <div className="fundo-AddCarrinho">
                <div className="container-AddCarrinho">
                <button className='btnFechar' onClick={closeCarrinho}><img src="/static/images/btnX.png" alt="Botão fechar"/></button>
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
                        <button className="btn-add-carrinho-tamanho" onClick={() => { 
                        const resultado = addCarrinho(product); 
                        if (resultado !== false) {  // Fechar o carrinho somente se a função não retornar false
                        closeCarrinho(); 
                        }
                        }}>
                            Adicionar ao carrinho <img src="\static\images\add-carrinho-branco.png" alt="" />
                        </button>
                        <button onClick={verCarrinho}>verCarrinho</button>
                        <button onClick={limparCarrinho}>Limpar</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default AddCarrinhoVitrine;