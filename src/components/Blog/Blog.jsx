import React from "react";
import './Blog.scss';  
import Slider from "react-slick";
import useIsMobile from '../../isMobile';

const Blog = () => {

    const isMobile = useIsMobile();

    
    // Configuração do Slider
    const settings = isMobile ? {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        appendDots: (dots) => (
            <div className="custom-dots-container"> {/* Container para centralizar */}
                <ul className="custom-dots">
                    {dots}
                </ul>
            </div>
        ),
    };


    return(
        <div className="container-blog">
            <div>
                <h2 className="conheca-mais">Conheça mais</h2>
                <p className="conheca-mais">Fique por dentro de tudo que acontece na Bebecê.</p>
            </div>
            <div>
            <Slider {...settings} className="slider-custom-blog">
                <div className="container-link">
                    <a href="#" className="link-blog">
                        <img src="\static\images\img-blog-1.png" alt="" className="img-blog" />
                        <h3 className="titulo-blog">É AMANHÃ</h3>
                        <p className="texto-blog">SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</p>
                        <p className="saiba-mais-blog">Saiba mais!</p>
                    </a>
                </div>
                <div className="container-link">
                    <a href="#" className="link-blog">
                        <img src="\static\images\img-blog-2.png" alt="" className="img-blog"/>
                        <h3 className="titulo-blog">NOVO LOGO, MESMA ESSÊNCIA.</h3>
                        <p className="texto-blog">Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
                        <p className="saiba-mais-blog">Saiba mais!</p>
                    </a>
                </div>
                <div className="container-link">
                    <a href="#" className="link-blog">
                        <img src="\static\images\img-blog-3.png" alt="" className="img-blog"/>
                        <h3 className="titulo-blog">Descubra o glamour em cada passo.</h3>
                        <p className="texto-blog">Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
                        <p className="saiba-mais-blog">Saiba mais!</p>
                    </a>
                </div>
            </Slider>
            </div>
        </div>
    );
};
export default Blog;