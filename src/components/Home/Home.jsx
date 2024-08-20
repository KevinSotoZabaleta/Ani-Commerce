/** Importación de paquetes para generar carrusel */
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from "/one1.jpg";
import img2 from "/one2.jpg";
import img3 from "/one3.jpg";

const Home = () => {

  /**Propiedades para conf. carrusel */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h1 className='text-4xl'>Bienvenido al Ani-Commerce...</h1>


      <div className="max-w-screen-lg mx-auto py-40">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Imagen 1" className="w-1/2 h-auto" />
          </div>
          <div>
            <img src={img2} alt="Imagen 2" className="w-1/2 h-auto" />
          </div>
          <div>
            <img src={img3} alt="Imagen 2" className="w-1/2 h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;

