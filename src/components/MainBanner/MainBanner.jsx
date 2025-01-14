import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './MainBanner.scss';
import Header from '../Header/Header.jsx'

function AutoPlay() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 1008);
      };
      // Checa o tamanho da tela quando o componente é montado
      checkMobile();
      // Adiciona um listener para detectar mudanças no tamanho da tela
      window.addEventListener('resize', checkMobile);
      // Limpa o listener quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, []);




  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="bannerRelativer">
        <header className="headerRelativo">
            <Header/>
        </header>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={isMobile ? "/static/images/banner-principal-1-mobile.png" : "/static/images/banner-principal-1.png"} alt="Banner 1" className="imgBanner"/>
            </div>
            <div>
              <img src={isMobile ? "/static/images/banner-principal-2-mobile.png" : "/static/images/banner-principal-2.png"}  alt="Banner 2" className="imgBanner"/>
            </div>
            {isMobile && (
            <div>
              <img
                src="/static/images/banner-principal-3-mobile.png"
                alt="Banner 3"
                className="imgBanner"
              />
            </div>
          )}
          </Slider>
        </div>
    </div>
  );
}

export default AutoPlay;
