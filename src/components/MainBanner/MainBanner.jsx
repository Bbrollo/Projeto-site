import Slider from "react-slick";
import "./MainBanner.scss";
import Header from "../Header/Header.jsx";
import useIsMobile from "../../isMobile";

function AutoPlay() {
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

  const mobile = useIsMobile();

  return (
    <div className="bannerRelativer">
      <header className="headerRelativo">
        <Header />
      </header>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src={
                mobile
                  ? "/static/images/banner-principal-1-mobile.png"
                  : "/static/images/banner-principal-1.png"
              }
              alt="Banner 1"
              className="imgBanner"
            />
          </div>
          <div>
            <img
              src={
                mobile
                  ? "/static/images/banner-principal-2-mobile.png"
                  : "/static/images/banner-principal-2.png"
              }
              alt="Banner 2"
              className="imgBanner"
            />
          </div>
          {mobile && (
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
      <input
        type="button"
        value="Conheça agora!"
        className="btn-conheca-agora"
      />
    </div>
  );
}

export default AutoPlay;
