import React, { useState, useEffect } from "react";
import './VitrineLancamento.scss';
import { getProducts } from '../../utils';
import Slider from "react-slick";
import useIsMobile from '../../isMobile';

const VitrineLancamento = () => {
    const [products, setProducts] = useState([]);
    const isMobile = useIsMobile();
    const [favIcon, setFavIcon] = useState({});

    
    const alteraFavorite = (productId) => {
        setFavIcon((prevFavIcon) => ({
            ...prevFavIcon,
            [productId]: !prevFavIcon[productId],
        }));
    };
    
    

    // Configuração do Slider
    const settings = isMobile ? {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "linear",
        appendDots: (dots) => (
            <div className="custom-dots-container"> {/* Container para centralizar */}
                <ul className="custom-dots">
                    {dots}
                </ul>
            </div>
        ),
    }
    : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        appendDots: (dots) => (
            <div className="custom-dots-container"> {/* Container para centralizar */}
                <ul className="custom-dots">
                    {dots}
                </ul>
            </div>
        ),
    };

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data); 
        });
    }, []); 

    const percDesconto = (isDiscount, amount) => {
        if (isDiscount) {
            const desconto = ((amount - isDiscount) / amount) * 100; 
            return `${desconto.toFixed(0)}% OFF`; 
        }
        return null; 
    };


    return (
        <div id="container-vitrine">
            <h2 className="lancamentos">Lançamentos</h2>
            <div id="container-slider-lancamento">
                <Slider {...settings} className="custom-slider">
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className="container-img-vitrine">
                                <img src={product.image} alt={product.name} className="img-lancamentos"/>
                                <a onClick={() => alteraFavorite(product.id)}>
                                    <img src={
                                    favIcon[product.id]
                                    ? "\\static\\images\\Favoritar-true.png"
                                    : "\\static\\images\\Favoritar-false.png"
                                    } alt="Icone adicionar ao carrinho" className="favoritar-vitrine"/>
                                </a>
                                <a href="">
                                    <img src="\static\images\Adicionar-pela-vitrine.png" alt="Icone adicionar ao carrinho" className="add-carrinho-vitrine"/>
                                </a>
                                <span className="texto-perc-desconto">{percDesconto(product.price.isDiscount, product.price.amount)}</span>
                            </div>
                            <h3 className="nome-produto-lancamento">{product.name}</h3>
                            <div className="preco-container">
                                <p className={`preco ${product.price.isDiscount ? "preco-desconto" : ""}`}>R${product.price.amount}</p>
                                {product.price.isDiscount && <p className="desconto">R${product.price.isDiscount}</p>}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default VitrineLancamento;
