import React, { useState, useEffect } from "react";
import './VitrineLancamento.scss';
import { getProducts } from '../../utils';
import Slider from "react-slick";
import useIsMobile from '../../isMobile';

const VitrineLancamento = () => {
    const [products, setProducts] = useState([]);
    const isMobile = useIsMobile();

    
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

    return (
        <div id="container-vitrine">
            <h2 className="lancamentos">Lançamentos</h2>
            <div id="container-slider-lancamento">
                <Slider {...settings} className="custom-slider">
                    {products.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.name} className="img-lancamentos"/>
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
}

export default VitrineLancamento;
